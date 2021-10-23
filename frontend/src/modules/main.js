const POPULAR = "main/POPULAR";
const PREDICABLE = "main/PREDICABLE";
const SETTAB = "main/SETTAB";

export const popular = (popularList) => ({ type: POPULAR, popularList });
export const predictable = (predictableList) => ({
  type: PREDICABLE,
  predictableList,
});
export const setTab = (cur) => ({ type: SETTAB, cur });
const initialState = {
  popularList: "",
  predictableList: "",
  currTab: "MOVIE",
};

function catchOn(state = initialState, action) {
  switch (action.type) {
    case POPULAR:
      return {
        ...state,
        popularList: action.popularList,
      };
    case PREDICABLE:
      return {
        ...state,
        predictableList: action.predictableList,
      };
    case SETTAB:
      return {
        ...state,
        currTab: action.cur,
      };
    default:
      return state;
  }
}

export default catchOn;
