import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Favorites} from './pages/Favorites'
import {Creator} from './pages/Creator'
import {Notes} from './pages/Notes'
import {Header} from './components/Header'
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FirebaseState';
import { Footer } from './components/Footer';

 

function App() { 
 return ( 
    <FirebaseState>
     <AlertState>
      <BrowserRouter>
        <Header />
          <div className="container pt-4">
            <Switch>
              <Route path={'/'} exact component={Home}/>
              <Route path={'/about'}  component={About}/>
              <Route path={'/favorites'}  component={Favorites}/>
              <Route path={'/notes'} component={Notes}/>
              <Route path={'/creator'}  component={Creator}/>
            </Switch>
          </div>
        <Footer />  
      </BrowserRouter> 
     </AlertState>  
    </FirebaseState> 
 )
}

export default App;
