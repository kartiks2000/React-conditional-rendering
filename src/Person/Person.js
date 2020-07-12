import React from 'react';
import Position from "../Position/Position";

const person = (props) => {
    return(
        <div>
            <h1>i am <span  onClick={props.click}>{props.name}</span> and i am {props.age} years old, my Id is {Math.floor(Math.random()*3000)}.</h1>
            <Position post={props.position}>I love it.</Position>
            <p>{props.children}</p>
        </div>
    );
};

export default person;