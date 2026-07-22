import express from "express";
import Customer from "../models/Customer.js";
import Appointment from "../models/Appointment.js";

const router = express.Router();


router.get("/", async (req, res) => {

  try {

    const totalCustomers = await Customer.countDocuments();

    const totalAppointments = await Appointment.countDocuments();


    const pendingOrders = await Customer.countDocuments({
      orderStatus: "Pending"
    });


    const sales = await Customer.aggregate([
      {
        $group: {
          _id: null,
          total: {
            $sum: "$totalAmount"
          }
        }
      }
    ]);


    res.json({

      totalCustomers,

      totalAppointments,

      pendingOrders,

      totalSales:
        sales[0]?.total || 0

    });


  } catch(error) {

    res.status(500).json({
      message:error.message
    });

  }

});


export default router;