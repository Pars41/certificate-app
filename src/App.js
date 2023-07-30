import React, { useState } from "react";
import "./App.css";

import Question from "./components/Question";
import spaceScienceQuestions from "./helper/questions";

function App() {
  // const [qList, setQList] = useState(spaceScienceQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = (selectedAnswer) => {
    // Burada kullanıcının seçtiği cevabı işleyebilirsiniz (örn. puanlama)
    console.log("Seçilen Cevap:", selectedAnswer);

    // Bir sonraki soruya geç
    if (currentQuestionIndex + 1 < spaceScienceQuestions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      console.log("Son soruya ulaşıldı.");
      // Eğer burada başka bir işlem yapmak isterseniz, son soruda olan durumu yönetebilirsiniz.
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <Question question={spaceScienceQuestions[currentQuestionIndex]} onNext={handleNext} />
      
    </div>
  );
}

export default App;
