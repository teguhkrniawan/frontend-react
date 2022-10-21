import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// state bener-bener kosong
const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

// request api login
export const loginUser = createAsyncThunk("user/loginUser", async(user, thunkAPI) => {
    try {
        const response = await axios.post('http://103.209.186.82:3002/login', {
            email: user.email,
            password: user.password
        })

        // const response = await 
        //     axios.post(
        //         'http://103.209.186.82:3002/login', 
        //         {
        //             email: user.email,
        //             password: user.password
        //         }, 
        //         {
        //             headers: {
        //                 "Access-Control-Allow-Origin": "*",
        //                 "Accept" : "*/*",
        //                 "Content-Type" : "application/json"
        //             }
        //         }
        //     )

        return response.data

    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message)
        }
    }
});

// request profile user
export const getMe = createAsyncThunk("user/me", async(_, thunkAPI) => {
    try {
        const response = await axios.get('http://103.209.186.82:3002/me');
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

// request logout
export const logout = createAsyncThunk("user/logout", async(_, thunkAPI) => {
    await axios.delete('http://103.209.186.82:3002/logout');
});

// redux auth
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        // apabila itu adalah login user
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload
        });

        // apabila itu adalah get user
        builder.addCase(getMe.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMe.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        });
        builder.addCase(getMe.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload
        });
    }
})


export const {reset} = authSlice.actions
export default authSlice.reducer;
