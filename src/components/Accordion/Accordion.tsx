import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    callBack:()=>void
}

function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue}
                        collapsed={props.collapsed}
                        callBack={props.callBack}
        />
        { !props.collapsed && <AccordionBody title={props.titleValue}/> }
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
        <h3 onClick={props.callBack}>
            --{props.title}--
        </h3>
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

export default Accordion;