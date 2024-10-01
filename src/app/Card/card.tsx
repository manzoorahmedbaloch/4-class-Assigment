'use client';
import React from "react";
import { CardProps } from "../types";
import Button from "../Button/button";

const Card = (props: CardProps) => {
    return (
        <div className="bg-slate-300  w-full max-h-80 mx-16 text-center rounded-xl drop-shadow-md
        hover:scale-105 hover:shadow-lg p-6 pl-8 transition duration-300 ease-in-out hover:bg-slate-500
        hover:text-white cursor-pointer text-xl">
            <h1 className="text-2xl pb-3 underline">Student ID Card</h1>
            <div className="text-start">
                <h2>Name: {props.name}</h2>
                <h2>Age: {props.age}</h2>
                <h2>Roll Number: {props.rollNo}</h2>
                <h2>Day: {props.day}</h2>
                <h2>Time: {props.time}</h2>
            </div>
            <Button btnText={props.cardBtnText} />
        </div>
    );
};

export default Card;
