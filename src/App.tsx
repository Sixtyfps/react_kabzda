import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState(false)

    return (
        <div className={"App"}>

            <Rating value={ratingValue}
                    onClick={setRatingValue}
            />

            <UncontrolledRating/>

            <Accordion callBack={() => {
                setAccordionCollapsed(!accordionCollapsed)
            }}
                       titleValue={"Menu"}
                       collapsed={accordionCollapsed}
            />

            <UncontrolledOnOff onChange={setOn}/> {on.toString()}

            {/*<OnOff on={on}*/}
            {/*       callBack={setOn}*/}
            {/*/>*/}
            {/*<UncontrolledAccordion titleValue={'Menu'} />*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
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
