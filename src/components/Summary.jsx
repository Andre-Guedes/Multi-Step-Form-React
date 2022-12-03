import React from "react";
import { BsEmojiAngry, BsEmojiNeutral, BsEmojiSmile, BsEmojiHeartEyes } from "react-icons/bs";

import "./Summary.css"

const emojiReview = {
    unsatified: <BsEmojiAngry/>,
    neutral: <BsEmojiNeutral/>,
    satisfied: <BsEmojiSmile/>,
    very_satisfied: <BsEmojiHeartEyes/>
}

const Summary = ({data}) => {
    return(
        <div className="userform">
            <div className="title">
                <h2>Falta pouco!</h2>
                <p>A sua opinião é muito importante para nós. Em breve, você receberá um cupom de desconto para próxima compra.</p>
                <p>Para concluir, basta clicar o botão enviar abaixo.</p>
                <h3>{data.name} aqui está um resumo de sua avaliação:</h3>
            </div>
            <div className="summary-container">
                <p className="review-summary">
                    <span>Satisfação com o produto: {emojiReview[data.review]}</span>
                </p>
                <p className="comment-summary">
                    <span>Comentário: 
                        <p>{data.comment}</p>
                    </span>
                </p>
            </div>
        
        </div>
    )
}

export default Summary;
