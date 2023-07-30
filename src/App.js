import React, { useEffect, useState } from "react";
import "./App.css";

import QuestionCard from "./components/QuestionCard";
import Questions from "./helper/questions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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

  useEffect(() => {
    const timer = setTimeout(() => console.log('Initial timeout!'), 150000);
  }, []);
  return (
    <div className="screen d-flex align-items-end">
      <div className="soruAdet mx-3 p-2">
        <p>SORU</p>
        <p>
          {currentQuestionIndex + 1}/{Questions.length}
        </p>
      </div>
      <div className="container  d-flex justify-content-center ">
        <QuestionCard
          question={Questions[currentQuestionIndex]}
          onNext={handleNext}
        />
        {/* <button onClick={notify}>Notify!</button> */}
        <ToastContainer />
      </div>
      <div className="duration mx-3 p-2">
        <p>KALAN SÜRE</p>
        <p>
          {currentQuestionIndex + 1} sn
        </p>
      </div>
    </div>
  );
}

export default App;
