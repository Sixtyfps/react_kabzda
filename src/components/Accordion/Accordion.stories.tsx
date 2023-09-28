import React, {useState} from "react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action("Accordion mode changed")
const onClickCallback = action("Item clicked")

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"}
                                                  collapsed={true}
                                                  callBack={callback}
                                                  items={[]}
                                                  onClick={onClickCallback}/>
export const UsersUncollapsedMode = () => <Accordion titleValue={"Users"}
                                                     collapsed={false}
                                                     callBack={callback}
                                                     items={[{title: "Kot", value: 1}, {title: "Pes", value: 2}, {title: "Barbos", value: 3}]}
                                                     onClick={onClickCallback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"Users"}
                      collapsed={value}
                      callBack={() => setValue(!value)}
                      items={[{title: "Kot", value: 1}, {title: "Pes", value: 2}, {title: "Barbos", value: 3}]}
                      onClick={(value) => {alert(value)}}/>
}