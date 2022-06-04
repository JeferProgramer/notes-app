import { types } from "../types/types";
const setError = (msg: string) => ({
    type: types.uiSetError,
    payload: msg,
});
const removeError = () => ({
    type: types.uiRemoveError
})
const startLoading = () => ({
    type: types.uiStartLoading
})
const finishLoading = () => ({
    type: types.uiFinishLoading
})
export {setError, removeError, startLoading, finishLoading};