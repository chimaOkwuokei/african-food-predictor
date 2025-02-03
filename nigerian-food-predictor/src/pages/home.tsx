import { Link } from "react-router-dom";
import background from "../assets/background.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {sam, chidiebere, osadebey} from "../assets/contributors";

const team = [
  {
    name: "Tito Osadebey",
    // role: "Developer",
    image: osadebey, // Replace with actual image paths or imports
    linkedin: "https://www.linkedin.com/in/tito-osadebe",
    github: "https://www.github.com/titoausten",
  },
  {
    name: "Samuel Oyefusi",
    // role: "Project Manager",
    image: sam,
    linkedin: "https://www.linkedin.com/in/samuel-oyefusi",
    github: "https://github.com/Oyefusi-Samuel",
    // instagram: "https://www.instagram.com/koredeoyefusi/profilecard",
  },
  {
    name: "Chidiebere Micah",
    // role: "Project Manager",
    image: chidiebere,
    linkedin: "https://www.linkedin.com/in/micah-udeogu-876390161/",
    // github: "https://github.com/Oyefusi-Samuel",
    // instagram: "https://www.instagram.com/koredeoyefusi/profilecard",
  },
];

export function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-green-800 to-[#013c05]">
      {/* Hero Section */}
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

        <div className="absolute inset-0 bg-opacity-50"></div>
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

      {/* Team Section */}
      <section className="p-10 py-16 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Meet the Team
        </h2>
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center bg-gray-100 p-6 rounded-lg shadow-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              {/* <p className="text-gray-600">{member.role}</p> */}
              <div className="flex justify-center mt-4 space-x-4">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-blue-600 hover:text-blue-800 text-2xl" />
                  </a>
                )}
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-gray-800 hover:text-black text-2xl" />
                  </a>
                )}
                {/* {member.instagram && (
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-pink-600 hover:text-pink-800 text-2xl" />
                  </a>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
