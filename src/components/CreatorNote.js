import React, {useState ,useContext} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import { AlertContext } from '../context/alert/alertContext'
import { Alert } from '../components/Alert'
import { FirebaseContext } from './../context/firebase/firebaseContext';

export const CreatorNote = ({notes, onRemove, onSave}) => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [type, setType] = useState('')

  const alert = useContext(AlertContext)
  const firebase = useContext(FirebaseContext)

  const submitHandler = (event, note) => {
    event.preventDefault()

    onRemove(note.id).then(() => {
      alert.show('Заметка была удалена!', 'danger') 
    }).catch(() => {
      alert.show('Что-то пошло не так!', 'danger')
    })
  }

     const saveNotes = (event, note) => {
       event.preventDefault()

       if(note.id) {
         firebase.saveNote(note.title, note.text, note.type).then(() => {
           alert.show('Заметка была добавлена в избранное!', 'success')
         }).catch(() => {
           alert.show('Заметку нельзя добавить в избранное!', 'danger')
         })
          setTitle(note.title)
          setText(note.text)
          setType(note.type)
       }
     }
   
  return (
    <TransitionGroup component="ul" className="list-group fav-notes">
      <h1 className="txt display-4">Заметки и посты</h1>
      <Alert />
      {notes.map(note => (
        <CSSTransition
        key={note.id}
        classNames={'note'}
        timeout={800}
        >
        <li className="list-group-item note">
         <div>
          <h3
            className="create-title display-4"
            value={title}
          >{note.title}</h3>
          <div className="btn-w"
            value={type}
          >{note.type}</div>
        </div> 

         <strong className="text display-4"
           value={text}
         >{note.text}</strong>

         <button onClick={event => saveNotes (event, note)} type="button" className="btn btn-success btn-save">Сохранить</button>
         
         <button 
           type="button" 
           className="btn btn-outline-danger btn-sm btn-delete "
           onClick={event => submitHandler(event, note)}
           style={{marginBottom: '4rem'}}
         >
           &times;
         </button>
         </li>  
         </CSSTransition> 
      ))}
  </TransitionGroup>
   )
}