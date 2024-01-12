import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Connect() {
  return (
    <div>
      <div className="text-white text-center mt-16 grid grid-cols-1 mb-20">
        <div>
          <h1 className="text-4xl tracking-widest">FIND ME ON</h1>
          <p>
            Feel free to{" "}
            <span className="text-purple-400 text-xl"> connect </span>
            with me
          </p>
        </div>
        <div>
          <a
            href="https://github.com/SherazArif172"
            className="text-purple-400 hover:text-white"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              style={{ margin: "0.5rem" }}
            />
          </a>
          <a
            href="https://twitter.com/sherazaofficial"
            className="text-purple-400 hover:text-white"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              size="2x"
              style={{ margin: "0.5rem" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sherazarifofficial/"
            className="text-purple-400 hover:text-white"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              style={{ margin: "0.5rem" }}
            />
          </a>
          <a
            href="https://www.instagram.com/sherazarifofficial/"
            className="text-purple-400 hover:text-white"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              style={{ margin: "0.5rem" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Connect;
