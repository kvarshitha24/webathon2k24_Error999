import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

function Analysis() {
    const [isTextShown, setIsTextShown] = useState(false);
    const location = useLocation();
    const { selectedOptions, mcqData } = location.state || {};
    console.log(mcqData)
    const correctAnswers = [1, 2, 3, 4, 1, 1, 1, 1, 1, 1]; // Assuming correct answers are in the same order as questions
    const skippedQuestions = selectedOptions.filter(option => option === 0).length;
    const correct = selectedOptions.filter((option, index) => option === correctAnswers[index]).length;
    const wrong = selectedOptions.filter((option, index) => option !== 0 && option !== correctAnswers[index]).length;
    const totalScore = correct * 1; // Assuming each correct answer gives 1 point
    let navigate = useNavigate()
    const data = [
        { name: 'Corrected', value: correct, fillColor: '#82ca9d' },
        { name: 'Unanswered', value: skippedQuestions, fillColor: '#8884d8' },
        { name: 'Incorrect', value: wrong, fillColor: '#ff5c5c' }
    ];
    const toggleTextVisibility = () => {
        setIsTextShown(!isTextShown);
    };

    const hand = () => {
        navigate('/Test')
    };
    const styles = {
        buttonContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '50px', // Adjust this value as needed
        },
        button: {

            marginRight: '10px', // Adjust this value as needed
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',

        },
        text: {
            marginTop: '10px',
            fontSize: '18px',
            color: '#343a40', // Bootstrap dark grey
        },
        container: {
            // Centering the content
            padding: '20px',
            height: '800px'
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Analysis</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '400px', margin: '0 10px' }}>
                    <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
                        <p>Number of Skipped Questions: {skippedQuestions}</p>
                        <p>Number of Correct Answers: {correct}</p>
                        <p>Number of Wrong Answers: {wrong}</p>
                        <p>Total Score: {totalScore}</p>
                        <div style={styles.buttonContainer}>
                            <button style={styles.button} onClick={toggleTextVisibility}>Brief Analysis</button>
                            <button style={styles.button} onClick={hand}>Re-Attempt</button>
                        </div>
                    </div>
                </div>
                <div style={{ width: '500px', margin: '0 10px' }}>
                    <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', marginBottom: '20px', paddingRight: '30px' }}>
                        <PieChart width={500} height={400}>
                            <Pie
                                data={data}
                                cx={250}
                                cy={200}
                                labelLine={false}
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                                nameKey="name"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fillColor} />)}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>
                </div>
            </div>
            {/* Button to toggle text visibility */}
            {/* <div style={styles.buttonContainer}>
                <button style={styles.button} onClick={toggleTextVisibility}>Brief Analysis</button>
                <button style={styles.button} onClick={hand}>Re-Attempt</button>
            </div> */}

            {/* Conditionally rendered text */}
            {isTextShown && <div style={styles.text}><div>
                {mcqData.map((question, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div style={{ flex: 1 }}>
                            <h3>{question.question}</h3>
                            <p>Options:</p>
                            <ul style={{ listStyleType: 'none' }}>
                                {question.options.map((option, optionIndex) => (
                                    <li key={optionIndex}>
                                        <input
                                            type="radio"
                                            id={`option${optionIndex}`}
                                            name={`question${index}`}
                                            value={option}
                                            checked={selectedOptions[index] === (optionIndex + 1)}
                                            disabled
                                            style={{
                                                backgroundColor: selectedOptions[index] === (optionIndex + 1) ? (selectedOptions[index] === correctAnswers[index] ? 'green' : 'red') : ''
                                            }}
                                        />
                                        <label htmlFor={`option${optionIndex}`}>{option}</label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ flex: 1 }}>
                            <p>Correct Answer: {correctAnswers[index]}</p>
                            {selectedOptions[index] === correctAnswers[index] && <p>Result: Correct (Score: 1)</p>}
                            {selectedOptions[index] === 0 && <p>Result: Unanswered (Score: 0)</p>}
                            {selectedOptions[index] !== correctAnswers[index] && selectedOptions[index] !== 0 && <p>Result: Wrong (Score: 0)</p>}
                        </div>
                    </div>
                ))}
            </div></div>}
        </div>
    );
}

export default Analysis;
