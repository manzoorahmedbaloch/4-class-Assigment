import React from "react";
import Card from "./Card/card"; 

const students = [
  { name: 'Manzoor Ahmed', age: 24, rollNo: 366315, day: "Monday", time: "2 To 5", cardBtnText: "Comments" },
  { name: 'Shabaz Baloch', age: 21, rollNo: 1144, day: "Monday", time: "2 To 5", cardBtnText: "Comments" },
  { name: 'Muzfair Katyar', age: 19, rollNo: 1234, day: "Monday", time: "2 To 5", cardBtnText: "Comments" }
];

const Home = () => {
  return (
    <>
      <div className=" bg-white heading text-4xl text-center pt-10 text-black">
        <h1>Student Identification Card </h1>
      </div>
      <div className="flex mt-52 h-full w-full fix">
        {students.map((student, index) => (
          <Card 
            key={index}
            name={student.name}
            age={student.age}
            rollNo={student.rollNo}
            day={student.day}
            time={student.time}
            cardBtnText={student.cardBtnText} 
          />
        ))}
      </div>
    </>
  );
};

export default Home;
