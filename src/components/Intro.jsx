import React from "react";

const Intro = ({start,setStart,setTimer,timer}) => {
    const handleStart = () => {
        setInterval(() => {
            (timer>0) ?
            setTimer(timer--) : setTimer(0)
          }, 1000);
        setStart(!start)
    }
  return (
    <div className="card " style={{ width: "36rem", height:"100vh" }}>
      <div className="card-body h-50 d-flex flex-column align-items-center justify-content-center">
        <h5 className="card-title">Hazırsanız Başlayalım!</h5>
        <p className="card-text text-justify ">
         10 Soruya 150 saniyede cevap verebilirseniz "Uzay Bilimleri Ordinaryüsu" sertifikası kazanacaksınız.
        </p>
        <a href="#" className="btn btn-warning btn-block" onClick={handleStart}>
          Başla 
        </a>
      </div>
    </div>
  );
};

export default Intro;
