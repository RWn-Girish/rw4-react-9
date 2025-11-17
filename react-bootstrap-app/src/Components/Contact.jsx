import { useParams } from "react-router";

const Contact = () => {
    const {name, age} = useParams();
    return (
        <>
            <h2>Contact Page : {name} {age} </h2>
        </>
    )
};

export default Contact;