const express = require("express");
const router = express.Router();

// auth routes
const { register, login } = require("../controllers/auth");
const { checkAuthorizationHeaders, authorizeUser } = require("../middlewares/authenticate");


router.post("/register", register);
router.post("/login", checkAuthorizationHeaders, login);

    
// Users routes
const { createUsers, updateUsers, deleteUsers, getUsers, getAllUsers } = require('../controllers/users');
// 
router.post("/users/create", checkAuthorizationHeaders,authorizeUser("createUsers") ,createUsers);
router.put("/users/update/:id", checkAuthorizationHeaders,authorizeUser("updateUsers"), updateUsers);
router.delete("/users/delete/:id", checkAuthorizationHeaders, authorizeUser("deleteUsers"), deleteUsers);
router.get("/users/get/:id", checkAuthorizationHeaders, authorizeUser("readUsers"), getUsers);
router.get("/users/getAll", checkAuthorizationHeaders, authorizeUser("readUsers"), getAllUsers);

  
module.exports = router;
