import React, {useState} from 'react';

type PropsType = {
    // on: boolean
    state: boolean
    callBack:(state: boolean)=>void
}

export const OnOff = (props: PropsType) => {




    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.state? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.state? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: props.state? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={ ()=>{props.callBack(true)} }>On</div>
            <div style={offStyle} onClick={ ()=>{props.callBack(false)} }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
