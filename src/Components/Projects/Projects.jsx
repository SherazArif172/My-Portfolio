import Card1 from "./Cards/Crad1";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";

function Projects() {
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 mb-16 lg:pl-10 pl-0 lg:mx-0 mx-10">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
}

export default Projects;
