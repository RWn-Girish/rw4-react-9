import { useContext } from "react";
import { userContex } from "./CompA";

const CompD = () => {
    const {hello} = useContext(userContex)
    return(
        <>
        <h2>Component D Called... {hello} </h2>
        </>
    )
}

export default CompD;