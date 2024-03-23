import React, { useState, useEffect } from 'react';
import './Test.css';
import { useNavigate } from 'react-router-dom';
import { HiSpeakerWave } from "react-icons/hi2";

const Sidebar = ({ mcqData, currentQuestionIndex, setCurrentQuestionIndex, selectedOptions }) => {
    return (
        <div style={{ width: '180px', position: 'fixed', right: '20px', top: '70px', marginTop: '110px', }}>
            {mcqData.map((question, index) => (
                <button
                    key={index}
                    style={{
                        padding: '5px 10px',
                        marginTop: '45px',
                        marginLeft: '10px',
                        border: 'none',
                        borderRadius: '5px',
                        backgroundColor: selectedOptions[index] !== 0 ? 'green' : 'red', // Change color based on whether question is answered
                        color: 'white',
                        cursor: 'pointer',
                    }}
                    onClick={() => setCurrentQuestionIndex(index)}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};
const Test = () => {
    const navigate = useNavigate();
    const [mcqData, setMcqData] = useState([
        {
            "question": "What is the capital of France?",
            "options": ["Paris", "London", "Berlin", "Rome"]
        },
        {
            "question": "Who wrote 'To Kill a Mockingbird'?",
            "options": ["Harper Lee", "J.K. Rowling", "Stephen King", "Ernest Hemingway"]
        },
        {
            "question": "What is the tallest mountain in the world?",
            "options": ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"]
        },
        {
            "question": "Which planet is known as the Red Planet?",
            "options": ["Mars", "Venus", "Mercury", "Saturn"]
        },
        {
            "question": "Who painted the Mona Lisa?",
            "options": ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"]
        },
        {
            "question": "What is the chemical symbol for water?",
            "options": ["H2O", "CO2", "NaCl", "O2"]
        },
        {
            "question": "Which country is famous for the Taj Mahal?",
            "options": ["India", "China", "Egypt", "Brazil"]
        },
        {
            "question": "Who was the first person to step on the moon?",
            "options": ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"]
        },
        {
            "question": "What is the largest ocean on Earth?",
            "options": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]
        },
        {
            "question": "What is the national animal of Australia?",
            "options": ["Kangaroo", "Koala", "Platypus", "Emu"]
        }
    ]);
    const speakQuestion = (question) => {
        const utterance = new SpeechSynthesisUtterance(question);
        window.speechSynthesis.speak(utterance);
    };
    const [timeLeft, setTimeLeft] = useState((mcqData.length) * 15); // Initial time left for testing purpose
    const [timerRunning, setTimerRunning] = useState(false);
    const [quizStarted, setQuizStarted] = useState(false); // Track if quiz has started
    const [timeOver, setTimeOver] = useState(false); // Track if time is over
    const [answersDisabled, setAnswersDisabled] = useState(false); // Track if answers should be disabled
    const [selectedOptions, setSelectedOptions] = useState(new Array(mcqData.length).fill(0)); // Array to store selected options
    const [timer, setTimer] = useState(null); // State variable to hold the timer
    const [agreeChecked, setAgreeChecked] = useState(false); // State variable to track if the user has agreed to the instructions
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showSidebar, setShowSidebar] = useState(false); // State variable to track if sidebar should be displayed

    useEffect(() => {
        let intervalId;
        if (timerRunning && timeLeft > 0) {
            intervalId = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
            setTimer(intervalId);
        } else if (timeLeft <= 0) {
            clearInterval(timer);
            setTimerRunning(false);
            setTimeOver(true);
            console.log('Time is up!');
            handleSubmit();
        }
        return () => clearInterval(intervalId);
    }, [timerRunning, timeLeft]);

    const handleStart = () => {
        if (!quizStarted) {
            setTimerRunning(true);
            setQuizStarted(true);
            setShowSidebar(true);
            //document.documentElement.style.overflow = 'hidden';
        }
    };

    const handleOptionChange = (questionIndex, optionIndex) => {
        const updatedOptions = [...selectedOptions];
        updatedOptions[questionIndex] = optionIndex + 1;
        setSelectedOptions(updatedOptions);
        console.log('Selected Options:', selectedOptions);
    };

    const handleSubmit = () => {
        clearInterval(timer);
        setTimerRunning(false);
        setAnswersDisabled(true);
        alert('Test submitted!');
        console.log('Selected Options:', selectedOptions);
        navigate('/Analysis', { state: { selectedOptions, mcqData } });
    };

    const handleAgreeCheckbox = (e) => {
        setAgreeChecked(e.target.checked);
    };

    const handleLanguageChange = (e) => {
        console.log('Selected language:', e.target.value);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    };

    return (
        <div style={{ marginBottom: "300px" }}>
            <div style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'white' }}>
                <ul className="nav">
                    <li className="nav-item" style={{ marginLeft: 'auto' }}>
                        <div style={{ fontSize: "30px" }}>
                            {timerRunning && <div>Time Left: {formatTime(timeLeft)}</div>}
                        </div>
                    </li>
                </ul>
            </div>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>MOCK TEST</h1>
                <div style={{ position: 'absolute', top: 70, right: 10, fontSize: "30px" }}>
                    {timeOver && <div>Time is over!</div>}
                </div>
                {quizStarted && mcqData.map((question, index) => {
                    if (index === currentQuestionIndex) {
                        return (
                            <div key={index} style={{ position: 'relative', border: '1px solid #ccc', padding: '10px', marginBottom: '20px', textAlign: 'left', marginRight: "220px", marginLeft: "30px" }}>
                                <h3>{question.question}</h3>
                                <form>
                                    {question.options.map((option, optionIndex) => (
                                        <div key={optionIndex} style={{ marginBottom: '10px' }}>
                                            <input
                                                type="radio"
                                                id={`option${optionIndex}`}
                                                name={`question${index}`}
                                                value={option}
                                                onChange={() => handleOptionChange(index, optionIndex)}
                                                disabled={answersDisabled || timeOver}
                                            />
                                            <label htmlFor={`option${optionIndex}`} style={{ marginLeft: '5px' }}>{option}</label>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => speakQuestion(question.question)}
                                        style={{
                                            position: 'absolute',
                                            top: 20,
                                            right: 20,
                                            border: '1px solid #ccc', // Light border
                                            borderRadius: '8px', // Rounded corners
                                            padding: '10px 20px', // Increased padding for size
                                            background: 'transparent', // Transparent background
                                            cursor: 'pointer', // Cursor style
                                        }}
                                    >
                                        <HiSpeakerWave /> {/* Assuming this component renders an icon */}
                                    </button>
                                </form>
                                {/* {currentQuestionIndex !== mcqData.length - 1 && (
                    <button onClick={handleNextQuestion}>Next</button>
                )} */}
                            </div>
                        );
                    }
                    return null;
                })}

                {timerRunning && currentQuestionIndex !== mcqData.length - 1 && <button onClick={handleNextQuestion}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: 'Blue',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        transition: 'background-color 0.3s ease',
                        textDecoration: 'none',
                        marginRight: '20px'
                    }}
                >
                    Next
                </button>}
                {timerRunning && <button onClick={handleSubmit}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        transition: 'background-color 0.3s ease',
                        textDecoration: 'none'
                    }}
                >
                    Submit
                </button>}


                {showSidebar && (
                    <Sidebar
                        mcqData={mcqData}
                        currentQuestionIndex={currentQuestionIndex}
                        setCurrentQuestionIndex={setCurrentQuestionIndex}
                        selectedOptions={selectedOptions}
                    />
                )}
                {!quizStarted && (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                        <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', textAlign: 'left' }}>
                            <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Instructions:</h3>
                            <ul style={{ padding: 0 }}>
                                <li style={{ marginBottom: '10px' }}>Read each question carefully before selecting an answer.</li>
                                <li style={{ marginBottom: '10px' }}>You cannot change your answer once selected, so choose wisely.</li>
                                <li style={{ marginBottom: '10px' }}>If you're unsure about an answer, you can skip the question and come back to it later.</li>
                                <li style={{ marginBottom: '10px' }}>Ensure you have a stable internet connection to prevent disruptions.</li>
                                <li style={{ marginBottom: '10px' }}>Avoid distractions and find a quiet place to focus.</li>
                                <li style={{ marginBottom: '10px' }}>Keep track of the time remaining and pace yourself accordingly.</li>
                                <li style={{ marginBottom: '10px' }}>Review your answers before submitting the quiz.</li>
                                <li style={{ marginBottom: '10px' }}>Double-check that you've answered all questions.</li>
                                <li style={{ marginBottom: '10px' }}>Be confident in your responses, but don't second-guess yourself too much.</li>
                                <li style={{ marginBottom: '10px' }}>Stay calm and focused throughout the quiz.</li>
                            </ul>
                        </div>
                    </div>
                )}
                {!quizStarted && (
                    <div style={{ marginTop: '20px', textAlign: 'center' }}>
                        <label htmlFor="language" style={{ marginRight: '30px', marginBottom: "30px" }}>Select your default language: </label>
                        <select id="language" onChange={handleLanguageChange}>
                            <option value="english">English</option>
                            <option value="spanish">Spanish</option>
                            <option value="french">French</option>
                        </select>
                        <br />
                        <input
                            type="checkbox"
                            id="agreeCheckbox"
                            checked={agreeChecked}
                            onChange={handleAgreeCheckbox}
                        />
                        <label htmlFor="agreeCheckbox" style={{ marginLeft: '15px', marginBottom: "30px" }}>I have read the instructions and understand that using unfair means of any sort or any advantage will lead to disqualifications.</label>
                        <br />
                        <button
                            onClick={handleStart}
                            disabled={!agreeChecked}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: agreeChecked ? '#4CAF50' : '#FF0000', // Green if checked, red if not checked
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                transition: 'background-color 0.3s ease',
                                textDecoration: 'none'
                            }}
                        >
                            Start Mock Test
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Test;