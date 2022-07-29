
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Mail from './Mail'
import EmailList from './EmailList'
import SendMail from './SendMail'
import Login from './Login'
import { onAuthStateChanged  } from 'firebase/auth'
import {auth} from  './firebase'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectSendMessageIsOpen } from './features/mailSlice'
import { selectUser } from './features/userSlice'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
function App() {

    const dispatch = useDispatch()
     const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
     const user= useSelector(selectUser)
     useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if(user ) {
              dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
              }))
          }
        })
     }, []);
  return (
    <BrowserRouter>
      {
        !user ? (<Login/>):  
        (<div className="App">
        <Header/>
        <div className="app__body">
        <Sidebar/>
          <Routes>
            <Route path='/mail' element={<Mail/>}/>
            <Route path='/' element={<EmailList/>}/>
          </Routes>
        </div>
        {sendMessageIsOpen &&  <SendMail/>}

      </div>)    
      }

    </BrowserRouter>
  )
}

export default App