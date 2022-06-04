import { types } from "../types/types";
import {firebase, gogleAuthProvider} from "../firebase/firebase-config"
import { finishLoading, startLoading } from "./ui";
import Swal from "sweetalert2";

const login = ( uid: string|undefined,displayName: string | undefined | null) => ({
    type: types.login,
    payload:{uid,displayName},
});
const startLoadingWithEmailPassword = (email:string, password:string) => {
    return (dispatch:any) => {
        dispatch(startLoading());
        firebase
            .auth()
            .signInWithEmailAndPassword(email,password)
            .then(({user}) => {
              dispatch(login(user?.uid, user?.displayName))
              dispatch(finishLoading());
            })
            .catch((e) => {
                Swal.fire("Error", e.message, "error")
                dispatch(finishLoading());
            })
    }
}
