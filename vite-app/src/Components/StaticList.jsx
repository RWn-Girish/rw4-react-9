import { useRef } from "react";


const StaticList = ({list}) => {
    const nameRef = useRef("")
    const liRef = useRef("")
    console.log("Name Ref: ", nameRef.current)

    const handleClick = () => {
        nameRef.current.innerHTML = "Hello World"
        liRef.current.style.border = "1px dashed blue"
    }
    return (
        <>
        <button onClick={handleClick}>Click</button>
            <h2 ref={nameRef}>Static List</h2>
            <li>{list[0]}</li>
            <li>{list[1]}</li>
            <li>{list[2]}</li>
            <li>{list[3]}</li>
            <li>{list[4]}</li>
            <li ref={liRef}>{list[5]}</li>
        </>
       )
};

export default StaticList;