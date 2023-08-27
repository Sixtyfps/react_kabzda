import React from 'react';

type OnOffType = {
    switch: boolean
}

const On = () => {
    return (
        <div>
            <span>On</span>
        </div>
    )
}

const Off = () => {
    return (
        <div>
            <span>Off</span>
        </div>
    )
}

export const OnOff = (props: OnOffType) => {
    return (
        <>
            { props.switch && <On/>}

            { !props.switch && <Off/>}
        </>
    );
};
