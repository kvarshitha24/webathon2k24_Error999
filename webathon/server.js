// //create express App
// const exp=require("express");
// //create exp obj
// const app=exp();
// //assign portnumber
// app.listen(3500,()=>console.log("web server running on port 3500"));

// //connect to react app
// // const path=require('path')
// app.use(exp.static(path.join(__dirname,'build')))

// //import mongo client
// const mclient=require("mongodb").MongoClient;

// //connect to db server
// mclient.connect('mongodb://127.0.0.1:27017')
// .then((dbRef)=>{
//     const dbObj=dbRef.db('sample1')
//     const pdf_files=dbObj.collection('pdf_files')
//     app.set('pdf_files',pdf_files)
// })
// .catch(err=>console.log("db connection error is :",err))

// app.get('/mcq', ExpressAsyncHandler(async (request, response) => {
//     const pdf_files = request.app.get("pdf_files");
//     let ObjList = await pdf_files.find().toArray();
//     response.status(201).send({ Message: "All products", payload: ObjList });
// }));











// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// const Test = () => {
//     const [mcqData, setMcqs] = useState([]);
    
//     // useEffect(() => {
//     //     fetch('http://localhost:5000/mcq')
//     //         .then(response => response.json())
//     //         .then(data => console.log((data.message)));
//     // }, []);
//     useEffect(() => {
//         //fetch the products
//         axios.get("http://localhost:3500/mcq")
//             .then(response => {
//                 if (response.status === 201) {
//                     //setProduct(response.data.payload); //array of products
//                     console.log(response.data.payload)
//                 }
//             })
//             .catch(er => {
//                 console.log(er)
//             })
//     }, [])


//     const [timeLeft, setTimeLeft] = useState(300); // Initial time left for testing purpose
//     const [timerRunning, setTimerRunning] = useState(false);
//     const [quizStarted, setQuizStarted] = useState(false); // Track if quiz has started
//     const [timeOver, setTimeOver] = useState(false); // Track if time is over
//     const [answersDisabled, setAnswersDisabled] = useState(false); // Track if answers should be disabled
//     const [selectedOptions, setSelectedOptions] = useState(new Array(mcqData.length).fill(0)); // Array to store selected options
//     const [timer, setTimer] = useState(null); // State variable to hold the timer

//     useEffect(() => {
//         let intervalId;
//         if (timerRunning && timeLeft > 0) {
//             intervalId = setInterval(() => {
//                 setTimeLeft(prevTime => prevTime - 1);
//             }, 1000);
//             setTimer(intervalId);
//         } else if (timeLeft <= 0) {
//             clearInterval(timer);
//             setTimerRunning(false);
//             setTimeOver(true);
//             console.log('Time is up!');
//             handleSubmit();
//         }
//         return () => clearInterval(intervalId);
//     }, [timerRunning, timeLeft]);

//     const handleStart = () => {
//         if (!quizStarted) {
//             setTimerRunning(true);
//             setQuizStarted(true);
//         }
//     };

//     const handleOptionChange = (questionIndex, optionIndex) => {
//         const updatedOptions = [...selectedOptions];
//         updatedOptions[questionIndex] = optionIndex + 1;
//         setSelectedOptions(updatedOptions);
//         console.log('Selected Options:', selectedOptions);
//     };

//     const handleSubmit = () => {
//         clearInterval(timer);
//         setTimerRunning(false);
//         setAnswersDisabled(true);
//         alert('Test submitted!');
//         console.log('Selected Options:', selectedOptions);
//     };

//     const formatTime = (seconds) => {
//         const minutes = Math.floor(seconds / 60);
//         const remainingSeconds = seconds % 60;
//         return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//     };

//     return (
//         <div style={{ height: "1000px" }}>
//             <h1>Quiz</h1>
//             {timerRunning && <div>Time Left: {formatTime(timeLeft)}</div>}
//             {timeOver && <div>Time is over!</div>}
//             {!quizStarted && <button onClick={handleStart}>Start Quiz</button>}
//             {quizStarted && Object.entries(mcqData).map(([key, value], index) => (
//                 <div key={index}>
//                     <h3>{key}</h3>
//                     <form>
//                         {Object.entries(value).map((option, optionIndex) => (
//                             <div key={optionIndex}>
//                                 <input
//                                     type="radio"
//                                     id={`option${optionIndex}`}
//                                     name={`question${index}`}
//                                     value={option}
//                                     onChange={() => handleOptionChange(index, optionIndex)}
//                                     disabled={answersDisabled || timeOver}
//                                 />
//                                 <label htmlFor={`option${optionIndex}`}>{option}</label>
//                             </div>
//                         ))}
//                     </form>
//                 </div>
//             ))}

//             {timerRunning && <button onClick={handleSubmit}>Submit</button>}
//         </div>
//     );
// };

// export default Test;