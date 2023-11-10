import express from "express";
import {  addAnwser, addQuestion, addReplyToReview, addReview, editCourse, getAllCourses, getCourseByUser, getSingleCourse, uploadCourse } from "../controllers/course.controller";
import { authorizaRoles, isAuthenticated } from "../middleware/auth";

const courseRouter = express.Router();

courseRouter.post("/createCourse",isAuthenticated, authorizaRoles("admin"), uploadCourse)

courseRouter.put("/editCourse/:id",isAuthenticated, authorizaRoles("admin"), editCourse)

courseRouter.get("/getCourse/:id",isAuthenticated, authorizaRoles("admin"), getSingleCourse)

courseRouter.get("/getCourse/",isAuthenticated, authorizaRoles("admin"), getAllCourses)

courseRouter.get("/getCourseContent/:id",isAuthenticated, getCourseByUser)

courseRouter.put('/addQuestion/',isAuthenticated, addQuestion)

courseRouter.put('/addAnswer/',isAuthenticated, addAnwser)

courseRouter.put('/addReview/:id',isAuthenticated, addReview)

courseRouter.put('/addReply',isAuthenticated,authorizaRoles("admin"), addReplyToReview) 



export default courseRouter