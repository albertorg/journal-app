import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore"
import Swal from "sweetalert2"
import { db } from "../firebase/firebase-config"
import { loadNotes } from "../helpers/loadNotes"
import { types } from "../types/types"


export const startNewNote = () => {
    return async(dispatch, getState) => {
        const uid = getState().auth.uid
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const docRef = await addDoc(collection(db, `${uid}/journal/notes`),newNote) 
        
        dispatch(activeNote(docRef.id, newNote))
        dispatch(showNewNote(docRef.id, newNote))
    }
}

export const activeNote = (id, note) => (
    {
        type: types.notesActive,
        payload: {
            id,
            ...note
        }
    }
)

export const showNewNote = (id, note) => ({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
})

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid)
        dispatch(setNotes(notes))
    }
}

export const setNotes = (notes) => (
    {
        type: types.notesLoad,
        payload: notes
    }
)

export const saveNote = (note) => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth

        if (!note.url) {
            delete note.url
        }

        const noteToFirestore = {...note}
        delete noteToFirestore.id

        const docRef = doc(db, `${uid}`, `/journal/notes/${note.id}`)
        await updateDoc(docRef, noteToFirestore)

        dispatch(refreshNote(note.id, noteToFirestore))  
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Saved',
            showConfirmButton: false,
            timer: 1000
        })  
    }
}

export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id, 
        note: {
            id,
            ...note
        }
    }
})

export const deleteNote = ( id ) => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth
        
        await deleteDoc(doc(db, `${uid}/journal/notes/${id}`))
        
        dispatch(deleteNoteStore(id))
    }
}

export const deleteNoteStore = (id) => (
    {
        type: types.notesDelete,
        payload: id
    }
)

export const noteLogout = () => (
    {
        type: types.notesLogoutCleaning,
    }
)