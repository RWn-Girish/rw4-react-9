import { useContext } from "react";
import CompD from "./CompD";
import { userContex } from "./CompA";

const CompC = () => {
    const {age} = useContext(userContex);
    return(
        <> 
            <h2>Component C Called... : {age}</h2>
            <CompD  />
        </>
    )
}

export default CompC;