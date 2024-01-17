import Card from "./Cards/Crad";
import Projectimg from "./Cards/images/Screenshot 2024-01-11 181206.png";
import { FaGithub } from "react-icons/fa";
import { MdEmojiObjects } from "react-icons/md";

function ParentProjects() {
  const ClickHandler = () => {
    window.location.href =
      "https://github.com/SherazArif172/Bootstrap_Netflix/commit/30a51873a622b12ca737291a9654938c36de1a0b";
  };

  const cards = [
    {
      id: "c1",
      imgg: Projectimg,
      para: "Check out my Netflix clone on my website! Demonstrating my skills in web development, it replicates Netflix's interface. A showcase of my coding abilities and creativity. Explore now!",
      onclick: ClickHandler,
      font1: FaGithub,
      githubbtn: "GitHub",
      font2: MdEmojiObjects,
      demobtnn: "Demo",
      heading: "Netflix",
    },
    // Add more card objects if needed
  ];

  return (
    <div className="flex justify-around">
      {cards.map((card) => (
        <Card
          key={card.id}
          imgg={card.imgg}
          paragraph={card.para}
          onclick={card.onclick}
          font1={card.font1}
          gitbtn={card.githubbtn}
          font2={card.font2}
          demobtnn={card.demobtnn}
          headiing={card.heading}
        />
      ))}
      {cards.map((card) => (
        <Card
          key={card.id}
          imgg={card.imgg}
          paragraph={card.para}
          onclick={card.onclick}
          font1={card.font1}
          gitbtn={card.githubbtn}
          font2={card.font2}
          demobtnn={card.demobtnn}
          headiing={card.heading}
        />
      ))}
      {cards.map((card) => (
        <Card
          key={card.id}
          imgg={card.imgg}
          paragraph={card.para}
          onclick={card.onclick}
          font1={card.font1}
          gitbtn={card.githubbtn}
          font2={card.font2}
          demobtnn={card.demobtnn}
          headiing={card.heading}
        />
      ))}
    </div>
  );
}

export default ParentProjects;
