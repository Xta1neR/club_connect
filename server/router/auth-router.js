const express = require("express");
const router = express.Router();
const authcontrollers = require("../contollers/auth-controller");

router.route("/").get(authcontrollers.home);


// ALL THE ROUTES FOR REGISTRATION PROCESS.

router.route("/register").post(authcontrollers.register);

router.route("/registration_slots").post(authcontrollers.registration_slots);

router.route("/registration_domains").post(authcontrollers.registration_domains);

router.route("/login").post(authcontrollers.login);
module.exports = router;


// ALL THE ROUTES FOR MEMBERS OF THE ORGANISATION.

router.route("/view_announcements").get(authcontrollers.view_announcements);

router.route("/react_announcements").post(authcontrollers.react_announcements);


// ALL THE ROUTES FOR DOMAIN HEADS OF THE ORGANISATION.

router.route("/view_members").get(authcontrollers.view_members);

router.route("/interview_slot_accept").post(authcontrollers.interview_slot_accept);

router.route("/makeAannouncement").post(authcontrollers.makeAnnouncement);


//  ALL THE ROUTES FOR CEOs OF THE ORGANISATION.

router.route("/view_Allmembers").get(authcontrollers.view_Allmembers);

router.route("/EventAnnouncement").post(authcontrollers.EventAnnouncement);

router.route("/add_organization").post(authcontrollers.add_organization);


// ALL THE ROUTES FOR MENTORS.

router.route("/view_memDetails").get(authcontrollers.view_memDetails);

router.route("/broadcast").post(authcontrollers.broadcast);

router.route("/editAnnouncement").patch(authcontrollers.editAnnouncement);

router.route("/deleteAnnouncement").delete(authcontrollers.deleteAnnouncement);