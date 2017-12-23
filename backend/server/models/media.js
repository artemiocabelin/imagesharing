const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MediaSchema = new Schema({
    mediaLink: {
        type: String,
        required: [true, 'Image hyperlink is required'],
    },
    type: {
        type: String,
        required: [true, 'Type is required'],
    },
    likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    _owner: {type: Schema.Types.ObjectId, ref: 'User'},
}, {timestamps : true})

const Media = mongoose.model('Media', MediaSchema);