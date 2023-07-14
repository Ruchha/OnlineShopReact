import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit"
interface AuthState{
    isAuth: boolean
}

const initialState: AuthState = {
    isAuth: false
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        authenticate(state, action: PayloadAction<boolean>){
            state.isAuth = action.payload;
        }
    }
})

export default authSlice.reducer;
export const {authenticate} = authSlice.actions