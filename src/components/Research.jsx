import React from "react";
import { BsEmojiAngry, BsEmojiNeutral, BsEmojiSmile, BsEmojiHeartEyes } from "react-icons/bs";

import "./Research.css"

const Research = ({data, updateFieldHandler}) => {
  return(
    <div className="userform">
      <div className="title">
        <p>Gostaríamos que você avaliasse sua experiênca usando nossa plataforma</p>
      </div>
      <div className="research">
        <label className="review-container unsatisfied">
          <input 
            type="radio" 
            name="review" 
            value="unsatisfied" 
            checked={data.review === "unsatisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}/>
          <BsEmojiAngry/>
          <p>Insatisfeito</p>
        </label>
        <label className="review-container neutral">
          <input 
            type="radio" 
            name="review" 
            value="neutral"
            checked={data.review === "neutral"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}/>
          <BsEmojiNeutral/>
          <p>Podia ser melhor</p>
        </label>
        <label className="review-container satisfied">
          <input 
            type="radio" 
            name="review" 
            value="satisfied"
            checked={data.review === "satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}/>
          <BsEmojiSmile/>
          <p>Satisfeito</p>
        </label>
        <label className="review-container very-satisfied">
          <input 
            type="radio" 
            name="review" 
            value="very-satisfied"
            checked={data.review === "very-satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}/>
          <BsEmojiHeartEyes/>
          <p>Muito Satisfeito</p>
        </label>
      </div>
      <div className="comment-area">
        <label htmlFor="comment">
          <p>Comentários:</p>
          <textarea 
            name="comment" 
            id="comment"
            placeholder="Deixe seu comentário" 
            resize="none"
            value={data.comment || ""}
            onChange={(e) => updateFieldHandler("comment", e.target.value)}/>
        </label>
      </div>
    </div>
  )
}

export default Research;
