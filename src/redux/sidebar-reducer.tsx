import React from "react";
import {ActionsTypes} from "./store";

let initialState = [
    {id: 1, name: "Dima"},
    {id: 2, name: "Polina"},
    {id: 3, name: "Andrew"}
]

 const profileReducer = (state: any = initialState,action: ActionsTypes) => {

    return state;
}

export default profileReducer;