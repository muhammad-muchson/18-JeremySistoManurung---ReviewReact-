import { createSlice } from '@reduxjs/toolkit'
import {v4 as uuidv4} from 'uuid'


const initialValue = {
    id:1,
    firstname : "Makan",
    email : "jeremy@gmail.com",
    number : "19011",
    national : "Indonesia",
    pesan : "Makan bang"
}

export const contactSlice = createSlice({
    name : "contacts",
    initialState:{
        contact1: initialValue
    },
    reducers:{
        
        tambahData : (state, action) => {
        const newItem = {
        id: uuidv4(),
        // task: userInput,
        // complete: false,
        ...action.payload,
        }
        state.contact1 = [...state.contact1, newItem]
        // setTodos([...todos, newItem])
        },
    }
})

export const {tambahData} = contactSlice.actions;

export default contactSlice.reducer