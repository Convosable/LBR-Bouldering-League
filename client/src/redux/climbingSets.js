import { createSlice } from '@reduxjs/toolkit';

export const climbingSetsSlice = createSlice({
    name: 'climbingSets',
    initialState: [],
    reducers: {
        setClimbingSets: (state, action) => {
            return action.payload;
        },
        updateClimbingSets: (state, action) => {
            return [...state, action.payload]
        },
        addClimbingSetClimb: (state, action) => {
            const newClimb = action.payload

            return state.map((set) => {
                if (set.id === newClimb.climbing_set_id) {
                    return {...set, climbs: [...set.climbs, newClimb]}
                }
                return set;
            });
        },
        removeClimbingSetClimb: (state, action) => {
            const climb = action.payload

            return state.map((set) => {
                if (set.id === climb.climbing_set_id) {
                    const updatedClimbs = set.climbs.filter((c) => c.id !== climb.id)
                    return {...set, climbs: updatedClimbs}
                }
                return set;
            });
        }
    }
});

// this is for dispatch
export const { setClimbingSets, updateClimbingSets, addClimbingSetClimb, removeClimbingSetClimb} = climbingSetsSlice.actions;

// this is for configureStore
export default climbingSetsSlice.reducer;
