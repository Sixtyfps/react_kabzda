import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {

    // const collapsed = false

    let[toggle, setToggle] = useState(false)

    return <div>
        <AccordionTitle title={props.titleValue} onClick={()=>{setToggle(!toggle)}}/>
        {/*<button onClick={()=>{setToggle(!toggle)}}>TOGGLE</button>*/}
        { !toggle && <AccordionBody title={props.titleValue}/> }
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

export default UncontrolledAccordion;