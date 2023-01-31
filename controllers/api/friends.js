const Friend = require('../../models/friend')
const User = require('../../models/user')

const dataController = {
    async index(req, res, next) {
        try {
            const friends = await Friend.find({})
            res.locals.data.friends = friends
            next()
        } catch (e) {
            res.status(400).json(e)
        }
    },
    async getUserFriends(req, res, next) {
        try {
            const userFriends = await Friend.find({ userAdded: req.params.id })
            res.locals.data.friends = userFriends
            next()
        } catch (e) {
            res.status(400).json(e)
        }
    },
/*     async getUserFollowing(req, res, next) {
        try {
            console.log(req)
            const userFollowing = await Friend.find({ friendUser: req.params.id })
            console.log(userFollowing)
            res.locals.data.friends = userFollowing
            next()
        } catch (e) {
            res.status(400).json(e)
        }
    }, */
    async create(req, res, next) {
        try {
            const friend = await Friend.create(req.body)
            //follower object passed into the followedUser
            const userAdded = await User.findByIdAndUpdate(friend.userAdded, {
                $push: {
                    friends: friend
                }
            })
            //update the followerUsers following array with the userFollowed user object
            await User.findByIdAndUpdate(friend.friendUser, {
                $push: {
                    friends: friend
                }
            })
            res.locals.data.friend = friend
            next()
        } catch (e) {
            res.status(400).json(e)
        }
    },
    async destroy(req, res, next) {
        try {
            //find the follower passed in by its object id
            const friend = await Friend.findById(req.params.id)
            // console.log(follower)
            //getting the follower object stored in the followingUser
            const addedUser = await User.findByIdAndUpdate(friend.userAdded, {
                $pull: {
                    //pulling the object stored in the array matching the objectid of the follower object
                    friends: { $in: [req.params.id] }
                }
            })
            await user.findByIdAndUpdate(friend.friendUser, {
                $pull: {
                    friends: { $in: [req.params.id] }
                }
            })
            //deleting the follower
            await Friend.deleteOne(friend)
            res.locals.data.friend = friend
            next()
        } catch (e) {
            res.status(400).json(e)
        }
    }
}



const apiController = {
    index(req, res, next) {
        res.json(res.locals.data.friends)
    },
    show(req, res, next) {
        res.json(res.locals.data.friend)
    }
}

module.exports = { dataController, apiController }