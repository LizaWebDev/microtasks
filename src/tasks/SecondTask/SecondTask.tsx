import React from "react";
import {NewComponent} from "./NewComponent";

type SecondTaskType = {
    title: string
}

export const SecondTask = (props: SecondTaskType) => {
    return (
        <div>
            <hr/>
            <h2>{props.title}</h2>
            <NewComponent/>
            <hr/>
        </div>
    );
}