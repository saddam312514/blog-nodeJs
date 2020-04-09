const router = require('express').Router()
const {isAuthenticated} = require('../middleware/authMiddleware')


const {
  dashboardGetController,
  createProfileGetController,
  createProfilePostController,
  editProfileGetController
} = require('../controllers/dashboardController')

router.get('/', isAuthenticated, dashboardGetController)

router.get('/create-profile', isAuthenticated, createProfileGetController)
router.post('/create-profile',isAuthenticated, createProfilePostController)
router.get('/edit-profile',isAuthenticated,editProfileGetController)
router.post('/edit-profile')
module.exports = router