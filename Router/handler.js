const express = require("express")
const { SignUp, Login, Logout, forgetPassword, updatePassword } = require("../Controller/auth")
const { createBlog, getBlog, singleBlog, updateBlog, deleteBlog } = require("../Controller/blog-controller")
const { isLoggedin, isAdmin } = require("../Middleware/auth")

const router = express.Router()

router.route("/sign-up").post(SignUp)
router.route("/log-in").post(Login)
router.route("/log-out").get(Logout)
router.route("/reset").post(forgetPassword)
router.route("/reset/:token").post(updatePassword)
router.route("/create-blog").post([isLoggedin, isAdmin], createBlog)
router.route("/get-blog").get([isLoggedin, isAdmin], getBlog)
router.route("/single-blog/:id").get([isLoggedin, isAdmin], singleBlog)
router.route("/update-blog/:id").patch([isLoggedin, isAdmin], updateBlog)
router.route("/delete-blog/:id").delete([isLoggedin, isAdmin], deleteBlog)

module.exports = router