import {configureStore} from "@reduxjs/toolkit";
import token from "../features/slice/tokenSlice.ts"
import user from "../features/slice/userSlice.ts"
import {UserProfile} from "../utils/types";

const preloadedState = JSON.parse(localStorage.getItem("state")||'{}') as {user: UserProfile, token: string};
export const store = configureStore({
    reducer: {token, user},
    preloadedState,
});

store.subscribe(() => localStorage.setItem("state",JSON.stringify(store.getState())));


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store