import { Link } from "react-router-dom";
import background from "../assets/background.jpg";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-green-800 to-[#013c05]">
      <div
        className="relative flex items-center justify-center w-full h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {/* Overlay for shadow effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8))",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-[50px] md:text-[60px] font-bold text-white leading-snug">
            Addressing AI Bias Through Inclusivity
          </h1>
          <p className="text-[20px] md:text-[25px] text-white mt-4">
            A Case Study with Nigerian Food
          </p>
          <Link to="/predict-food">
            <button className="mt-6 bg-green-700 hover:bg-[#013c05] text-white text-lg font-semibold rounded-lg px-6 py-3">
              Go to Classifier
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
