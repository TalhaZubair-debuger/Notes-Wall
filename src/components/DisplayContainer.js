import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card.js';
import firebaseApp from '../firebase.js';

const DisplayContainer = ({ dataChange, setDataChange }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchData();
    setDataChange(false);
  }, [dataChange]);

  const fetchData = () => {
    const notesRef = firebaseApp.ref("notes");
    notesRef.on("value", (snapshot) => {
      const notesData = snapshot.val();
      if (notesData) {
        const notesArray = Object.keys(notesData).map((key) => ({
          id: key,
          ...notesData[key],
        }));
        setNotes(notesArray);
      } else {
        setNotes([])
      }
    })
  };

  return (

    <main>
      <div className="grid">
        {notes.length > 0 ? (
          notes.map((note) => (
            <Link
              to={`/update/${note.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card note={note} key={note.id} />
            </Link>

          ))
        ) : (
          <p>No Data</p>
        )}
      </div>
    </main>
  );

}

export default DisplayContainer;
