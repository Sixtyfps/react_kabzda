import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";

function App() {
    return (
        <div>
            <Accordion titleValue={'Menu'} collapsed={false}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
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
