/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questionsData } from "../Data";
import "./Question.css";
import { useBearStore } from "../store/app";
function Question({ condition }) {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  // const [answers, setAnswers] = useState([]);
  const [answers_select, setAnswers_select] = useState([]);
  const [bgRed, setBgRed] = useState(false);
  const { increasePopulation } = useBearStore();
  const navigate = useNavigate();
  const handleAnswer = (answer) => {
    setAnswers_select([...answers_select, answer]);
    setBgRed(true);
    // setAnswers([...answers, answer]);
  };
  const nextPage = () => {
    increasePopulation({
      [`answer${currentQuestion}`]: [...new Set(answers_select)],
    });
    setCurrentQuestion(currentQuestion + 1);
    setAnswers_select([]);
    if (currentQuestion > questionsData[condition].length - 1) {
      navigate("/result1");
    }
  };
  const question = questionsData[condition][currentQuestion - 1];
  return (
    <div>
      <div className="question_2">
        <h3>{questionsData[condition][currentQuestion - 1]?.text_1}</h3>
        <h2>{questionsData[condition][currentQuestion - 1]?.text}</h2>
        <div
          className={`option-container ${
            question?.options.length === 4 ? "two-columns" : "three-columns"
          } `}
        >
          {questionsData[condition][currentQuestion - 1]?.options.map(
            (option, index) => (
              <button
                className={`${bgRed ? "bg-red-500" : "bg-white"}`}
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "10px 0",
                  padding: "10px 20px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  backgroundColor: "white",
                  cursor: "pointer",
                  fontSize: "16px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "background-color 0.3s",
                }}
                onClick={() => handleAnswer(option?.text)} // Thêm logic sự kiện click
              >
                <img
                  src={option?.img}
                  alt={option?.text}
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "10px",
                    borderRadius: "5px",
                  }}
                />
                {option?.text}
              </button>
            )
          )}
        </div>
        <button onClick={nextPage}>NEXT</button>
      </div>
    </div>
  );
}

export default Question;
