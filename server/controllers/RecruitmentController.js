const Recruitment = require('../models/Recruitment');

// Start a recruitment drive
exports.startDrive = async (req, res) => {
  try {
    const { organizationId, startDate, endDate } = req.body;

    const newRecruitmentDrive = new Recruitment({
      organization: organizationId,
      startDate,
      endDate,
      active: true,
    });

    await newRecruitmentDrive.save();
    res.status(201).json(newRecruitmentDrive);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Stop a recruitment drive
exports.stopDrive = async (req, res) => {
  try {
    const driveId = req.params.driveId;

    const stoppedDrive = await Recruitment.findByIdAndUpdate(
      driveId,
      { active: false },
      { new: true }
    );

    if (!stoppedDrive) {
      return res.status(404).send('Recruitment drive not found');
    }

    res.json(stoppedDrive);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Handle recruitment application
exports.handleApplication = async (req, res) => {
  try {
    const { driveId, applicantId, status } = req.body;

    res.json({ message: 'Recruitment application handled successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
