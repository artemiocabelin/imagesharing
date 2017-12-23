const mongoose = require('mongoose');
const User = mongoose.model('User');
const Media = mongoose.model('Media');

module.exports = {

    getAll : (req, res, next) => {
        Media.find({}).populate('_owner', 'email').exec((err, allMedia) => {
            if (err) { 
                return next(err); 
            }
            res.json(allMedia);
        })
    },

    getByUser : (req, res, next) => {
        const id = req.user._id;
        User.findById(id).populate('media').exec((err, user) => {
            if (err) { 
                return next(err); 
            }
            res.json(user)
        })
    },

    add : (req, res, next) => {
        const userId = req.user._id;
        const mediaLink = req.body.mediaLink
        const type = req.body.type
        let media = new Media({ mediaLink, type, _owner: userId })
        media.save(function(err, savedMedia) {
            if (err) { 
                return next(err); 
            }
            User.findOneAndUpdate({_id: userId}, {$push : { media : savedMedia }}, 
                (err, updatedUser) => {
                    if (err) {
                        next(err)
                    }
                    res.json(true)
                }
            )
        })
    },

    delete : (req, res, next) => {
        const id = req.user._id;
        const mediaId = req.params.id;
        Media.findById(mediaId).then(media => {
            if(media._owner.equals(id)) {
                Media.findOneAndRemove({_id : mediaId}, (err) => {
                    if(err) {
                        return next(err)
                    }
                })
                User.findOneAndUpdate({_id : id}, {$pull : { media: mediaId }}, 
                        (err, updatedUser) => {
                            if (err) {
                                return next(err)
                            }
                            res.json(true)
                        }
                    )
            } else {
                res.status(403).send({ error : "User does not match media's owner id"})
            }
        })
    },

    edit : (req, res, next) => {
        const id = req.user._id;
        const mediaId = req.params.id;
        const mediaLink = req.body.mediaLink;
        
        Media.findById(mediaId).then(media => {
            if(media._owner.equals(id)) {
                Media.findOneAndUpdate({_id: mediaId}, { mediaLink : mediaLink}, 
                    (err, updatedMedia) => {
                        if (err) {
                            return next(err)
                        }
                        res.json(true)
                    }
                )
            } else {
                res.status(403).send({ error : "User does not match media's owner id"})
            }
        })
    },

    like: (req, res, next) => {
        const id = req.user._id;
        const mediaId = req.params.id;
        User.findById(id).then(user => {
            const isInLikedMedia = user.likedMedia.some((media) => { return media.equals(mediaId)})
            if(isInLikedMedia) {
                User.findOneAndUpdate({_id: id}, {$pull: { likedMedia: mediaId }}).then(user => res.json(user))
                Media.findOneAndUpdate({_id: mediaId}, {$pull: { likes: id}})
            } else {
                User.findOneAndUpdate({_id: id}, {$push: { likedMedia: mediaId }}).then(user => res.json(user))
                Media.findOneAndUpdate({_id: mediaId}, {$push: { likes: id}})
            }
        })
    }
}