import { createSlice } from '@reduxjs/toolkit'


const initialValue = {
    firstname : "",
    email : "",
    number : "",
    national : "",
    pesan : ""
}

export const contactSlice = createSlice({
    name : "contacts",
    initialState:{
        contacts: initialValue
    },
    reducers:{
        tambahData : (state, action) => {
        // const newItem = {
        // id: uuidv4(),
        // // task: userInput,
        // // complete: false,
        // ...action.payload,
        // }
        state.contacts = action.payload
        // setTodos([...todos, newItem])
        },
    }
})

export const {tambahData} = contactSlice.actions;

export default contactSlice.reducer