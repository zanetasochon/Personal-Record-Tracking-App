import background from "../assets/pexels-simon-berger-1323550.jpg";
import { useState, useRef } from "react";

const Stopwatch = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [tens, setTens] = useState(0);
  const intervalIdRef = useRef(null);

  const start = () => {
    clearInterval(intervalIdRef.current); //clearinterval usuwainterwał czasowy w zmiennej intervalIdRef.current
    //ustawia interwał czasowy za pomocą funkcji setInterval, która uruchamia przekazaną do niej funkcję strzałkową co 10 milisekund.
    intervalIdRef.current = setInterval(() => {
      setTens((tens) => {
        // Funkcja ta aktualizuje wartość licznika dziesiątek, która jest przechowywana w hooku stanu, a następnie sprawdza, czy liczba dziesiątek osiągnęła wartość 100. Jeśli tak, to liczba dziesiątek zostaje zresetowana do zera, a liczba sekund jest zwiększana o 1. Jeśli liczba sekund osiągnie wartość 60, to liczba minut zostanie zwiększona o 1, a liczba sekund zostanie zresetowana do zera.
        const newTens = (tens + 1) % 100; //modulo zwraca resztę z dzielenia liczby tens + 1 przez 100.
        if (newTens === 0) {
          setSeconds((seconds) => {
            const newSeconds = (seconds + 1) % 60;
            if (newSeconds === 0) {
              setMinutes((minutes) => minutes + 1);
            }
            return newSeconds;
          });
        }
        return newTens;
      });
    }, 10);
  };

  const stop = () => {
    clearInterval(intervalIdRef.current);
  };

  const reset = () => {
    clearInterval(intervalIdRef.current);
    setMinutes(0);
    setSeconds(0);
    setTens(0);
  };
  return (
    <div className="stopwatch--page">
      <img className="background" src={background} />
      <div className="container">
        <h1>Stopwatch</h1>
        <p className="time">
          {/* .padStart(2, "0") dodaje z przodu zera, jeśli liczba jest
          jednocyfrowa, aby wyświetlać liczby dwucyfrowe w stałej szerokości.
          Pierwszy argument metody to długość wynikowego napisu, a drugi
          argument to znak wypełnienia */}
          <span id="minutes">{minutes.toString().padStart(2, "0")}</span>:
          <span id="seconds">{seconds.toString().padStart(2, "0")}</span>:
          <span id="tens">{tens.toString().padStart(2, "0")}</span>
        </p>
        <button id="start" onClick={start}>
          Start
        </button>
        <button id="stop" onClick={stop}>
          Stop
        </button>
        <button id="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
