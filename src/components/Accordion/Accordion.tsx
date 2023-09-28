import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    callBack:()=>void
    items: ItemType[]
    onClick:(value: any)=>void
}

export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue}
                        collapsed={props.collapsed}
                        callBack={props.callBack}
        />
        { !props.collapsed && <AccordionBody items={props.items} title={props.titleValue} onClick={props.onClick}/> }
    </div>


}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    callBack:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={(e)=> props.callBack()}>--{props.title}--</h3>
    )
}

type AccordionBodyPropsType = {
    title: string
    items: ItemType[]
    onClick:(value: any)=>void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("Star rendered")
    return <ul>
        {props.items.map((i, index) => <li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
    </ul>
}