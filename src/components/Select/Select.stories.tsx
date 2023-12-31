import React, {useState} from "react";
import {Select} from "./Select";



export default {
    title: 'Select',
    component: Select
}

export const SelectWithValue = () => {
    const [value, setValue] = useState('2')

    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: "Minsk"},
                    {value: '2', title: "Moscow"},
                    {value: '3', title: "Kiev"}
                ]}/>
    </>
}


export const SelectWithoutValue = () => {
    const [value, setValue] = useState(null)
    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: "Minsk"},
                    {value: '2', title: "Moscow"},
                    {value: '3', title: "Kiev"}
                ]}/>
    </>
}

