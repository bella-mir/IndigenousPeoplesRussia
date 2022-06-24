import React, {useState} from "react";
import PeoplesMap from "./PeoplesMap";
import "./Peoples.css";

const Peoples = () => {

  const [quizMode, setQuizMode] = useState(false);
  const [learnMode, setLearnMode] = useState(false);
  const [startMode, setStartMode] = useState(true);

  const handleStartQuizClick = (option) => {
    setQuizMode(option);
  };

  const handleLearnClick = (option) => {
    setLearnMode(option);
  };

  const handleStartModeClick = (option) => {
    setStartMode(option);
  };

  return (
    <div>
      <div className="container">
        <div className="mainmap">
          <PeoplesMap
            quizMode={quizMode}
            learnMode={learnMode}
            startMode={startMode}
            handleStartQuizClick={handleStartQuizClick}
            handleLearnClick={handleLearnClick}
            handleStartModeClick={handleStartModeClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Peoples;
