import CustomerForm from "../components/CustomerForm";
import CustomerTable from "../components/CustomerTable";

function Customers() {

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-blue-800 mb-6">
        Customers
      </h1>

      <CustomerForm />

      <div className="mt-6">
        <CustomerTable />
      </div>

    </div>
  );

}

export default Customers;