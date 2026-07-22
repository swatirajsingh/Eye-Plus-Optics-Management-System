import express from "express";

import {
  addAppointment,
  getAppointments,
  updateAppointment,
} from "../controllers/appointmentController.js";


const router = express.Router();


router.post("/", addAppointment);

router.get("/", getAppointments);

router.put("/:id", updateAppointment);


export default router;