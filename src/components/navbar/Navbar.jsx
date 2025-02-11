import { Link } from "react-router-dom";
import bookLogo from "../../assets/book.png";
import { FaGripLines } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
  const links = [
    { title: "Home", url: "/" },
    { title: "All Book", url: "/all-book" },
    { title: "Cart", url: "/cart" },
    { title: "Profile", url: "/profile" },
  ];
  const [mobileNav, setMobileNav] = useState("hidden");
  return (
    <>
      <nav className="z-50 relative flex bg-zinc-800 text-white px-8 py-4 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img className="h-10 me-4" src={bookLogo} alt="logo" />
          <h1 className="text-2xl font-semibold">LiteraryLane</h1>
        </Link>
        <div className="nav-links-lane block md:flex items-center gap-4">
          <div className=" hidden md:flex gap-4">
            {links.map((item, i) => (
              <Link
                to={item.url}
                className="hover:text-blue-500 transition-all duration-300"
                key={i}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className=" hidden md:flex gap-4">
            <Link
              to="/logIn"
              className="px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
            >
              Sign In
            </Link>
            <Link
              to="/signUp"
              className="px-4 py-1 bg-blue-500 rounded  hover:bg-white hover:text-zinc-800 transition-all duration-300"
            >
              Sign Up
            </Link>
          </div>
          <button
            className="text-white text-2xl hover:text-zinc-400"
            onClick={() =>
              mobileNav === "hidden"
                ? setMobileNav("block")
                : setMobileNav("hidden")
            }
          >
            <FaGripLines />
          </button>
        </div>
      </nav>
      <div
        className={`${mobileNav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}
      >
        {links.map((item, i) => (
          <Link
            to={item.url}
            className={`${mobileNav} text-white mb-4 font-semibold text-4xl hover:text-blue-500 transition-all duration-300`}
            key={i}
            onClick={() =>
              mobileNav === "hidden"
                ? setMobileNav("block")
                : setMobileNav("hidden")
            }
          >
            {item.title}
          </Link>
        ))}
        <Link
          to="/logIn"
          className={`${mobileNav} px-8 mb-8 text-3xl py-2 border text-white border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300`}
          onClick={() =>
            mobileNav === "hidden"
              ? setMobileNav("block")
              : setMobileNav("hidden")
          }
        >
          Sign In
        </Link>
        <Link
          to="/signUp"
          className={`${mobileNav} px-8 mb-8 text-3xl py-2 bg-blue-500 rounded  hover:bg-white hover:text-zinc-800 transition-all duration-300`}
          onClick={() =>
            mobileNav === "hidden"
              ? setMobileNav("block")
              : setMobileNav("hidden")
          }
        >
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default Navbar;
