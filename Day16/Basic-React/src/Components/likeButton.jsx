// LikeButton.jsx
import { useState } from "react";
export default function LikeButton() {

    let [isLiked , setISLiked] = useState(false)
    let [clicks, setClicks] =useState(0)
    let toggleLike = () => {
        setISLiked(!isLiked);
        setClicks( clicks + 1)
        
    };

    let likeStyle = {color:"red"}

    return (
        <div>
            <p>States in React</p>
            <p>Number of Clicks : {clicks}</p>
            <p id="p" onClick={toggleLike}>
              {
                isLiked ? (
                    <i className = "fa-solid fa-heart" style={likeStyle}></i>
                ):(
                    <i className = "fa-regular fa-heart"></i>
                )
              }
            </p>
            
        </div>
    );
}