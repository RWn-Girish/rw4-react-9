import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router";

const Header = () => {
    const navigate = useNavigate();
    const handleClick  = (name, age) =>{
        navigate(`/contact/${name}/${age}`)
    }
    return (
        <>
            <nav>
                <Link to={"/"}>Home</Link> || &nbsp;
                <Link to={"/about"}>About</Link>  || &nbsp;
                <Button onClick={()=> handleClick('Rohit Sharma', 16)}>Contact</Button>
            </nav>
        </>
    )
};

export default Header;