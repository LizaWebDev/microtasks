import React from 'react';
import './App.css';
import {FirstTask} from "./tasks/FirstTask/FirstTask";

function App() {
    return (
        <div className="App">
            <h1>Microtasks</h1>
            <FirstTask title={'Components and props'}/>
        </div>
    );
}

export default App;
