import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';


export default function Summary({ answers }) {

    let correctAnswers = 0;
    let noAnswer = 0
    let incorrectAnswers = 0;
    let totalAnswers = 0
    answers.map((answer, index) => {
        if (answer === null) {
            noAnswer++;
            totalAnswers++
        } else if (answer === QUESTIONS[index].answers[0]) {
            correctAnswers++
            totalAnswers++;
        }
        else {
            incorrectAnswers++;
            totalAnswers++;
        }
    })



    return (
        <div id="summary">
            <img src={quizCompleteImg} alt="Trophy Image" />
            <h2>Quiz Completed</h2>
            <div id="summary-stats">
                <p>
                    <span className='number'>{Math.round((noAnswer * 100) / totalAnswers)}%</span>
                    <span className='text'>skipped</span>
                </p>
                <p>
                    <span className='number'>{Math.round((correctAnswers * 100) / totalAnswers)}%</span>
                    <span className='text'>answered Correctly</span>
                </p>
                <p>
                    <span className='number'>{Math.round((incorrectAnswers * 100) / totalAnswers)}%</span>
                    <span className='text'>Answered incorrectly</span>
                </p>

            </div>


            <ol>
                {answers.map((answer, index) => {

                    let cssClass = 'user-answer';

                    if (answer === null) {
                        cssClass += ' skipped';
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        cssClass += ' correct';
                    } else {
                        cssClass += ' wrong';
                    }

                    return (
                        <li>
                            <h3>{index + 1}</h3>
                            <p className='question'>{QUESTIONS[index].text}</p>
                            {answer ? null : <p className={cssClass}>Skipped</p>}
                            {answer === QUESTIONS[index].answers[0] && answer!==null ?
                                <p className={cssClass}>Correct: {answer} </p> :
                                <div>
                                    <p className={cssClass}>Wrong: {answer}</p>
                                    <p className='user-Answer'>Correct Answer is: {QUESTIONS[index].answers[0]}</p>
                                </div>
                            }
                        </li>)
                }


                )}
            </ol>
        </div>
    )


}