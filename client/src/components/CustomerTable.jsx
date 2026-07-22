import { useEffect, useState } from "react";
import axios from "axios";

function CustomerTable() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [editCustomer, setEditCustomer] = useState(null);

  const fetchCustomers = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/customers"
      );

      setCustomers(res.data);

    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchCustomers();
  }, []);



  const deleteCustomer = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this customer?"
    );

    if (!confirmDelete) return;

    try {

      await axios.delete(
        `http://localhost:5000/api/customers/${id}`
      );

      fetchCustomers();

    } catch (error) {
      console.log(error);
    }
  };



  const updateCustomer = async () => {

    try {

      await axios.put(
        `http://localhost:5000/api/customers/${editCustomer._id}`,
        editCustomer
      );

      alert("Customer updated!");

      setEditCustomer(null);

      fetchCustomers();

    } catch (error) {
      console.log(error);
    }

  };



  const sendBillSMS = (customer) => {

    const message =
`Eye+ Optics

Dear ${customer.name},

Your bill details:

Amount: ₹${customer.billAmount}
CGST (2.5%): ₹${customer.cgst}
SGST (2.5%): ₹${customer.sgst}

Total: ₹${customer.totalAmount}

Thank you.
Contact: 9893770766`;


    window.open(
      `sms:${customer.phone}?body=${encodeURIComponent(message)}`
    );

  };



  const sendReminderSMS = (customer) => {

    const message =
`Eye+ Optics

Dear ${customer.name},

Your 6 month eye check-up is due.

Please visit us for your eye examination.

Contact: 9893770766`;


    window.open(
      `sms:${customer.phone}?body=${encodeURIComponent(message)}`
    );

  };



  const filteredCustomers = customers.filter((customer) =>
    customer.name
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    customer.phone.includes(search)
  );



  return (

    <div className="bg-white p-6 rounded-lg shadow">


      <h2 className="text-2xl font-bold mb-4">
        Customers
      </h2>



      {editCustomer && (

        <div className="border p-4 rounded mb-5">

          <h3 className="font-bold mb-3">
            Edit Customer
          </h3>


          <select
            value={editCustomer.paymentStatus}
            onChange={(e) =>
              setEditCustomer({
                ...editCustomer,
                paymentStatus:e.target.value
              })
            }
            className="border p-2 mr-3"
          >

            <option>Pending</option>
            <option>Paid</option>

          </select>



          <select
            value={editCustomer.orderStatus}
            onChange={(e) =>
              setEditCustomer({
                ...editCustomer,
                orderStatus:e.target.value
              })
            }
            className="border p-2 mr-3"
          >

            <option>Pending</option>
            <option>Ready</option>
            <option>Delivered</option>

          </select>



          <button
            onClick={updateCustomer}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Update
          </button>


        </div>

      )}



      <input
        type="text"
        placeholder="Search by name or phone..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="border p-2 rounded w-full mb-5"
      />



      <div className="overflow-x-auto">

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
                Frame
              </th>

              <th className="border p-2">
                Total
              </th>

              <th className="border p-2">
                Status
              </th>

              <th className="border p-2">
                Action
              </th>

            </tr>

          </thead>



          <tbody>

          {filteredCustomers.map((customer)=>(

            <tr key={customer._id}>


              <td className="border p-2">
                {customer.name}
              </td>


              <td className="border p-2">
                {customer.phone}
              </td>


              <td className="border p-2">
                {customer.frameName || "-"}
              </td>


              <td className="border p-2">
                ₹{customer.totalAmount}
              </td>


              <td className="border p-2">
                {customer.orderStatus}
              </td>



              <td className="border p-2">


                <button
                  onClick={()=>setEditCustomer(customer)}
                  className="bg-blue-600 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>


                <button
                  onClick={()=>deleteCustomer(customer._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded mr-2"
                >
                  Delete
                </button>


                <button
                  onClick={()=>sendBillSMS(customer)}
                  className="bg-green-600 text-white px-3 py-1 rounded mr-2"
                >
                  Bill SMS
                </button>


                <button
                  onClick={()=>sendReminderSMS(customer)}
                  className="bg-purple-600 text-white px-3 py-1 rounded"
                >
                  Reminder
                </button>


              </td>


            </tr>

          ))}

          </tbody>


        </table>

      </div>


    </div>

  );
}


export default CustomerTable;