function Card(props) {
  return (
    <div className="lg:mt-0 mt-6 border border-t border-purple-400 lg:w-[350px] w-full py-14 text-white rounded-lg shadow-md shadow-purple-400 ... transition-transform transform hover:-translate-y-3">
      <img src={props.imgg} alt="" />
      <h1 className="text-center text-2xl mt-4 font-bold">{props.headiing}</h1>
      <p className="mx-3 mt-5">{props.paragraph}</p>
      <div className=" flex justify-around mt-6">
        <button
          className="rounded-md flex content-center items-center bg-purple-400 px-4 py-2 w-32"
          onclick={props.onclick}
        >
          {props.font1 && <props.font1 className="mr-2" />}
          {props.gitbtn}
        </button>
        <button className="rounded-md flex content-center items-center bg-purple-400 px-4 py-2 w-32">
          {props.font2 && <props.font2 className="mr-2" />}
          {props.demobtnn}
        </button>
      </div>
    </div>
  );
}

export default Card;
