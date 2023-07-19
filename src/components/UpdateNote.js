import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useParams, useNavigate } from 'react-router-dom';
import firebaseApp from '../firebase';
const UpdateNote = ({ setDataChange }) => {
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    const notesRef = firebaseApp.ref(`notes/${id}`);

    useEffect(() => {
        const fetchData = () => {
            notesRef.get().then((snapshot) => {
                if (snapshot.exists()) {
                    setData({ ...snapshot.val() });
                }
            }).catch(err => console.log(err));
            console.log(data);
        };
        fetchData();
    }, [id]);

    // Update Function
    const updateData = (event) => {
        event.preventDefault();
        const formData = {
            heading,
            description,
        };
        notesRef.set(formData, (err) => {
            if (err) {
                console.log(err)
            }
            else {
                navigate('/');
                setHeading('');
                setDescription('');
                setDataChange(true);
            }
        })

    };


    // Delete Function
    const deleteNote = () => {
        notesRef.remove((err) => {
            if (err) {
                console.log(err)
            } else {
                navigate('/');
                setDataChange(true);
            }
        })
    };

    return (
        <form className='form' onSubmit={updateData}>
            <h2 className='topHeading'>Update Note</h2>
            <label className='label' htmlFor="heading"><h4>Heading:</h4>
                <input
                    className='inputHeading'
                    type="text"
                    id="heading"
                    defaultValue={data.heading}
                    onChange={(event) => setHeading(event.target.value)}
                />
            </label>
            <label htmlFor="description" className='label'>Description:
                <textarea
                    className='inputDescription'
                    id="description"
                    defaultValue={data.description}
                    onChange={(event) => setDescription(event.target.value)}
                ></textarea>
            </label>
            <div className='btnsUpdate'>
                <button type='submit' className='Btn'>Update Note</button>
                <button type='button' onClick={() => deleteNote()} className='btnDelete'><AiFillDelete /></button>
            </div>
        </form>
    )
}

export default UpdateNote