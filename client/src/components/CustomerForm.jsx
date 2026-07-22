import { useState } from "react";
import axios from "axios";

function CustomerForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    gender: "Male",
    address: "",
    rightEye: "",
    leftEye: "",
    frameName: "",
    lensType: "",
    eyeTestDate: "",
    billAmount: "",
    paymentStatus: "Pending",
    orderStatus: "Pending",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/customers", form);

      alert("Customer Added Successfully!");

      setForm({
        name: "",
        phone: "",
        age: "",
        gender: "Male",
        address: "",
        rightEye: "",
        leftEye: "",
        frameName: "",
        lensType: "",
        eyeTestDate: "",
        billAmount: "",
        paymentStatus: "Pending",
        orderStatus: "Pending",
        notes: "",
      });
    } catch (err) {
      console.log(err);
      alert("Error adding customer");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-2xl font-bold mb-6">Add Customer</h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          name="name"
          placeholder="Customer Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <input
          name="age"
          type="number"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="border p-2 rounded md:col-span-2"
        />

        <input
          name="rightEye"
          placeholder="Right Eye (RE)"
          value={form.rightEye}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          name="leftEye"
          placeholder="Left Eye (LE)"
          value={form.leftEye}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          name="frameName"
          placeholder="Frame Name"
          value={form.frameName}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          name="lensType"
          placeholder="Lens Type"
          value={form.lensType}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          name="eyeTestDate"
          type="date"
          value={form.eyeTestDate}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          name="billAmount"
          type="number"
          placeholder="Bill Amount"
          value={form.billAmount}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <select
          name="paymentStatus"
          value={form.paymentStatus}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option>Pending</option>
          <option>Paid</option>
        </select>

        <select
          name="orderStatus"
          value={form.orderStatus}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option>Pending</option>
          <option>Ready</option>
          <option>Delivered</option>
        </select>

        <textarea
          name="notes"
          placeholder="Notes"
          value={form.notes}
          onChange={handleChange}
          className="border p-2 rounded md:col-span-2"
          rows="3"
        />

        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white py-2 rounded md:col-span-2"
        >
          Save Customer
        </button>
      </form>
    </div>
  );
}

export default CustomerForm;