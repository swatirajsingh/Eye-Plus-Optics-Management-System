import express from "express";

import {
  addCustomer,
  getCustomers,
  deleteCustomer,
  updateCustomer,
} from "../controllers/customerController.js";


const router = express.Router();


router.post("/", addCustomer);

router.get("/", getCustomers);

router.put("/:id", updateCustomer);

router.delete("/:id", deleteCustomer);


export default router;