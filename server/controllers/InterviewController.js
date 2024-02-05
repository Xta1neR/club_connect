const Interview = require('../models/Interview');

// Schedule an interview
exports.scheduleInterview = async (req, res) => {
  try {
    const { userId, selectedSlot, selectedDomain } = req.body;

    res.json({ message: 'Interview scheduled successfully' });

  } catch (error) {
    console.error(error);

    res.status(500).send('Internal Server Error');
  }
};

// Accept an interview slot
exports.acceptInterview = async (req, res) => {
  try {
    const { userId, selectedSlot } = req.body;

    res.json({ message: 'Interview slot accepted successfully' });

  } catch (error) {
    console.error(error);
    
    res.status(500).send('Internal Server Error');
  }
};
