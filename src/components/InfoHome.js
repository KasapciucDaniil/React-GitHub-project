import React from 'react'
import { Button } from 'react-bootstrap';
import { Footer } from './Footer';

export const InfoHome = () => {
    return(
       <div className="info-home">
         <h2 className="display-4 txt-info">Что такое React Js?</h2>

         <div className="info-r">
            <img 
              className="reactInfo"
              height="300"
              weight="270"
              src="../images/reactjs.jpg" 
              alt=""
            />
            <div>
                <h2 className="info-enc-r display-4">React Js описание</h2>
                <p className="info-text-r display-4">React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений.</p>
              <Button className="btn-info" variant="info" href="/">На главную</Button> 
              </div>   
         </div>
         <div className="info-l">
             
            <img 
             className="reactInfoR"
             height="350"
             width="560"
             src="../images/reactjs3.jpg"
             alt=""
            /> 
              <h2 className="info-enc-l display-4">Кем был создан React JS?</h2>
              <p className="info-text-l display-4">React был создан Джорданом Валке, разработчиком программного обеспечения из Facebook. На него оказал влияние XHP — компонентный HTML-фреймворк для PHP. Впервые React использовался в новостной ленте Facebook в 2011 году и позже в ленте Instagram в 2012 году. Исходный код React открыт в мае 2013 года на конференции «JSConf US».
              React Native анонсирован на конференции Facebook «React.js Conf» в феврале 2015 года, а исходный код открыт в марте 2015 года. Он позволяет разрабатывать нативные Android-, iOS- и UWP-приложения с использованием React.
              </p>
              <Button className="btn-info2" variant="info" href="/about">Дополнительная информация</Button> 
         </div>
         <div className="info-last">
          <img 
              className="reactInfo"
              height="370"
              width="530"
              src="../images/reactjs1.jpg"
              alt=""
              /> 
             <h2 className="info-enc-r display-4">Возможности приложения</h2> 
             <p className="info-text-r display-4">В данном приложении есть Возможность создавать заметку или новость, а так же добавлять заметку в избранное. React Js ToDo было написанно на хуках, здесь использовались хуки такие как: useContext, useEffect, useReducer, useState и т.д</p>
             <Button className="btn-info" variant="info" href="/creator">Создать пост</Button>
         </div>
       </div>  
    )
}