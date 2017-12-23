# ImageShare (Backend)

To set up:
```
npm install
npm run start
```
Notes: Make sure to have nodemon installed

### API

All requests should have a **Authorization header** except for the Signup route.

Authorization header can be obtained through a JSON Web Token

### API Endpoint

The following endpoints are available:

| Endpoints       | Usage          | Params         |
|-----------------|----------------|----------------|
| `GET /api/media/` | Get all media. |  |
| `POST /api/media/:id` | Add media and associate it with logged in user | id - Logged In user's id <br> mediaLink - [String] <br> type - [String] |
| `GET /api/media/:id` | Get all media associated with logged in user | id - Logged in User |
| `DELETE /api/media/:id` | Delete a media associated with logged in User. | **id** - media Id |
| `PUT /api/media/:id` | Update media details associated with logged in User. | id - media Id |
| `POST /api/media/:id/like` | If not already liked, Media will be set to liked by logged in user and vice versa. | id - media Id |
| `POST /api/user/signup` | Sign up User details. | email - user's email <br> password - user's password |
| `POST /api/user/signin` | Sign in with valid User credentials to receive token. | email - user's email <br> password - user's password|

