import { memo, useMemo } from "react";

const Test = memo(() => {
    console.log('Render....');
    let total = useMemo(() => {
        let sum = 0;
        for(let i = 1; i<=1550023015; i++){
            sum += i;
        }
        return sum;
    })
    return (
        <>
            <p>Hello Guys.... : {total}</p>
        </>
    )
});

export default Test;