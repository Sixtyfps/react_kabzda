import React, {useState} from "react";
import AnalogClock from "./AnalogClock";
import {Clock} from "../Clock/Clock";


export default {
    title: 'AnalogClock',
    component: AnalogClock,
}

export const BaseExample = () => {
    return <AnalogClock/>
}

export const SwitchDigitalToAnalog = () => {
    const [digital, setDigital] = useState<boolean>(true)
    const [analog, setAnalog] = useState<boolean>(false)

    const onClickHandler = () => {
        setDigital(!digital)
        setAnalog(!analog)
    }


    return (
        <div>
            {digital && <Clock/>}
            {analog && <AnalogClock/>}
            <button onClick={onClickHandler}>Change View</button>
        </div>
    )

}