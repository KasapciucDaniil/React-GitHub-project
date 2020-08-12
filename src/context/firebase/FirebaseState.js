import React, {useReducer} from 'react'
import axios from 'axios'
import {FirebaseContext} from './firebaseContext'
import {firebaseReducer} from './firebaseReducer'
import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER, REMOVE_LOADER, SAVE_NOTE, FETCH_FAVNOTES, REMOVE_FAVNOTE} from '../types'

const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({children}) => {
  const initialState = {
    notes: [],
    favnotes: [],
    loading: false
  }
  const [state, dispatch] = useReducer(firebaseReducer, initialState)

  const showLoader = () => dispatch({type: SHOW_LOADER})

  const removeLoader = () => dispatch({type: REMOVE_LOADER})

  const fetchNotes = async () => {
    removeLoader()
    const res = await axios.get(`${url}/notes.json`)
    let payload = []

    if (res.data) {
      payload = Object.keys(res.data).map(key => {
        return {
          ...res.data[key],
          id: key
        }
      })
    }

    dispatch({type: FETCH_NOTES, payload})
  }

  const fetchFavNotes = async () => {
    removeLoader()
    const res = await axios.get(`${url}/favnotes.json`)
    let payload = []

    if (res.data) {
      payload = Object.keys(res.data).map(key => {
        return {
          ...res.data[key],
          id: key
        }
      })
    }

    dispatch({type: FETCH_FAVNOTES, payload})
  }

  const addNote = async (title, text, type) => {
    const note = {
      title, text, type
    }
    console.log(note)

    try {
      const res = await axios.post(`${url}/notes.json`, note)
      const payload = {
        ...note,
        id: res.data.name
      }

      dispatch({type: ADD_NOTE, payload})

    } catch (e) {
      throw new Error(e.message)
    }
  }

  const removeNote = async id => {
    await axios.delete(`${url}/notes/${id}.json`)

    dispatch({
      type: REMOVE_NOTE,
      payload: id
    })
  }

  const removeFavNote = async id => {
    await axios.delete(`${url}/favnotes/${id}.json`)

    dispatch({
      type: REMOVE_FAVNOTE,
      payload: id
    })
  }

  const saveNote = async (title, text, type) => {
    const favnote = {
      title, text, type
    }
  
    try {
      const res = await axios.post(`${url}/favnotes.json`, favnote)
      const payload = {
        ...favnote,
        id: res.data.name
      }

      dispatch({type: SAVE_NOTE, payload})

    } catch (e) {
      throw new Error(e.message)
    }
  }

  return (
    <FirebaseContext.Provider value={{
      showLoader, removeLoader,addNote, removeNote, fetchNotes,saveNote,fetchFavNotes, removeFavNote,
      loading: state.loading,
      notes: state.notes,
      favnotes: state.favnotes
    }}>
      {children}
    </FirebaseContext.Provider>
  )
} 