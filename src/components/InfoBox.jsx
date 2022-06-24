import React, { useState } from "react";
import { selectedNations } from "./quizConstants";

const InfoBox = (props) => {
  console.log(props);

  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

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

  React.useEffect(() => {
    if (props.answer === selectedNations[currentQuestion]) {
      setScore(score + 1);
    }
    console.log(props.answer);
    console.log(selectedNations[currentQuestion]);
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
        <div>
          <button onClick={handleLearnButtonClick}>Узнать</button>
          <button onClick={handleQuizButtonClick}>Играть</button>
        </div>
      ) : null}

      {props.islearn ? (
        <div>
          <button onClick={handleQuizButtonClick}>Играть</button>
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
        </div>
      ) : null}

      {props.isQuiz ? (
        <div>
          <button onClick={handleLearnButtonClick}>Узнать</button>
          <div className="title__container">
            <h1 className="title__name">Где живут ...</h1>
            <div className="question-section">
              <span>
                {selectedNations[currentQuestion]} ({currentQuestion + 1}/
                {selectedNations.length})
              </span>
            </div>
          </div>
        </div>
      ) : null}

      {showScore ? (
        <div className="title__container">
          You scored {score} out of {selectedNations.length}
          <button className="quiz__play" onClick={handleResetButtonClick}>
            Играть еще раз!
          </button>
          <button onClick={handleLearnButtonClick}>Узнать</button>
        </div>
      ) : null}
    </div>
  );
};

export default InfoBox;
