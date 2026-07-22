import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Completed"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Appointment",
  appointmentSchema
);