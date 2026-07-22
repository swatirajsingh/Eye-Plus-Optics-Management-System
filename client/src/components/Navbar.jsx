import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="bg-blue-800 text-white p-4 flex gap-6">

      <h1 className="font-bold text-xl mr-auto">
        Eye+ Optics
      </h1>


      <Link to="/">
        Dashboard
      </Link>


      <Link to="/customers">
        Customers
      </Link>


      <Link to="/appointments">
        Appointments
      </Link>


    </nav>

  );

}

export default Navbar;