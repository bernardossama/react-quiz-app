import { useRef } from "react";


export default function Answers({ answersList, selectedAnswer, answerState, onSelect }) {

    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answersList];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {shuffledAnswers.current.map((answer) => {

                const isSelected = selectedAnswer === answer;
                let cssClasses = '';

                if (answerState === 'answered' && isSelected) {
                    cssClasses = 'selected';
                }
                if (answerState === 'correct' && isSelected) {
                    cssClasses = 'correct';
                }
                if (answerState === 'wrong' && isSelected) {
                    cssClasses = 'wrong';
                }



                return <li key={answer} className="answer">
                    <button
                        onClick={() => onSelect(answer)}
                        className={cssClasses}
                        disabled={answerState != ''}>
                        {answer}
                    </button>
                </li>
            })}
        </ul>
    );
}