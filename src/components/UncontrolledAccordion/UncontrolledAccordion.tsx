import React, {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}



export function UncontrolledAccordion(props: AccordionPropsType) {

    let[state, dispatch] = useReducer(reducer, {collapsed: false})

    return <div>

        <AccordionTitle title={props.titleValue} onClick={()=>{dispatch({type: TOGGLE_CONSTANT})}}/>

        { !state.collapsed && <AccordionBody title={props.titleValue}/> }
    </div>


}

type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={()=>{props.onClick()}}>--{props.title}--</h3>
    )
}

type AccordionBodyPropsType = {
    title: string
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("Star rendered")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
