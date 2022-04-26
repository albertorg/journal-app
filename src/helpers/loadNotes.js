import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebase-config"

export const loadNotes = async (uid) => {
    const notesSnapshot = await getDocs(collection(db, `${uid}/journal/notes`))
    const notes = []

    notesSnapshot.forEach((doc) => {
        notes.push(
            {
                id: doc.id,
                ...doc.data()
            }
        )
    })
    return notes
}