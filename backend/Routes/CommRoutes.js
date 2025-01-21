const CommModel = require("../Models/CommunitySchma")
const express = require('express')
const CommRouter = express.Router()
const {newMemberHandler,getMemberList,deleteMember} = require('../Controllers/Community')

CommRouter.post('/add',newMemberHandler)
CommRouter.get('/',getMemberList)
CommRouter.delete('/del/:id',deleteMember)


module.exports = CommRouter
