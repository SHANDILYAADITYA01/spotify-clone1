import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    // Remove after finish developing....
    // token: "BQBgTS3UF13YqCZ_xQpD5Hqw_U5P7Z_qCkaxF9sXFqerJAJWZ2lPoikfZtrE01qp7mZo8PrYJ67SaDKGQRL7eNehWhj0rRy8U3qFXh_nAV4rJ_E4MFOqcAlxkCK01ytJmCBqyD93NqMQqGRyYvzbjAWnErygla2Q4UjsXTqNyXQLgb2--aQiO86BRj21xFlncsgvV98LoH0M5lJyII-",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            }
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        default:
            return state;
    }
};

export default reducer;
