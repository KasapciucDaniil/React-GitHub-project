import React, {Fragment, useContext, useEffect} from 'react'
import {CreatorNote} from '../components/CreatorNote'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Notes = () => {
    const {notes, fetchNotes, removeNote, saveNote} = useContext(FirebaseContext)

    useEffect(() => {
      fetchNotes()
      // eslint-disable-next-line
    }, [])

    return (   
      <Fragment>
          <CreatorNote notes={notes} onRemove={removeNote} onSave={saveNote}/>
      </Fragment>
    )
}