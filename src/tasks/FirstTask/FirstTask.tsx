import React from "react";
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";

type FirstTaskType = {
    title: string
}

export const FirstTask = (props: FirstTaskType) => {
    return (
        <div>
            <hr/>
            <h2>{props.title}</h2>
            <Header titleForHeader={'NEW HEADER'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Footer titleForFooter={'NEW FOOTER'}/>
            <hr/>
        </div>
    )
}