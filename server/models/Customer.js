import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    age: Number,

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },

    address: String,

    rightEye: String,

    leftEye: String,

    frameName: String,

    lensType: String,

    eyeTestDate: Date,

    nextCheckupDate: Date,

    billAmount: {
      type: Number,
      default: 0,
    },

    sgst: {
      type: Number,
      default: 0,
    },

    cgst: {
      type: Number,
      default: 0,
    },

    totalAmount: {
      type: Number,
      default: 0,
    },

    paymentStatus: {
      type: String,
      enum: ["Paid", "Pending"],
      default: "Pending",
    },

    orderStatus: {
      type: String,
      enum: ["Pending", "Ready", "Delivered"],
      default: "Pending",
    },

    notes: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Customer", customerSchema);