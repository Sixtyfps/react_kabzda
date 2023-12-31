import React, {useEffect, useState} from "react";

type PropsType = {

}

const get2digitStr = (num: number) => num < 10? '0' + num : num

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return <div>
        <span>{get2digitStr(date.getHours())}</span>
        :
        <span>{get2digitStr(date.getMinutes())}</span>
        :
        <span>{get2digitStr(date.getSeconds())}</span>
    </div>
}