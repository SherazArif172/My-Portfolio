import Aboutimg from "../About/image/about (1).png";
import { FaHandPointRight } from "react-icons/fa6";

function About() {
  return (
    <div className="mt-52 grid lg:grid-cols-2">
      <div className="text-white m-auto lg:pl-20 pl-0 lg:mx-0 mx-20">
        <h1 className="text-center text-5xl  mb-16">
          Know Who <span className="text-purple-400">I'M</span>
        </h1>
        <p className="text-xl leading-9">
          Hi Everyone, I am <span className="text-purple-400">Sheraz Arif</span>{" "}
          from <span className="text-purple-400">Sargodha, Pakistan</span> . I
          am currently employed as a Front-end Developer at IR Media. I have
          completed my Front-end learning just before.
        </p>
        <p className="text-2xl leading-9 mt-7">
          Apart from coding, some other activities that I love to do!
        </p>
        <ul className="text-xl leading-9 mt-4 ml-8 ">
          <li className="flex content-center items-center">
            <FaHandPointRight className="mr-2" /> Playing outdoor Games
          </li>
          <li className="flex content-center items-center">
            {" "}
            <FaHandPointRight className="mr-2" /> Watching Movies
          </li>
          <li className="flex content-center items-center">
            <FaHandPointRight className="mr-2" />
            Travelling
          </li>
        </ul>
        <p className="text-purple-400 text-center text-xl leading-8 mt-6">
          "Think by Your own Mind!" <br />
          -Sheraz
        </p>
      </div>
      <div className="m-auto lg:mt-0 mt-16">
        <img src={Aboutimg} alt="" className="w-[450px]" />
      </div>
    </div>
  );
}

export default About;
