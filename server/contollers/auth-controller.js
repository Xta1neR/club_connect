const express = require("express");

// HOME LOGIC 
const home = async (req, res) => {
try{
    res
        .status(200)
        .send("Hello World");

}catch(error){
    console.log(error);
}
};


//REGISTRATION LOGIC 
const register = async (req, res) => {
    try{
            res.status(200).send("Register Successful");
    } catch(error){
        console.log(error);
    }
};

//REGISTRATION SLOT BOOKING LOGIC
const registration_slots = async (req, res) => {
    try{
            res.status(200).send("Registration Slots Booked");
    } catch(error){
        console.log(error);
    }
}

//REGISTRATION DOMAIN BOOKING LOGIC
const registration_domains = async (req, res) => {
    try{
            res.status(200).send(" Domain Selected, Needs approval from Domain Heads.");
    } catch(error){
        console.log(error);
    }
}

//LOGIN LOGIC
const login = async (req, res) => {
    try{
            res.status(200).send("Login Successful");
    } catch(error){
        console.log(error);
    }
}


//ANNOUNCEMENT VIEWING LOGIC
const view_announcements = async (req, res) => {
    try{
            res.status(200).send("This is an announcement made by the DH/CEO/Mentor.");
    } catch(error){
        console.log(error);
    }
}

//ANNOUNCEMENT REACT LOGIC
const react_announcements = async (req, res) => {
    try {
            res.status(200).send("You reacted OK to the announcement.");
    } catch (error) {
        console.log(error);
        
    }
}

//PROFILE VIEWING FOR DOMAIN HEAD LOGIC
const view_members = async (req, res) => {
    try{
            res.status(200).send("Members of the organisation.");
    } catch(error){
        console.log(error);
    }
}

//INTERVIEW SLOT ACCEPTING LOGIC
const interview_slot_accept = async (req, res) => {
    try{
            res.status(200).send("Interview Slot Accepted");
    } catch(error){
        console.log(error);
    }
}

//MAKE AN ANNOUNCEMENT BY DOMAIN HEADS LOGIC
const makeAnnouncement = async (req, res) => {
    try {
        // Logic to make an announcement by domain heads
        res.status(200).send("Announcement made by Domain Head");
    } catch (error) {
        console.log(error);
    }
}

//SHOW THE LIST OF ALL THE MEMBERS IN THE ORGANIZATION LOGIC
const view_Allmembers = async (req, res) => {
    try{
            // Logic to fetch and display all the members in the organization
            res.status(200).send("Members of the organisation.");
    } catch(error){
        console.log(error);
    }
}

//ADD POST ABOUT THE EVENT BY CEO LOGIC
const EventAnnouncement = async (req, res) => {
    try{
            res.status(200).send("Event Announcement");
    } catch(error){
        console.log(error);
    }
}

//ADD THE ORGANZATION TO THE WEBSITE BY CEO LOGIC.
const add_organization = async (req, res) => {
    try{
            res.status(200).send("Organization Added");
    }catch(error){
        console.log(error);
    }
}

//VIEWING ALL MEMBERS ALONG WITH THIER ACADEMIC DETAILS.
const view_memDetails = async (req, res) => {
    try{
            res.status(200).send("Members of the organisation & their academic details.");
    } catch(error){
        console.log(error);
    }
}

//BROADCASTING THE ANNOUNCEMENT TO ALL MEMBERS LOGIC.
const broadcast = async(req,res) => {
    try {
            res.status(200).send("Announcement Broadcasted");
    } catch (error) {
        console.log(error);
    }
}

//EDIT AN ANNOUNCEMENT LOGIC BY MENTOR.
const editAnnouncement = async(req,res) => {
    try {
            res.status(200).send("Announcement Edited");
    } catch (error) {
        console.log(error);
    }
}


//DELETE AN ANNOUNCEMENT LOGIC BY MENTOR.
const deleteAnnouncement = async(req,res) => {
    try {
            res.status(200).send("Announcement Deleted");
    } catch (error) {
        console.log(error);
    }
}


//EXPORTING THE CONTROLLERS
module.exports = {
    home,
    register,
    registration_slots,
    registration_domains,
    login,
    view_announcements,
    react_announcements,
    view_members,
    interview_slot_accept,
    makeAnnouncement,
    view_Allmembers,
    EventAnnouncement,
    add_organization,
    view_memDetails,
    broadcast,
    editAnnouncement,
    deleteAnnouncement,

};
