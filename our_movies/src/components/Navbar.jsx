import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav id="navbar">
            <h2>
                <Link to="/">Our Movies</Link>
            </h2>
        </nav>
    );
};

export default Navbar;