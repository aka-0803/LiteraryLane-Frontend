import Navbar from "./components/navbar/navbar";
import Home from "./pages/Home";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router , Route,Routes} from "react-router-dom";
import AllBooks from "./pages/AllBooks";
import Cart from  "./pages/Cart";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";


const App = () => {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/all-book" element={<AllBooks />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
};

export default App;
