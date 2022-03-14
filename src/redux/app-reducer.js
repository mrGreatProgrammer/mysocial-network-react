const SET_DARK_SIDE = "SET_DARK_SIDE";
const SET_LIGHT_SIDE = "SET_LIGHT_SIDE";
const SET_SEARCH = "SET_SEARCH";
const SET_DATA = "SET_DATA"


let defaultState = {
  darkMode: false,
  searchResult: [],
  data: []
};

const arr = [{ id: 1, na: "java"},
  { id: 2, na: "mySQl"},
  { id: 3, na: "html"},
  { id: 4, na: "javascript"},
  { id: 5, na: "css"},
  { id: 6, na: "scss"},
  { id: 7, na: "typescript"},
  { id: 8, na: "golang"},
  { id: 9, na: "react"},
  { id: 10, na: "redux"},
]

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_DARK_SIDE:
      return {
        ...state,
        darkMode: true,
      };
    case SET_LIGHT_SIDE:
      return {
        ...state,
        darkMode: false,
      };
      case SET_SEARCH:
        return {
          ...state,
          searchResult: action.searchResult
        }
        case SET_DATA: 
        return {
          ...state,
          data: action.data,
        }
    default:
      return state;
  }
}

export const setDataAC = (data) =>({type: SET_DATA, data})
export const setSearcherAC = (searchResult) => ({type: SET_SEARCH, searchResult})
export const setDarkSideAC = () => ({ type: SET_DARK_SIDE });
export const setLightSideAC = () => ({ type: SET_LIGHT_SIDE });

export const setSearcher = (searchInput) => (dispatch)=>{
  const searchResult = arr.filter(s=>s.na.toLowerCase().includes(searchInput.toLowerCase()))

  dispatch(setSearcherAC(searchResult))
}