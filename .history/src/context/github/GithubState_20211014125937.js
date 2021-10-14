import React, { useReducer } from "react";
import axios from "axios";
import githubContext from './githubContext';
import githubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types'

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        userRepos: [],
        loading: false
    };

    const [state, dispatch] = useReducer(githubReducer, initialState);

    const searchUsers = async (text) => {
        setloading();

        const res = await axios.get(`http://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
    }

    const setloading = () => {
        dispatch({ type: SET_LOADING });
    }

    const clearUsers = () => {
        dispatch({
            type: CLEAR_USERS
        })
    }

    const getUser = async (username) => {
        setloading();
        const res = await axios.get(`http://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

        dispatch({
            type: GET_USER,
            payload: res.data
        });
    }

    const getUserRepos = async (username) => {
        setloading();
        const res = await axios.get(`http://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

        dispatch({
            type: GET_REPOS,
            payload: res.data
        });
    }


    return <githubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            userRepos: state.userRepos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
        }}
    >
        {props.children};
    </githubContext.Provider>
}

export default GithubState;