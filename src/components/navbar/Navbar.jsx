import { Link } from "react-router-dom";
import bookLogo from "../../assets/book.png";
const Navbar = () => {
  const links = [
    { title: "Home", url: "/" },
    { title: "All Book", url: "/all-book" },
    { title: "Cart", url: "/cart" },
    { title: "Profile", url: "/profile" },
  ];
  return (
    <div className="flex bg-zinc-800 text-white px-8 py-4 items-center justify-between">
      <Link to="/" className="flex items-center">
        <img className="h-10 me-4" src={bookLogo} alt="logo" />
        <h1 className="text-2xl font-semibold">LiteraryLane</h1>
      </Link>
      <div className="nav-links-lane flex items-center gap-4">
        <div className="flex gap-4">
          {links.map((item, i) => (
            <Link to={item.url}
              className="hover:text-blue-500 transition-all duration-300"
              key={i}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          <Link  to="/logIn" className="px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300">
            Sign In
          </Link>
          <Link to="/signUp" className="px-4 py-1 bg-blue-500 rounded  hover:bg-white hover:text-zinc-800 transition-all duration-300">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
