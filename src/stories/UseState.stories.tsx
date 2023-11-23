import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo'
}

function generateData() {
    //some time-consuming ang difficult code
    console.log('generate complex data')
    return 1
}

export const Example1 = () => {
    console.log("Example 1")

    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => {
        return state+1
    }

    return <>
        <button onClick={()=>{setCounter(state => state + 1)}}>+</button>
        {counter}
    </>
}

