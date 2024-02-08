const Announcement = require('../models/Announcement');

// Get all announcements
exports.getAllAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find();
    res.json(announcements);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Create a new announcement
exports.createAnnouncement = async (req, res) => {
  try {
    const { title, content, createdBy } = req.body;

    const newAnnouncement = new Announcement({
      title,
      content,
      createdBy,
    });

    await newAnnouncement.save();
    res.status(201).json(newAnnouncement);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Edit an announcement
exports.editAnnouncement = async (req, res) => {
  try {
    const { title, content } = req.body;
    const announcementId = req.params.announcementId;

    const updatedAnnouncement = await Announcement.findByIdAndUpdate(
      announcementId,
      { title, content },
      { new: true }
    );

    if (!updatedAnnouncement) {
      return res.status(404).send('Announcement not found');
    }

    res.json(updatedAnnouncement);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};


// Delete an announcement
exports.deleteAnnouncement = async (req, res) => {
  try {
    const announcementId = req.params.announcementId;

    const deletedAnnouncement = await Announcement.findByIdAndDelete(announcementId);

    if (!deletedAnnouncement) {
      return res.status(404).send('Announcement not found');
    }

    res.json(deletedAnnouncement);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
