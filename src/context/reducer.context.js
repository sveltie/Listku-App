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

const reducer = (state, action) => {
    if (action.type === SET_LOADING) {
        return {
            ...state,
            isLoading: true,
            showAlert: false,
            editComplete: false
        }
    }

    if (action.type === REGISTER_USER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            user: action.payload
        }
    }

    if (action.type === REGISTER_USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            user: null,
            showAlert: true
        }
    }

    if (action.type === SET_USER) {
        return {
            ...state,
            user: action.payload
        }
    }

    if (action.type === LOGOUT_USER) {
        return {
            ...state,
            user: null,
            showAlert: false,
            tasks: [],
            isEditing: false,
            editItem: null,
        }
    }

    if (action.type === FETCH_TASKS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            editItem: null,
            singleTaskError: false,
            editComplete: false,
            tasks: action.payload
        }
    }

    if (action.type === FETCH_TASKS_ERROR) {
        return {
            ...state,
            isLoading: false
        }
    }

    if (action.type === CREATE_TASK_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            tasks: [...state.tasks, action.payload]
        }
    }

    if (action.type === CREATE_TASK_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true
        }
    }

    if (action.type === DELETE_TASK_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true
        }
    }

    if (action.type === FETCH_SINGLE_TASK_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            editItem: action.payload
        }
    }

    if (action.type === FETCH_SINGLE_TASK_ERROR) {
        return {
            ...state,
            isLoading: false,
            editItem: '',
            singleTaskError: true
        }
    }

    if (action.type === EDIT_TASK_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            editComplete: true,
            editItem: action.payload
        }
    }

    if (action.type === EDIT_TASK_ERROR) {
        return {
            ...state,
            isLoading: false,
            editComplete: true,
            showAlert: true
        }
    }

    throw new Error(`No action exist with action name: ${action}`);
}

export default reducer;