import { db } from "../firebase/firebase-config";

export const loadNotes = async(uid:any) => {
    //notas que empieza vacio
    const notes: any[] = [];
    const citiesRef = db.collection(` ${uid}/journal/notes `)
    const snapshot = await citiesRef.get();
    snapshot.forEach((e) => {
        notes.push({
            id: e.id,
            ...e.data()
        })
    });
    return notes;
}