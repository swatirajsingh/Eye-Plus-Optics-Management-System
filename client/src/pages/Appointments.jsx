import { useEffect, useState } from "react";
import axios from "axios";

function Appointments() {

  const [appointments, setAppointments] = useState([]);

  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    date: "",
    time: "",
  });


  const fetchAppointments = async () => {
    try {

      const res = await axios.get(
        "https://eye-plus-optics-management-system.onrender.com/api/appointments"
      );

      setAppointments(res.data);

    } catch(error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchAppointments();
  }, []);



  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };



  const addAppointment = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "https://eye-plus-optics-management-system.onrender.com/api/appointments",
        form
      );


      alert("Appointment Added");


      setForm({
        customerName: "",
        phone: "",
        date: "",
        time: "",
      });


      fetchAppointments();


    } catch(error) {

      console.log(error);

    }

  };
const completeAppointment = async (id) => {

  try {

    await axios.put(
      `https://eye-plus-optics-management-system.onrender.com/api/appointments/${id}`,
      {
        status: "Completed"
      }
    );

    fetchAppointments();

  } catch(error) {

    console.log(error);

  }

};


  return (

    <div className="min-h-screen bg-gray-100 p-6">


      <div className="bg-white p-6 rounded shadow mb-6">

        <h2 className="text-2xl font-bold mb-5">
          Book Appointment
        </h2>


        <form
          onSubmit={addAppointment}
          className="grid gap-4"
        >

          <input
            name="customerName"
            placeholder="Customer Name"
            value={form.customerName}
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
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />


          <input
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />


          <button className="bg-blue-700 text-white p-2 rounded">
            Save Appointment
          </button>


        </form>

      </div>





      <div className="bg-white p-6 rounded shadow">


        <h2 className="text-2xl font-bold mb-5">
          Appointments
        </h2>



        {appointments.length === 0 ? (

          <p>No appointments.</p>

        ) : (

          <table className="w-full border">


            <thead>

              <tr className="bg-gray-100">

                <th className="border p-2">
                  Name
                </th>

                <th className="border p-2">
                  Phone
                </th>

                <th className="border p-2">
                  Date
                </th>

                <th className="border p-2">
                  Time
                </th>

                <th className="border p-2">
                  Status
                </th>

              </tr>

            </thead>



            <tbody>

              {appointments.map((item)=>(

                <tr key={item._id}>

                  <td className="border p-2">
                    {item.customerName}
                  </td>

                  <td className="border p-2">
                    {item.phone}
                  </td>

                  <td className="border p-2">
                    {new Date(item.date).toLocaleDateString()}
                  </td>

                  <td className="border p-2">
                    {item.time}
                  </td>

                 <td className="border p-2">

  {item.status}

  {item.status === "Pending" && (

    <button
      onClick={() =>
        completeAppointment(item._id)
      }
      className="bg-green-600 text-white px-2 py-1 ml-2 rounded"
    >
      Complete
    </button>

  )}

</td>
                </tr>

              ))}


            </tbody>


          </table>

        )}


      </div>


    </div>

  );

}

export default Appointments;