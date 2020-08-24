export const initialState = {
    searchValue: "Jan Kowalski"
}
export const actionsTypes = {
    SEARCH_ACTION: "SEARCH_ACTION"
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionsTypes.SEARCH_ACTION:
            return {
                ...state,
                searchValue: action.searchValue
            }
        default:
            return state;
    }
}

export default reducer;
