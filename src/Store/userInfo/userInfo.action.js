import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {userInfoActionTypes} from "./userInfo.actionTypes";


const addInfo = createAction(userInfoActionTypes.ADDINFO);

const getInfo = createAsyncThunk(
    userInfoActionTypes.GETINFO,
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
        const jsonResponse = await response.json();
        return jsonResponse;
    }
);



export const userInfoActions = {
    addInfo,
    getInfo,
}

