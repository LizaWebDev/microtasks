import React from "react";
import './NewComponent.css'

export const NewComponent = () => {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <table>
            <tbody>
            {topCars.map((car,index)=>{
                return (
                  <tr key={index}>
                      <td>{index+1}</td>
                      <td>{car.manufacturer}</td>
                      <td>{car.model}</td>
                  </tr>
                );
            })}
            </tbody>
        </table>
    );
}

