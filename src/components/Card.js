import { BsFillSuitHeartFill } from "react-icons/bs";
import "./Cards.css";
import { useState } from "react";
import { toast } from "react-toastify";

function Cards(props) {
  let course = props.course;
  const [like, setLike] = useState(false);
  

  function likeHandler() {
    !like ? toast.success("Liked Successful") : toast.warning("liked Removed");
    setLike(!like);
    console.log("liked");
  }

  return (
    <div className="card">
      <div className="card-image">
        <img src={course.image.url}></img>
      </div>
      <div className="card-icon">
        <button className="heart-icon" onClick={likeHandler}>
          <BsFillSuitHeartFill
            color={like ? "#ff0000" : "#ababab"}
            fontSize={30}
          />
        </button>
      </div>

      <div className="card-content">
        <p className="title">{course.title}</p>
        <p className="desc">{course.description.substring(0, 100)}...</p>
      </div>
    </div>
  );
}
export default Cards;
