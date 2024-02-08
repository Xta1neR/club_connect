const express = require('express');
const router = express.Router();
const cors = require('cors');

const {getAllAnnouncements, createAnnouncement, editAnnouncement, deleteAnnouncement} = require('../controllers/AnnouncementController');

//middleware
router.use(
	cors({
		credentials: true,
		origin: 'http://localhost:5173'
	})
)

//routes
router.get('/getAllAnnouncements', getAllAnnouncements)
router.post('/createAnnouncement', createAnnouncement)
router.put('/editAnnouncement', editAnnouncement)
router.delete('/deleteAnnouncement', deleteAnnouncement)

module.exports = router;