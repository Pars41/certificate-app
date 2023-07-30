import React, { useState } from "react";
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

      console.log("Son soruya ulaşıldı.");
      // Eğer burada başka bir işlem yapmak isterseniz, son soruda olan durumu yönetebilirsiniz.
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <QuestionCard
        question={Questions[currentQuestionIndex]}
        onNext={handleNext}
      />
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer />
    </div>
  );
}

export default App;
