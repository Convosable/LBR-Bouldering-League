import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { updateClimbingSets } from '../redux/climbingSets'
import { setUpdateClimbingSetError } from '../redux/error'

function EditClimbingSetForm() {

    const set = useParams()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const climbingSets = useSelector((state) => state.climbingSets);
    const errors = useSelector((state) => state.error.updateClimbingSetError);
    const climbingSet = climbingSets.find((s) => s.set_name === set.setName);

    const [setName, setSetName] = useState(climbingSet.set_name);
    const [week, setWeek] = useState(climbingSet.week);
    const [dateStart, setDateStart] = useState(climbingSet.date_start);
    const [dateEnd, setDateEnd] = useState(climbingSet.date_end);
    const [notes, setNotes] = useState(climbingSet.notes || '');
    const [image, setImage] = useState(null);


    function handleImageChange(e) {
        setImage(e.target.files[0]);
    }

    function handleEditSet(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('climbing_set[set_name]', setName);
        formData.append('climbing_set[week]', week);
        formData.append('climbing_set[date_start]', dateStart);
        formData.append('climbing_set[date_end]', dateEnd);
        formData.append('climbing_set[notes]', notes);
        formData.append('image', image);

        fetch(`/climbing_sets/${climbingSet.id}`, {
            method: 'PATCH',
            body: formData
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((updatedSet) => {dispatch(updateClimbingSets(updatedSet))})
                navigate('/admin-tools')
            }
            else {
                r.json().then((err) => {dispatch(setUpdateClimbingSetError(err.errors))});
            }
        })
    }

    return (
        <div className='admin-new-climbing-set'>
            <h1>Edit Climbing Set</h1>
            <form onSubmit={handleEditSet}>
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
                <input type="submit" value="Update Climbing Set" />
            </form>
            {errors?.map((err) => (
                <li key={err}>
                    {err}
                </li>
            ))}
        </div>
    )
}

export default EditClimbingSetForm;