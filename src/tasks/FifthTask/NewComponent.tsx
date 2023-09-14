import React from "react";
import './NewComponent.css'
import {FilterType} from "./FifthTask";
import {Button} from "./Button";

type NewComponentType = {
    currentMoney: Array<MoneyType>
    onClickFilterHandler: (filter: FilterType) => void
}

type MoneyType = {
    banknotes: string
    value: number
    number: string
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <div>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span className={'money'}>{objFromMoneyArr.banknotes}</span>
                            <span className={'money'}>{objFromMoneyArr.value}</span>
                            <span className={'money'}>{objFromMoneyArr.number}</span>
                        </li>
                    );
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <Button name={'all'} callBack={() => props.onClickFilterHandler('all')}/>
                <Button name={'rubles'} callBack={() => props.onClickFilterHandler('rubles')}/>
                <Button name={'dollars'} callBack={() => props.onClickFilterHandler('dollars')}/>
            </div>
        </div>
    );
}