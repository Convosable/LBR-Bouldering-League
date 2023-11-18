import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { addClimbingSet } from '../redux/climbingSets'
import { setNewClimbingSetError } from '../redux/error'

function NewClimbingSetForm() {

    const [setName, setSetName] = useState('');
    const [week, setWeek] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [notes, setNotes] = useState('');
    const [image, setImage] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const errors = useSelector((state) => state.error.newClimbingSetError);


    function handleImageChange(e) {
        setImage(e.target.files[0]);
    }

    function handleCreateSet(e) {
        e.preventDefault()

        const formData = new FormData();
        formData.append('climbing_set[set_name]', setName);
        formData.append('climbing_set[week]', week);
        formData.append('climbing_set[date_start]', dateStart);
        formData.append('climbing_set[date_end]', dateEnd);
        formData.append('climbing_set[notes]', notes);
        formData.append('image', image);

        fetch('/climbing_sets', {
            method: 'POST',
            body: formData
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((newSet) => {dispatch(addClimbingSet(newSet))})
                navigate('/admin-tools')
            }
            else {
                r.json().then((err) => {dispatch(setNewClimbingSetError(err.errors))});
            }
        })
    }

    return (
        <div className='admin-new-climbing-set'>
            <h1>New Climbing Set</h1>
            <form onSubmit={handleCreateSet}>
                <input type = "text" name = "set_name" placeholder='Set Name' value = {setName} onChange = {(e) => setSetName(e.target.value)} />
                <br></br>
                <label>Image: </label>
                <input type="file" accept="image/*" onChange={handleImageChange} />
                <br></br>
                <select value = {week} onChange = {(e) => setWeek(e.target.value)}>
                    <option value="" disabled>Select week</option>
                    <option value="1">Week 1</option>
                    <option value="2">Week 2</option>
                    <option value="3">Week 3</option>
                    <option value="4">Week 4</option>
                    <option value="5">Week 5</option>
                </select>
                <br></br>
                <label>Start Date: </label>
                <input type='date' name='date_start' value={dateStart} onChange={(e) => setDateStart(e.target.value)} />
                <br></br>
                <label>End Date: </label>
                <input type='date' name='date_end' value={dateEnd} onChange={(e) => setDateEnd(e.target.value)} />
                <br></br>
                <textarea name='notes' placeholder='Notes' value = {notes} onChange = {(e) => setNotes(e.target.value)} />
                <br></br>
                <input type="submit" value="Submit New Climbing Set" />
            </form>
            {errors?.map((err) => (
                <li key={err}>
                    {err}
                </li>
            ))}
        </div>
    )
}

export default NewClimbingSetForm;

