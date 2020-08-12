import React, {useState, useContext} from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from '../context/firebase/firebaseContext';
// import { Footer } from './Footer';

export const FormNote = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [type, setType] = useState('Новость')
  const alert = useContext(AlertContext)
  const firebase = useContext(FirebaseContext)

  const submitHandler = event => {
    event.preventDefault()

    if (title.trim() && text.trim() && type) {
      firebase.addNote(title, text, type).then(() => {
        alert.show('Заметка была создана!', 'success')
      }).catch(() => {
        alert.show('Что-то пошло не так!', 'danger')
      })
      setTitle('')
      setText('')
      setType('')
    } else {
      alert.show('Заполните все поля!')
    }
  }

    return(
   <div className="formNote">
    <Form className="creator">
      <h1 className="display-4 txt-form">Создание поста</h1>
        <Form.Group>
          <Form.Label>Название Заметки</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Введите название заметки..." 
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group >
            <Form.Label>Тип</Form.Label>
            <Form.Control as="select"
             type="select"
             value={type}
             onChange={e => setType(e.target.value)}
            >
            <option>Новость</option>
            <option>Заметка</option>
            </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Текст поста</Form.Label>
            <Form.Control 
                type="text"
                as="textarea" 
                rows="3" 
                placeholder="Введите текст..." 
                value={text}
                onChange={e => setText(e.target.value)}
            />
        </Form.Group>
        <Form.Group>
          <Button onClick={submitHandler} variant="success">Создать</Button>
        </Form.Group>
        {/* <Footer /> */}
     </Form>
   </div>    
    )
}