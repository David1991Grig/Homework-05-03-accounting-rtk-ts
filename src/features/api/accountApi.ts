import {createAsyncThunk} from "@reduxjs/toolkit";
import {base_url, createToken} from "../../utils/constants.ts";
import {UserDate, UserProfile, UserRegister} from "../../utils/types";
import { RootState } from '../../app/store.ts'

export const registerUser = createAsyncThunk(
    'user/register',
    async (user: UserRegister)=>{
        const response = await fetch(`${base_url}/user`,{
            method: "Post",
            body: JSON.stringify(user),
            headers :{
                "Content-Type": 'application/json'
            }
        })
        if(response.status === 409){
            throw new Error(`user ${user.login} already exists`)
        }if(!response.ok){
            throw new Error("Something went wrong");
        }
        const data = await response.json()
        const token = createToken(user.login, user.password)
        return {user:data, token}
    }
)
export const fetchUser = createAsyncThunk(
    'user/fetch',
    async(token:string)=>{
        const response = await fetch(`${base_url}/login`, {
            method:'Post',
            headers: {
                Authorization: token
            }
        })
        if(response.status === 401){
            console.log('error', token)
            throw new Error(`login or password incorrect`)
        }if(!response.ok){
            throw new Error("Something went wrong");
        }
        const data = await response.json()
        return {user:data, token}
    }
)

export const updateUser = createAsyncThunk<UserProfile, UserDate, {state:RootState}>(
    'user/update',
    async (user:UserDate, {getState})=>{
        const response = await fetch(`${base_url}/user`, {
            method:"put",
            body:JSON.stringify(user),
            headers:{
                'Content-type': 'application/json',
                Authorization:getState().token
            }
        })
        if(response.status === 409){
            throw new Error(`login or password incorrect`)
        }if(!response.ok){
            throw new Error("Something went wrong");
        }
        return await response.json()
    }
)
export const changePassword = createAsyncThunk<string,string, {state: RootState} >(
    "user/password",
    async (password:string, { getState }) => {
        const response = await fetch(`${base_url}/user/password`, {
            method:'put',
            headers :{
                Authorization: getState().token,
                'X-Password': password
            }
        })
        if(response.status === 401){
            console.log('error')
            throw new Error(`login or password incorrect`)
        }if(!response.ok){
            throw new Error("Something went wrong");
        }
        return createToken(getState().user.login,password)
    }

)