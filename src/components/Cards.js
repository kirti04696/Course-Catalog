import { useState } from "react";
import Card from "./Card";
import "./Cards.css";

function Cards(props) {
  let courses = props.courses;

  const getCourses = () => {
    let allcourses = [];
    try {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allcourses.push(course);
        });
      });
    } catch (error) {}

    return allcourses;
  };

  return (
    <div className="Cards">
      {getCourses().map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
}

export default Cards;
