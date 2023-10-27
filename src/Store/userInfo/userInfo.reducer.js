import {createReducer} from "@reduxjs/toolkit";
import {userInfoActions} from "./userInfo.action";


const initialState = {
    list: [],
    user: {
        name: 'Hasmik',
    }
}

const userInfoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(userInfoActions.addInfo, (state, action) => {
            state.user.name = action.payload;
        })
        .addCase(userInfoActions.getInfo.fulfilled, (state, action) => {
            state.list = action.payload
        })
        .addCase(userInfoActions.getInfo.pending, (state) => {
            console.log('Pending ...')
        })
        .addCase(userInfoActions.getInfo.rejected, (state) => {
            throw new Error('Error.., Something went wrong');
        })
        .addDefaultCase(state => state);
})

export default userInfoReducer;