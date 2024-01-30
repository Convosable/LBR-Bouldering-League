import React, {useState} from 'react'

import { useDispatch } from 'react-redux'
import { addClimbingSetClimb } from '../redux/climbingSets'

const NewClimbForm = ({ set }) => {

    const [grade, setGrade] = useState('')
    const [color, setColor] = useState('')
    // const [name, setName] = useState('')

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault()
        const climbInfo = {
            grade: grade,
            color: color,
            // name: name
        }
        fetch(`/climbing_sets/${set.id}/climbs`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(climbInfo)
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((newClimb) => {dispatch(addClimbingSetClimb(newClimb))})
                setGrade('')
                setColor('')
                // setName('')
            }
        })
    }

    return (
        <div className='admin-new-climb-form'>
            <form onSubmit={handleSubmit}>
                <select name="color" value={color} onChange={(e) => setColor(e.target.value)}>
                    <option value="" disabled>Color</option>
                    <option value="Red">Red</option>
                    <option value="Orange">Orange</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                    <option value="Puple">Puple</option>
                    <option value="Pink">Pink</option>
                    <option value="White">White</option>
                    <option value="Black">Black</option>
                    <option value="Wood">Wood</option>
                    <option value="Grasshopper">Grasshopper</option>
                </select>
                {/* { color = 'Grasshopper' 
                    ?
                 <input placeholder='Name' name='name' value={name} onChange={(e) => setName(e.target.value)} /> 
                    :
                null } */}
                <select name="grade" value={grade} onChange={(e) => setGrade(e.target.value)}>
                    <option value="" disabled>Grade</option>
                        {Array.from({ length: 11 }, (i, index) => (
                            <option key={index} value={index}>
                                V{index}
                            </option>
                    ))}
                </select>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default NewClimbForm;
