import { useState } from "react";
import Card from "./Card";
import "./Cards.css";

function Cards(props) {
  let courses = props.courses;

  const getCourses = () => {
    let allcourses = [];
    try {
      console.log(courses);
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
      {getCourses().length > 0 ? (
        getCourses().map((course) => <Card key={course.id} course={course} />)
      ) : (
        <h2>Course not found</h2>
      )}
    </div>
  );
}

export default Cards;
