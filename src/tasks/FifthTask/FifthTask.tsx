import React, {useState} from "react";
import {NewComponent} from "./NewComponent";

type FifthTaskType = {
    title: string
}

export type FilterType = 'all' | 'rubles' | 'dollars'

export const FifthTask = (props: FifthTaskType) => {

    const money = [
        {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'Rubles', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'Rubles', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'Rubles', value: 50, number: ' v1234567890'},
    ];

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money;

    if (filter === 'dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === 'Dollars');
    }

    if (filter === 'rubles') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === 'Rubles');
    }


    const onClickFilterHandler = (buttonName: FilterType) => {
        setFilter(buttonName)
    }

    return (
        <div>
            <hr/>
            <h2>{props.title}</h2>
            <NewComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
            <hr/>
        </div>
    );
}