import React from 'react';
import './App.css';
import {FirstTask} from "./tasks/FirstTask/FirstTask";
import {SecondTask} from "./tasks/SecondTask/SecondTask";
import {ThirdTask} from "./tasks/ThirdTask/ThirdTask";

function App() {
    return (
        <div className="App">
            <h1>Microtasks</h1>
            <FirstTask title={'Components and props'}/>
            <SecondTask title={'Map()'}/>
            <ThirdTask title={'Button'}/>
        </div>
    );
}

export default App;
