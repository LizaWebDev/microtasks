import React, {useState} from "react";

type FourthTaskType = {
    title: string
}

export const FourthTask = (props: FourthTaskType) => {
    let [a, setA] = useState(0)

    const increaseHandler = () => {
        setA(++a);
    }

    const resetHandler = () => {
        setA(0)
    }
    return (
        <div>
            <hr/>
            <h2>{props.title}</h2>
            <h3>{a}</h3>
            <button onClick={increaseHandler}>increase</button>
            <button onClick={resetHandler}>reset</button>
            <hr/>
        </div>
    );
}