const router = require('express').Router()
const storyCtrl = require('../controllers/storyCtrl')
const auth = require('../middleware/auth');
const verifyRoles = require('../middleware/roles');
const ROLES_LIST = require('../utils/rolesLists');



router.route('/story').post( auth,verifyRoles(ROLES_LIST.ADMIN) ,storyCtrl.create)
.get(storyCtrl.getStories);

router.route('/story/:id')
    .delete(auth,verifyRoles(ROLES_LIST.ADMIN), storyCtrl.deleteStory)

module.exports = router