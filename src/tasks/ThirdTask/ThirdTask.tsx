import React from "react";
import {Button} from "./components/Button";

type ThirdTaskType = {
    title: string
}

export const ThirdTask = (props: ThirdTaskType) => {
    const Button1Foo = (name: string, age: number, address: string) => {
        console.log(`I'm ${name}. I'm ${age} years old. I live in ${address}`)
    }

    const Button2Foo = (name: string) => {
        console.log(`I'm ${name}`)
    }

    const Button3Foo = () => {
        console.log("I'm a stupid button")
    }

    return (
        <div>
            <hr/>
            <h2>{props.title}</h2>
            <Button name={'MyYouTubeChannel-1'} callBack={() => Button1Foo("Vasya", 21, 'Minsk')}/>
            <Button name={'MyYouTubeChannel-2'} callBack={() => Button2Foo('Ivan')}/>
            <Button name={'Stupid Button'} callBack={Button3Foo}/>
            <hr/>
        </div>
    );
}