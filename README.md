# Nido - A Flickr Clone

Nido is a Flickr clone design to learn about and share South American birds photos.

Link to live site: [Nido](https://aa-nido.herokuapp.com/)

[Database Schema](https://github.com/jaguitart/aa-nido/wiki/Database-Schema)
[Features](https://github.com/jaguitart/aa-nido/wiki/Features)


![NidoHome]()

## At A Glance
Nido is a full stack web application that allows logged users to:
 - Post a photo of a bird
 - Edit a photo only by the posting user
 - Delete a photo only by the posting user
 - Post a comment to a posted photo
 - Delete a comment to a posted photo

## Application Architecture
Nido is built with a React/Redux frontend and an Express backend. PostgreSQL is also used as a database.

## Tech-Stack
Javascript
React JS
Redux
node.js
Sequelize
Express.js
psql

## Key Features
### User Authorization
User authorization is handled in JS using BCrypt for password hashing. When users log in, the password they provide is rehashed and checked against the original password. 
![Splash Page]()

### Post/Edit/Delete a Photo
An authorized user can post a photo that can then be seen by any logged in user. Only the authorized user may then edit or delete the posted photos.
![Create a Photo]()

### Post/Delete a Comment
An authorized user may post an comment to a photo. Only the authorized user can then delete the comment to the posted photo. The user may also delete the posted comment.
![Create a Comment]()