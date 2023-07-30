import React, { useEffect, useRef, useState } from "react";
import "./App.css";

import QuestionCard from "./components/QuestionCard";
import Questions from "./helper/questions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Intro from "./components/Intro";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(15)
  const [start, setStart] = useState(false)

  const handleNext = (selectedAnswer) => {
    // Burada kullanıcının seçtiği cevabı işleyebilirsiniz (örn. puanlama)
    console.log("Seçilen Cevap:", selectedAnswer);
    const notify = (string) => toast(string);

    // Bir sonraki soruya geç
    if (
      currentQuestionIndex + 1 < Questions.length &&
      selectedAnswer !== null
    ) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else if (selectedAnswer === null) {
      notify("Lütfen herhangi bir şıkkı seçiniz!");
    } else {
      notify("Son soruya ulaşıldı.");

      // Eğer burada başka bir işlem yapmak isterseniz, son soruda olan durumu yönetebilirsiniz.
    }
  };

  // duration 
  // useEffect(() => {
  //   const interval = 
  //   return () => clearInterval(interval);
  // }, [])
  

  
  return (
    <div className="screen d-flex align-items-end" >
      <div className="soruAdet mx-3 p-2">
        <p>SORU</p>
        <p>
          {currentQuestionIndex + 1}/{Questions.length}
        </p>
      </div>
      <div className="container  d-flex justify-content-center ">
        {start ? (<QuestionCard
          question={Questions[currentQuestionIndex]}
          onNext={handleNext}
        />) :(<Intro start={start} setStart={setStart} timer={timer} setTimer={setTimer}/>)  }
        
        
        <ToastContainer />
      </div>
      <div className="duration mx-3 p-2">
        <p>KALAN SÜRE</p>
        <p>
          {timer} sn
        </p>
      </div>
    </div>
  );
}

export default App;
