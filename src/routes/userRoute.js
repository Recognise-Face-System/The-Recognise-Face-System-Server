const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/authentication')
const userController = require('../controller/userController')
// router.get('/gen-otp', verifyToken, userController.generateOtp)
// router.get('/verify-otp', verifyToken, userController.verifyOtp)
router.patch('/update', verifyToken, userController.updateInfo)
router.patch('/changePassword', verifyToken, userController.changePassword)
router.get('/attendanceTrack', verifyToken, userController.getAttendanceTrack)
router.get('/employeeDetails', verifyToken, userController.getEmployeeDetails)
router.post('/sendForm', verifyToken, userController.sendForm)
router.get('/getForm', verifyToken, userController.getForm)
router.get('/getNotification', verifyToken, userController.getNotification)

module.exports = router
