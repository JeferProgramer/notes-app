import { types } from "../types/types";
import {firebase, gogleAuthProvider} from "../firebase/firebase-config"
import { finishLoading, startLoading } from "./ui";
import Swal from "sweetalert2";

const login = ( uid: string,displayName: string) => ({
    type: types.login,
    payload:{uid,displayName},
});
