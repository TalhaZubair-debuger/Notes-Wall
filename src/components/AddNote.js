import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebaseApp from '../firebase';


const AddNote = ({ setDataChange }) => {
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            heading,
            description,
        };
        const notesRef = firebaseApp.ref('notes');
        notesRef.push(formData, (err) => {
            if (err) console.log(err);
        });
        navigate('/');
        setHeading('');
        setDescription('');
        setDataChange(true);

    };
    return (
        <form className='form' onSubmit={handleSubmit}>
            <h2 className='topHeading'>Add Note</h2>
            <label className='label' htmlFor="heading"><h4>Heading:</h4>
                <input
                    className='inputHeading'
                    type="text"
                    id="heading"
                    value={heading}
                    onChange={(event) => setHeading(event.target.value)}
                />
            </label>
            <label htmlFor="description" className='label'>Description:
                <textarea
                    className='inputDescription'
                    id="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                ></textarea>
            </label>
            <button className='Btn' type="submit">Submit</button>
        </form>
    )
}

export default AddNote