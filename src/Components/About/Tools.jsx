import { TbBrandVscode } from "react-icons/tb";

function Tools() {
  return (
    <div className="mb-16 text-white">
      <div className=" text-5xl text-center mt-16">
        <h1>
          <span className="text-purple-400">Tools</span> I use
        </h1>
      </div>
      <div className="mt-12 flex flex-wrap justify-around">
        <div className="md:mt-0 mt-5 border border-purple-400 border-solid w-[150px] h-[130px] flex justify-center items-center text-2xl font-bold rounded-md transition-transform transform hover:-translate-y-2">
          <h1>
            <TbBrandVscode className="text-7xl" />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Tools;
