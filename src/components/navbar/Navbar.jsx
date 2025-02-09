import bookLogo from "../../assets/book.png";
const Navbar = () => {
  const links = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about-us" },
    { title: "All Book", url: "/all-book" },
    { title: "Cart", url: "/cart" },
    { title: "Profile", url: "/profile" },
  ];
  return (
    <div className="flex bg-zinc-800 text-white px-8 py-4 items-center justify-between">
      <div className="flex items-center">
        <img className="h-10 me-4" src={bookLogo} alt="logo" />
        <h1 className="text-2xl font-semibold">LiteraryLane</h1>
      </div>
      <div className="nav-links-lane flex items-center gap-4">
        <div className="flex gap-4">
          {links.map((item, i) => (
            <div
              className="hover:text-blue-500 transition-all duration-300"
              key={i}
            >
              {item.title}
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <button className="px-2 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">
            Sign In
          </button>
          <button className="px-2 py-1 bg-blue-500 rounded  hover:bg-white hover:text-zinc-800 transition-all duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
