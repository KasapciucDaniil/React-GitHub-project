import React, { Fragment, useContext, useEffect } from "react"
import { CreatorFavorite } from "../components/CreatorFavorite"
import { FirebaseContext } from "../context/firebase/firebaseContext"
import { Loader } from './../components/Loader';

export const Favorites = () => {
    const {loading, favnotes, fetchFavNotes, removeFavNote} = useContext(FirebaseContext)

    useEffect(() => {
      fetchFavNotes()
      // eslint-disable-next-line
    }, [])

    return(
        <Fragment>
          {loading
          ? <Loader />
          : <CreatorFavorite favnotes={favnotes} onRemove={removeFavNote}/>
          }
        </Fragment>
    )
}