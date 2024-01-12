import About from "./About";
import SkillSet from "./SkillSet";
import Tools from "./Tools";

function ParentAbout() {
  return (
    <div>
      <About />, <SkillSet />, <Tools />
    </div>
  );
}

export default ParentAbout;
