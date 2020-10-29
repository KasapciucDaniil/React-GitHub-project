import React, {useContext} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import { AlertContext } from '../context/alert/alertContext'
import { Alert } from '../components/Alert'

export const CreatorFavorite = ({favnotes, onRemove}) => {
  const alert = useContext(AlertContext)

  const submitHandler = (event, favnote) => {
    event.preventDefault()

    onRemove(favnote.id).then(() => {
      alert.show('Заметка была удалена из избранного!', 'danger') 
    }).catch(() => {
      alert.show('Что-то пошло не так!', 'danger')
    })
  }
  
    if(!favnotes) {
      return ''
    }
    
    return (
      <TransitionGroup component="ul" className="list-group fav-notes">
         <h1 className="txt display-4">Избранное</h1> 
         <Alert />
          {favnotes.map(favnote => (
             <CSSTransition
             key={favnote.id}
             classNames={'note'}
             timeout={800}
             >
           <li 
              className="list-group-item note"
              key={favnote.id}
            >
            <div>
              <h3
               className="create-title display-4"
              >{favnote.title}</h3>
              <div className="btn-w">{favnote.type}</div>
            </div>  

            <strong className="text display-4">{favnote.text}</strong>
             
              <button 
                style={{marginBottom: '3rem'}}
                type="button" 
                className="btn btn-outline-danger btn-sm btn-delete "
                onClick={event => submitHandler(event, favnote)}
              >
                &times;
              </button>
            </li> 
            </CSSTransition>  
          ))}
      </TransitionGroup>
    )
}