# Messenger

## Description

A messenger application that uses MERN Stack technologies. Multiple users should be able to communicate in real-time.

[Trello](https://trello.com/invite/b/kCHC8XMp/ATTI30c59506695802ba038d3cbacd1cbee980B80C83/messaging-app)

[Click Here!](https://mylittlemessenger.herokuapp.com/)

## Technologies Used:

- MongoDB/Mongoose

- Express

- React

- Node

- CSS

- JavaScript

-HTML

## Restful Routes for Chats

| # | Action| URL | HTTP Verb | Mongoose Method |
| ------------- | ------------- | --- | ---| --- | ---| --- | 
| ------------- | ------------- | --- | ---| --- | 
| 1  | Index  | /shows | Get  | Show.find | 
| 2  | Create  | /api/chats/ | POST | Chat.create(req.body) |
| 3  | Update  | /api/chats/:id | PUT | Chat.findByIdAndUpdate() 
| 4  | Delete  | /api/chats/:id | Delete | Chat.findByIdAndRemove() |

## Restful Routes for Users

| # | Action| URL | HTTP Verb | Mongoose Method |
| ------------- | ------------- | --- | ---| --- | ---| --- | 
| ------------- | ------------- | --- | ---| --- | 
| 1  | SignUp  | /api/users | POST  | User.find | 
| 2  | Login  | /api/users/login | POST | User.findOne(req.body) |

## Challenges

- JSON web token functionality

## Future Icebox

- Would like to create a multi user chat app