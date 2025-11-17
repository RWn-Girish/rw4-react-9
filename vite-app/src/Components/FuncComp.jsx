import { useEffect, useState } from "react";
import imgURL from "../assets/a.jfif"
const FunComp = ({name, age}) => {
    // console.log(useState())
    const [count, setCount] = useState(10)

    const handleClick = () => {
        setCount(count => count + 1)
        console.log('Click', count)
    }

    const handleOver = (id, name) => {
        console.log('Mouse Over Event Called', id, name);
    }
    const handleLeave = () => {
        console.log('Mouse Leave Event Called');
    }

    const hello = () => {
        if(count > 10){
            return <img src={imgURL} />
        }
    }

    // useEffect(()=> {
    //     console.log('Every time Called');
    // })
    // useEffect(()=> {
    //     console.log('First time render Called');
    // }, [])
    // useEffect(()=> {
    //     console.log('Update render Called');
    // }, [count])

    return (
        <div>
            <h2 style={{backgroundColor: count > 10 ?'red': 'blue'}} onMouseLeave={()=> handleLeave()} onMouseOver={() => handleOver(12, 'hello')}>Function Component - {count}</h2>
            {/* {count > 10 ? <img src={imgURL} /> : "No Image"} */}
            {hello()}
            <p>{name} - {age}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
};


export default FunComp;



