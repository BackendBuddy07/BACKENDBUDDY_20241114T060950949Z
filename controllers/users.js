// Generated controllers based on user input
const mongoose = require("mongoose"); 
const express = require("express"); 
const Users = require('../models/usersSchema');

// CRUD operations for Users
// Create Controller 
const createUsers = async (req, res) => { 
    const { name, choices } = req.body;
    try {
        const users = await Users.create({ name, choices }) 
        await users.save();
        res.status(201).json(users);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        res.status(500).json({'Server Error ': error.message});
    }
};

// Update Controller 
const updateUsers = async (req, res) => { 
    const _id=req.params.id;
    const { name, choices } = req.body;
    try {
        const users = await Users.findByIdAndUpdate( _id, { name, choices },{new:true}) 
        if (!users) {
            return res.status(404).send('users not found');
        }
        await users.save();
        res.status(201).json(users);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// Delete Controller 
const deleteUsers = async (req, res) => { 
    const _id=req.params.id;
    try {
        const users = await Users.findById(_id)
        if (!users) {
            return res.status(404).send('users not found');
        }
        await Users.deleteOne({_id: _id})
        await users.save();
        res.status(201).json({message: "Deleted Successfully"});
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// get by Id Controller 
const getUsers = async (req, res) => { 
    const _id=req.params.id;
    try {
        const users = await Users.findById(_id)
        if (!users) {
            return res.status(404).send('users not found');
        }
        res.status(201).json(users);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// getAll Controller 
const getAllUsers = async (req, res) => { 
    try {
        const users = await Users.find({})
        if (!users) {
            return res.status(404).send('Nothing found !!');
        }
        res.status(201).json(users);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

module.exports = {
    createUsers,
    updateUsers,
    deleteUsers,
    getUsers,
    getAllUsers
}