import { useReducer, useState } from "react"
import { counterReducer } from "./counterReducer"

const Counter = () => {

    // const [count, setCount] = useState(10);
    const [hello, dispatch] = useReducer(counterReducer, {name: 'John',count: 150})
    const handleINC = () => {
        dispatch({type: 'INC'})
        // setCount(count => count + 1)
    }
    const handleDEC = () => {
         dispatch({type: 'DEC'})
        // setCount(count => count - 1)
    }
    return (
        <>
            <h2>Counter APP: {hello.count}</h2>
            <button onClick={handleINC}>Increment</button>
            <button onClick={handleDEC}>Decrement</button>
            
        </>
    )
}

export default Counter;