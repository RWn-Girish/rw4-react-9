import { createContext, useState } from "react";
import CompB from "./CompB";

export const userContex = createContext()

const CompA = () => {
    let [name, setname] = useState("John Peter");
    const [age, setAge] = useState(15);
    return(
        <>
            <h2>Component A Called... : {name}</h2>
            <userContex.Provider value={{hello:name, age: age}}>
                <CompB />
            </userContex.Provider>
        </>
    )
}

export default CompA;