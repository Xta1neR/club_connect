const Organization = require('../models/Organization');

// Register a new organization
exports.register = async (req, res) => {
  try {
    const { name, description, adminId } = req.body;

    const newOrganization = new Organization({
      name,
      description,
      admin: adminId, 
    });

    await newOrganization.save();
    res.status(201).json(newOrganization);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Get organization details
exports.getOrganizationDetails = async (req, res) => {
  try {
    const organizationId = req.params.organizationId;

    const organization = await Organization.findById(organizationId);

    if (!organization) {
      return res.status(404).send('Organization not found');
    }

    res.json(organization);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Deactivate an organization
exports.deactivateOrganization = async (req, res) => {
  try {
    const organizationId = req.params.organizationId;

    const deactivatedOrganization = await Organization.findByIdAndUpdate(
      organizationId,
      { active: false },
      { new: true }
    );

    if (!deactivatedOrganization) {
      return res.status(404).send('Organization not found');
    }
    res.json(deactivatedOrganization);

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Create an announcement for an organization
exports.createAnnouncement = async (req, res) => {
  try {
    const { organizationId, title, content, createdBy } = req.body;
    
    res.json({ message: 'Announcement created successfully' });

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
