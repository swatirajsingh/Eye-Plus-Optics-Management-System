import Appointment from "../models/Appointment.js";


export const addAppointment = async (req, res) => {
  try {

    const appointment = await Appointment.create(
      req.body
    );

    res.status(201).json(appointment);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};



export const getAppointments = async (req, res) => {
  try {

    const appointments = await Appointment
      .find()
      .sort({ date: 1 });

    res.json(appointments);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
export const updateAppointment = async (req, res) => {
  try {

    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(appointment);

  } catch(error) {

    res.status(500).json({
      message: error.message
    });

  }
};