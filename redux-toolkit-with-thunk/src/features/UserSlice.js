import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
    try {
        const response = await fetch("https://randomuser.me/api/");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.results[0];
    } catch (error) {
        throw new Error("Fetch failed");
    }
});

export const UserSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        // fetchUser: (state, action) => {
        //     state.user = action.payload;
        //     state.status = "succeeded";
        },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

// export const { fetchUser: fetchUserReducer } = UserSlice.actions;
export default UserSlice.reducer;
