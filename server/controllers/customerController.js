import Customer from "../models/Customer.js";

export const addCustomer = async (req, res) => {
  try {
    const {
      name,
      phone,
      age,
      gender,
      address,
      rightEye,
      leftEye,
      frameName,
      lensType,
      eyeTestDate,
      billAmount,
      paymentStatus,
      orderStatus,
      notes,
    } = req.body;

    // GST Calculation
    const sgst = billAmount * 0.025;
    const cgst = billAmount * 0.025;
    const totalAmount = billAmount + sgst + cgst;

    // Next Check-up = 6 months later
    let nextCheckupDate = null;

    if (eyeTestDate) {
      nextCheckupDate = new Date(eyeTestDate);
      nextCheckupDate.setMonth(nextCheckupDate.getMonth() + 6);
    }

    const customer = await Customer.create({
      name,
      phone,
      age,
      gender,
      address,
      rightEye,
      leftEye,
      frameName,
      lensType,
      eyeTestDate,
      nextCheckupDate,
      billAmount,
      sgst,
      cgst,
      totalAmount,
      paymentStatus,
      orderStatus,
      notes,
    });

    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().sort({ createdAt: -1 });
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.json({ message: "Customer deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(customer);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};