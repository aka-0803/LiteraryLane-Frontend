import library from "../../assets/library.png";
const Hero = () => {
  return (
    <div className="h-[75vh] flex">
      <div className="w-full lg:w-3/6 flex flex-col items-center  lg:items-start justify-center">
        <h1 className="text-4xl lg:text-6xl font-semibold text-yellow-100 text-center lg:text-left">
          something something book
        </h1>
        <p className="mt-4 text-xl text-zinc-300 text-center lg:text-left">
          lorem ispsum loresmi sjandsajkf hadjabfb fsdakfsafbks skdbakfslabfk
          skjdfnkadfkanf sdnflasflk
        </p>
        <div className="mt-8">
          <button className="text-yellow-100 text-xl lg:text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:bg-zinc-800 rounded-full">
            Discover books
          </button>
        </div>
      </div>
      <div className="w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center"><img src={library} alt="library" /></div>
    </div>
  );
};

export default Hero;
