import React, {useState} from "react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action("Accordion mode changed")

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} callBack={callback}/>
export const UsersUncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} callBack={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"Users"} collapsed={value} callBack={()=>setValue(!value)}/>
}