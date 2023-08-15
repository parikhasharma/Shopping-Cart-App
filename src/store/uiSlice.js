import {createSlice} from '@reduxjs/toolkit'

const uiSlice=createSlice({
    name: 'ui',
    initialState:{  notification : {
        type:null,
        message:null,
        open:null
    }},
    reducers:{
        showNotification(state,action){
            state.notification={
                type: action.payload.type,
                message: action.payload.message,
                open: action.payload.open
            }
        }
    }
})

export const uiActions=uiSlice.actions;
export default uiSlice;