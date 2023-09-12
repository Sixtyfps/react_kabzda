import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let[on, setOn] = useState(false)

    return (
        <div className={"App"}>

            <Rating value={ratingValue}
                    onClick={setRatingValue}
            />

            <UncontrolledRating/>

            <Accordion callBack={setAccordionCollapsed}
                       titleValue={"Menu"}
                       collapsed={accordionCollapsed}
            />

            <OnOff callBack={setOn}
                    state={on}
            />
            {/*<UncontrolledAccordion titleValue={'Menu'} />*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
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
