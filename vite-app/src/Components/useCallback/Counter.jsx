import { useCallback, useState } from "react";
import Button from "./Button";
import Test from "./Test";

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleINC = useCallback(() => {
         setCount(count => count + 1)
    }, [])
    const handleDEC = useCallback(() => {
         setCount(count => count - 1)
    }, [])
    return (
        <>
            <h2>Counter App - {count}</h2>
            <Test />
            {/* <button onClick={handleINC}>Increment</button> &nbsp;&nbsp;&nbsp;
            <button onClick={handleDEC}>Decrement</button> */}
            <Button name="Increment" handleClick={handleINC} />
            <Button name="Decrement" handleClick={handleDEC} />
        </>
    )
}

export default Counter;
