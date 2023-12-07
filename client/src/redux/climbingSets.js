import { createSlice } from '@reduxjs/toolkit';

export const climbingSetsSlice = createSlice({
    name: 'climbingSets',
    initialState: [],
    reducers: {
        setClimbingSets: (state, action) => {
            return action.payload;
        },
        addClimbingSet: (state, action) => {
            return [...state, action.payload]
        },
        updateClimbingSets: (state, action) => {
            const updatedClimbingSet = action.payload;

            return state.map((set => {
                if (set.id === updatedClimbingSet.id) {
                    return {
                        ...set,
                        set_name: updatedClimbingSet.set_name,
                        week: updatedClimbingSet.week,
                        date_start: updatedClimbingSet.date_start,
                        date_end: updatedClimbingSet.date_end,
                        formatted_start_date: updatedClimbingSet.formatted_start_date,
                        formatted_end_date: updatedClimbingSet.formatted_end_date,
                        notes: updatedClimbingSet.notes,
                        image_url: updatedClimbingSet.image_url
                    }
                }
                return set;
            }));
        },
        removeClimbingSet: (state, action) => {
            const climbingSet = action.payload;

            return state.filter((set) => set.id !== climbingSet.id);
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
export const { setClimbingSets, addClimbingSet, updateClimbingSets, addClimbingSetClimb, removeClimbingSetClimb, removeClimbingSet} = climbingSetsSlice.actions;

// this is for configureStore
export default climbingSetsSlice.reducer;
