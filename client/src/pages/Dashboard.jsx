import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [data, setData] = useState({
    totalCustomers: 0,
    totalAppointments: 0,
    pendingOrders: 0,
    totalSales: 0,
  });


  const fetchDashboard = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/dashboard"
      );

      setData(res.data);

    } catch(error) {

      console.log(error);

    }

  };


  useEffect(() => {
    fetchDashboard();
  }, []);



  return (

    <div className="min-h-screen bg-gray-100 p-6">


      <h1 className="text-3xl font-bold mb-6 text-blue-800">
        Eye+ Optics Dashboard
      </h1>



      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">


        <div className="bg-white p-6 rounded shadow">

          <h2 className="font-bold">
            Total Customers
          </h2>

          <p className="text-3xl mt-3">
            {data.totalCustomers}
          </p>

        </div>



        <div className="bg-white p-6 rounded shadow">

          <h2 className="font-bold">
            Appointments
          </h2>

          <p className="text-3xl mt-3">
            {data.totalAppointments}
          </p>

        </div>



        <div className="bg-white p-6 rounded shadow">

          <h2 className="font-bold">
            Pending Orders
          </h2>

          <p className="text-3xl mt-3">
            {data.pendingOrders}
          </p>

        </div>



        <div className="bg-white p-6 rounded shadow">

          <h2 className="font-bold">
            Total Sales
          </h2>

          <p className="text-3xl mt-3">
            ₹{data.totalSales}
          </p>

        </div>


      </div>


    </div>

  );

}

export default Dashboard;