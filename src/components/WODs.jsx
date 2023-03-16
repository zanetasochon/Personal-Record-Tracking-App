import supabase from "../services/supabase";
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const WODs = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const { data: exercises, error } = await supabase
        .from("wods")
        .select("*");

      if (error) console.log("Error fetching exercises:", error);
      else setExercises(exercises);
    };

    fetchExercises();
  }, []);

  return (
    <div className="wods--main__container">
      <div className="selection--container">
        <h1 className="WODs--header">WORK OF THE DAY</h1>
        <Popup
          trigger={
            <button className="choose--wods__button">Choose your WOD </button>
          }
          position="right center"
        >
          {(close) => (
            <div>
              <ul>
                {exercises.map((exercise) => (
                  <li key={exercise.id}>
                    <a
                      href="#"
                      onClick={() => {
                        setSelectedExercise(exercise);
                        close();
                      }}
                    >
                      {exercise.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a className="close" onClick={close}>
                &times;
              </a>
            </div>
          )}
        </Popup>
      </div>
      <div className="wod--container">
        <div className="number--of__wod">
          {selectedExercise && selectedExercise.number_of_wod}
        </div>
        <h1 className="wods--container__header">
          {selectedExercise
            ? selectedExercise.name
            : "Here you can see your today WORK OF THE DAY"}
        </h1>
        <div className="wod--card__container">
          {selectedExercise && (
            <>
              <p className="work--of--the__day">{selectedExercise.wod}</p>
              <p className="wod--description">{selectedExercise.description}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WODs;
