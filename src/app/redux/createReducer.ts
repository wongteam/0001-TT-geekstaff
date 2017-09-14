/**
 * @param initialState
 * @param reducerMap
 * @returns {Function}
 */
export function createReducer(initialState: any, reducerMap: any): any {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];

    return reducer
      ? reducer(state, action)
      : state;
  };
}
