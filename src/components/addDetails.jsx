import { useState } from 'react';
import "./common.scss";
import { toast } from "react-toastify";

const AddDetails = ({ onSave }) => {
    const [movieName, setMovieName] = useState('');
    const [directorName, setDirectorName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!movieName && !directorName) {
            toast.error('Fill in your Movie name and Director name')
        } else if (!movieName && directorName) {
            toast.error('Fill in Movie name!');
        } else if (movieName && !directorName) {
            toast.error('Fill in your Director name!');
        } else {
            onSave({ movieName, directorName });
        }

        setMovieName('');
        setDirectorName('');
    }

    return (
        <form className="add-form-body" onSubmit={onSubmit}>
            <div className="inputBody">
                <label>Movie Name:</label>
                <input type="text" placeholder="Add Movie name" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
            </div>
            <div className="inputBody">
                <label>Director Name:</label>
                <input type="text" placeholder="Add Director Name" value={directorName} onChange={(e) => setDirectorName(e.target.value)} />
            </div>

            <input type="submit" className="addBtn" value="Add" />
        </form>
    )
}

export default AddDetails;
