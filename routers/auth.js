const express = require("express");
const {
  register,
  login,
  getUser,
  logout,
  imageUpload,
  forgotPassword,
  resetPassword,
  editDetails,
} = require("../controllers/auth");
const { getAccessToRoute } = require("../middlewears/authorization/auth");
const { get } = require("./question");
const profileImageUpload = require("../middlewears/libraries/profileImageUpload");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", getAccessToRoute, getUser);
router.get("/logout", getAccessToRoute, logout);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword", resetPassword);
router.put("/edit", getAccessToRoute, editDetails);

router.post(
  "/upload",
  [getAccessToRoute, profileImageUpload.single("profile_image")],
  imageUpload
);

module.exports = router;
