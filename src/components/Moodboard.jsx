import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Moodboard = () => {
  const [journal, setJournal] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [displayJournal, setDisplayJournal] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setDisplayJournal("");
    const id = uuidv4();
    setJournal((prevJournal) => [
      ...prevJournal,
      { id: id, entry: displayJournal },
    ]);
    setShowForm(false);
  }

  function handleChange(event) {
    setDisplayJournal(event.target.value);
  }

  const removeEntryFromList = (id) => {
    const updatedList = journal.filter((entry) => entry.id !== id);
    setJournal(updatedList);
  };

  return (
    <div className="moodboard--main__container">
      <div className="selection--container">
        <h1 className="moodboard--header">Moodboard</h1>
        <div className="moodboard--question">How was your training? </div>
        <div className="moodboard--icons">
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            icon={faSquarePlus}
            onClick={() => setShowForm(true)}
          />
        </div>
      </div>
      <div className="moodboard--container">
        <div className="header--of__journal">Journal</div>
        {journal.map((entry, index) => (
          <div key={index} className="journal--entry">
            <div className="moodboard--icons">
              <FontAwesomeIcon
                style={{ cursor: "pointer" }}
                icon={faTrashCan}
                onClick={() => removeEntryFromList(entry.id)}
                id={entry.id}
              />
            </div>
            <div>{entry.entry}</div>
          </div>
        ))}
        {showForm && (
          <form
            className="moodboard--form"
            id="journal-form"
            onSubmit={handleSubmit}
          >
            <label htmlFor="journal">journal entry :</label>
            <textarea
              style={{ width: "100%", height: "70px" }}
              type="text"
              value={displayJournal}
              onChange={handleChange}
              required
            />
            <button
              className="add--entry__button"
              form="journal-form"
              type="submit"
            >
              Add journal entry
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Moodboard;
