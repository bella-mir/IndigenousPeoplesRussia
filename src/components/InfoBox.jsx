import React, { useState, useEffect } from "react";
import { selectedNations } from "./quizConstants";
import "./InfoBox.css";

const InfoBox = (props) => {
  const [showScore, setShowScore] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  let [score, setScore] = useState(0);

  const handleLearnButtonClick = () => {
    props.handleLearnClick(true);
    props.handleStartQuizClick(false);
    props.handleStartModeClick(false);
    setShowScore(false);
  };

  const handleQuizButtonClick = () => {
    props.handleStartQuizClick(true);
    props.handleLearnClick(false);
    props.handleStartModeClick(false);
  };

  const handleResetButtonClick = () => {
    props.handleStartQuizClick(true);
    setShowScore(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  useEffect(() => {
    if (props.answer === selectedNations[currentQuestion]) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < selectedNations.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      props.handleStartQuizClick(false);
      setShowScore(true);
    }
  }, [props.answer]);

  return (
    <div className="infobox">
      <div className="title">
        <h4>
          Коренные малочисленные <br /> народы Севера, Сибири <br /> и Дальнего
          Востока России
        </h4>
        <br />
      </div>

      {props.isStart ? (
        <div className='button_container'>
          <button className="button button_learn" onClick={handleLearnButtonClick}>Узнать о народах</button>
          <button className="button button_play" onClick={handleQuizButtonClick}>Играть</button>
        </div>
      ) : null}

      {props.islearn ? (
        <div>
          <p className="textnation">
            {props.info ? (
              <h4> {props.info.Nation}</h4>
            ) : (
              "Информация о народе – Выберите область"
            )}
          </p>
          <div className="text">
            {props.info ? (
              <p>
                <h6>Население: </h6> {props.info.Population} человек
              </p>
            ) : null}
          </div>
          <div className="text">
            {" "}
            {props.info ? (
              <p>
                <h6>Язык: </h6> {props.info.Language}{" "}
              </p>
            ) : null}
          </div>
          <div className="text">
            {" "}
            {props.info ? (
              <p>
                <h6>Языковая группа: </h6> {props.info.LangFamily}{" "}
              </p>
            ) : null}
          </div>
          <div className="text">
            {" "}
            {props.info ? (
              <p>
                <h6>Регионы проживания: </h6> {props.info.Oblast}{" "}
              </p>
            ) : null}
          </div>
          <div className='button_container button_container_learn '>
          <button className='button button_play' onClick={handleQuizButtonClick}>Играть</button>
          </div>
        </div>
      ) : null}

      {props.isQuiz ? (
        <div className="quiz-box">
            <h4 className="title__name">Где живут ...</h4>
            <div className="question-section">
                <h1>{selectedNations[currentQuestion]}?</h1>
                <span>
                ({currentQuestion + 1}/
                {selectedNations.length})
              </span>
            </div>
        </div>
      ) : null}

      {showScore ? (
        <div className="title__container">
          <div className='button_container'>
          <h4>Вы знаете, где проживают </h4>
          <h2>{score} из {selectedNations.length} народов</h2>
            
          <button className="button button_play" onClick={handleResetButtonClick}>
            Играть еще раз!
          </button>
          <button className="button button_learn" onClick={handleLearnButtonClick}>Узнать о народах</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default InfoBox;
