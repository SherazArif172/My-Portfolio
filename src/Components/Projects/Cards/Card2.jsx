import { MdEmojiObjects } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Projectimg from "../Cards/images/Screenshot 2024-01-11 181206.png";

function Card2() {
  const ClickHandler = () => {
    window.location.href =
      "https://github.com/SherazArif172/Bootstrap_Netflix/commit/30a51873a622b12ca737291a9654938c36de1a0b";
  };

  return (
    <div className="lg:mt-0 mt-6 border border-t border-purple-400 lg:w-[350px] w-full py-14 text-white rounded-lg shadow-md shadow-purple-400 ... transition-transform transform hover:-translate-y-3">
      <img src={Projectimg} alt="" />
      <h1 className="text-center text-2xl mt-4 font-bold">Netflix</h1>
      <p className="mx-3 mt-5">
        Check out my Netflix clone on my website! Demonstrating my skills in web
        development, it replicates Netflix's interface. A showcase of my coding
        abilities and creativity. Explore now!
      </p>
      <div className=" flex justify-around mt-6">
        <button
          className="rounded-md flex content-center items-center bg-purple-400 px-4 py-2 w-32"
          onClick={ClickHandler}
        >
          <FaGithub className="mr-2" />
          GitHub
        </button>
        <button className="rounded-md flex content-center items-center bg-purple-400 px-4 py-2 w-32">
          <MdEmojiObjects className="mr-2" />
          Demo
        </button>
      </div>
    </div>
  );
}

export default Card2;
