# Social Media
- Technology Used : ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) , ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) , ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

## AUTH

/register
- creating a new user with hashed password and creating a jwt token for authentication

/login
- checking user password and giving user its details


## User

/updateAUser
-  allows user to update its username and email

/deleteAUser
- allows user to delete its account

/getAUser
- allows to find a user id

/followAUser
- allows to follow a user

/unfollowAUser
- allows to unfollow a user



## Post

/createAPost
- allows to create a post using user id, title, desc, likes

/updateAPost
- allows to update a post if it is same user id

/deleteAPost
- allows to delete a post if it is same user id

/likeAPost
- allows to like a post by increasing number of count

/dislikeAPost
- allows to dislike a post by decreasing number of count

/getAPost
- allows to get a post

/timeline 
- allows to get post in decending order

