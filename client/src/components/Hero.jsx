import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-blue-800 to-blue-600 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 items-center gap-10">

        <div>
          <h1 className="text-5xl font-extrabold leading-tight">
            See Better.
            <br />
            Live Better.
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Premium eyewear, precise eye care, and stylish frames for every
            lifestyle. Your trusted optical destination.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="tel:9893770766"
              className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300"
            >
              Call 9893770766
            </a>

            <button className="border border-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white hover:text-blue-800 transition">
              Learn More
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700"
            alt="Eyeglasses"
            className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;