import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)


    console.log('SimpleExample')

    useEffect(()=> {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(()=> {
        console.log('useEffect only first render')
        document.title = counter.toString()
    }, [])

    useEffect(()=> {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter}{fake}
        <button onClick={()=>setFake(fake + 1)}>fake +</button>
        <button onClick={()=>setCounter(counter + 1)}>counter+</button>
    </>
}
export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)


    console.log('SetTimeoutExample')

    useEffect(()=> {
        setInterval(()=>{
            setCounter((state) => state+1)
        }, 1000)
    }, [])

    return <>
        Seconds:{counter}
        {/*<button onClick={()=>setFake(fake + 1)}>fake +</button>*/}
        {/*<button onClick={()=>setCounter(counter + 1)}>counter+</button>*/}
    </>
}
export const ClockExample = () => {

    const [hours, setHours] = useState(new Date().getHours())
    const [minutes, setMinutes] = useState(new Date().getMinutes())
    const [seconds, setSeconds] = useState(new Date().getSeconds())

    console.log(ClockExample)

    useEffect(()=> {
        setInterval(()=>{
            setHours(new Date().getHours())
            setMinutes(new Date().getMinutes())
            setSeconds(new Date().getSeconds())
        }, 1000)
    }, [])

    return <>
        <div>{hours} : {minutes} : {seconds}</div>
        {/*<button onClick={()=>setFake(fake + 1)}>fake +</button>*/}
        {/*<button onClick={()=>setCounter(counter + 1)}>counter+</button>*/}
    </>
}

