import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/Accordion";
import {UncontrolledRating} from "./components/UncontrolledRating/Rating";

function App() {
    return (
        <div className={"App"}>
            <OnOff />
            <UncontrolledAccordion titleValue={'Menu'} />


            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            <UncontrolledRating/>
            {/*<UncontrolledAccordion titleValue={'Users'} />*/}


        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}



export default App;
