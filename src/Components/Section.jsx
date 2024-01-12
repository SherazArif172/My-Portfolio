import MyImag from "../Assets/Images/avatar.svg";

function Section() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 mt-28">
        <div className="text-white lg:w-[770px] lg:pl-20 pl-0 lg:mx-0 mx-20">
          <h1 className="md:text-5xl text-3xl mb-16 text-center">
            LET ME <span className="text-purple-400">INTRODUCE</span> MYSELF
          </h1>
          <p className="mb-8 md:text-xl text-sm">
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
          </p>
          <p className="mb-8 md:text-xl text-sm">
            I am fluent in classics like{" "}
            <i>
              {" "}
              <span className="text-purple-400">Css and JavaScript.</span>
            </i>
          </p>
          <p className="mb-8 md:text-xl text-sm">
            My field of Interest's are building Front-End{" "}
            <i>
              <span className="text-purple-400">Technologies and Products</span>
            </i>{" "}
            and also open to{" "}
            <i>
              <span className="text-purple-400">
                {" "}
                guidance and collaboration.
              </span>
            </i>
          </p>
          <p className="mb-8 md:text-xl text-sm">
            Whenever possible, I also apply my passion for developing products
            with{" "}
            <i>
              <span className="text-purple-400">React Js</span>
            </i>{" "}
            and other{" "}
            <i>
              <span className="text-purple-400">
                Modern Javascript Library and Frameworks{" "}
              </span>
            </i>
            like{" "}
            <i>
              <span className="text-purple-400">Angular and Vue.js.</span>
            </i>
          </p>
        </div>
        <div className=" m-auto md:mt=0 mt-16">
          <img src={MyImag} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section;
