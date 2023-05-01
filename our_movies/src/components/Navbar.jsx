import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
    return (
        <nav id="navbar">
            <h2>
                <Link to="/"><BiCameraMovie />Our Movies</Link>
            </h2>
            <form>
                <input type="text" placeholder="Que filme procura ?" />
                <button type="submit"></button>
                <BiSearchAlt2 />
            </form>
        </nav>
    );
};

export default Navbar;