import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk(
    'photos/getPhotos',
    async () => {
        const res = await fetch('https://picsum.photos/v2/list?page=2&limit=20');
        const jsonData = await res.json();
        return jsonData;
    }
)

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        photos: [],
        isLoading: false
    },
    extraReducers: {
        [getPhotos.pending]: state => {
            state.isLoading = true;
        },
        [getPhotos.fulfilled]: (state, action) => {
            state.photos = action.payload;
            state.isLoading = false;
        },
        [getPhotos.rejected]: state => {
            state.isLoading = false;
        }
    }
})

export default gallerySlice.reducer;