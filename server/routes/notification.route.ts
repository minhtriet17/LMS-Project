import express from "express";
import { authorizaRoles, isAuthenticated } from "../middleware/auth";
import { get } from "http";
import { getNotifications, updateNotification } from "../controllers/notification.controller";

const notificationsRoute = express.Router();

notificationsRoute.get("/get-all-notifications", isAuthenticated, authorizaRoles("admin"), getNotifications);

notificationsRoute.put("/update-notification/:id", isAuthenticated, authorizaRoles("admin"), updateNotification);


export default notificationsRoute;