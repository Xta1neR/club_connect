const Domain = require('../models/Domain');

// Select a domain
exports.selectDomain = async (req, res) => {
  try {
    const { userId, selectedDomain } = req.body;

    res.json({ message: 'Domain selected successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Get domain details
exports.getDomainDetails = async (req, res) => {
  try {
    const domainId = req.params.domainId;

    const domain = await Domain.findById(domainId);

    if (!domain) {
      return res.status(404).send('Domain not found');
    }

    res.json(domain);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Deactivate a domain
exports.deactivateDomain = async (req, res) => {
  try {
    const domainId = req.params.domainId;

    const deactivatedDomain = await Domain.findByIdAndUpdate(
      domainId,
      { active: false },
      { new: true }
    );

    if (!deactivatedDomain) {
      return res.status(404).send('Domain not found');
    }

    res.json(deactivatedDomain);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Broadcast announcement to a domain
exports.groupAnnouncementDomain = async (req, res) => {
  try {
    const { domainId, title, content, createdBy } = req.body;

    res.json({ message: 'Announcement broadcasted to domain members' });
    
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
