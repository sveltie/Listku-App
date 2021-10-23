import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import '../axios';
import {
    SET_LOADING,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    SET_USER,
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS_ERROR,
    LOGOUT_USER,
    CREATE_TASK_SUCCESS,
    CREATE_TASK_ERROR,
    DELETE_TASK_ERROR,
    FETCH_SINGLE_TASK_SUCCESS,
    FETCH_SINGLE_TASK_ERROR,
    EDIT_TASK_SUCCESS,
    EDIT_TASK_ERROR
} from './actions.context';
import reducer from './reducer.context';

const initialState = {
    user: null,
    isLoading: false,
    tasks: [],
    showAlert: false,
    editItem: null,
    singleTaskError: false,
    editComplete: false
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setLoading = () => {
        dispatch({ type: SET_LOADING });
    }

    // REGISTER
    const register = async (userInput) => {
        setLoading();

        try {
            const { data } = await axios.post(`/auth/register`, {
                ...userInput
            });

            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: data.user.username
            });

            localStorage.setItem(
                'user',
                JSON.stringify({
                    username: data.user.username,
                    token: data.token
                })
            )
        } catch (error) {
            dispatch({ type: REGISTER_USER_ERROR });
        }
    }

    // LOGIN
    const login = async (userInput) => {
        setLoading();

        try {
            const { data } = await axios.post('/auth/login', {
                ...userInput
            });

            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: data.user.username
            });

            localStorage.setItem(
                'user',
                JSON.stringify({
                    username: data.user.username,
                    token: data.token
                })
            )
        } catch (error) {
            dispatch({ type: REGISTER_USER_ERROR });
        }
    }

    // LOGOUT
    const logout = () => {
        localStorage.removeItem('user');
        dispatch({ type: LOGOUT_USER });
    }

    // FETCH ALL TASKS
    const fetchTasks = async () => {
        setLoading();

        try {
            const { data } = await axios.get('/tasks');
            dispatch({
                type: FETCH_TASKS_SUCCESS,
                payload: data.tasks
            })
        } catch (error) {
            dispatch({ type: FETCH_TASKS_ERROR });
            logout();
        }
    }

    // CREATE TASK
    const createTask = async (userInput) => {
        setLoading();

        try {
            const { data } = await axios.post('/tasks', {
                ...userInput
            });

            dispatch({
                type: CREATE_TASK_SUCCESS,
                payload: data.task
            });
        } catch (error) {
            dispatch({ type: CREATE_TASK_ERROR});
        }
    }

    // DELETE TASK
    const deleteTask = async (taskId) => {
        setLoading();

        try {
            await axios.delete(`/tasks/${taskId}`);
            fetchTasks()
        } catch (error) {
            dispatch({ type: DELETE_TASK_ERROR });
        }
    }

    // FETCH SINGLE TASK
    const fetchSingleTask = async (taskId) => {
        setLoading();

        try {
            const { data } = await axios.get(`/tasks/${taskId}`);

            dispatch({
                type: FETCH_SINGLE_TASK_SUCCESS,
                payload: data.task
            })
        } catch (error) {
            dispatch({ type: FETCH_SINGLE_TASK_ERROR });
        }
    }

    // EDIT TASK
    const editTask = async (taskId, userInput) => {
        setLoading();

        try {
            const { data } = await axios.patch(`/tasks/${taskId}`, {
                ...userInput
            });

            dispatch({
                type: EDIT_TASK_SUCCESS,
                payload: data.task
            });
        } catch (error) {
            dispatch({ type: EDIT_TASK_ERROR });
        }
    }

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            const newUser = JSON.parse(user);
            dispatch({
                type: SET_USER,
                payload: newUser.username
            });
        }
    }, [])

    return (
        <AppContext.Provider
            value = {{
                ...state,
                setLoading,
                register,
                login,
                logout,
                fetchTasks,
                createTask,
                deleteTask,
                fetchSingleTask,
                editTask
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider };