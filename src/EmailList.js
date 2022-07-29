import React from 'react'
import './EmailList.css'
import { Checkbox, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useState, useEffect } from 'react'
import { db } from './firebase'


import Section from './Section';
import EmailRow from './EmailRow';
import { collection, onSnapshot, orderBy, query} from 'firebase/firestore';
function EmailList() {
  const [emails, setEmaills] = useState([])
  console.log(emails);
  useEffect(() => {
    const collectionRef = collection(db, 'emails')
    const queryOrder = orderBy("timestamp", "desc")
    const q = query(collectionRef, queryOrder)
    const unsub = onSnapshot(q, (snapshot) => {
      setEmaills(snapshot.docs.map((doc) => (
        {
          id: doc.id,
          data: doc.data()
        }
      )
      ))
      return unsub
    })
  }, []);
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emaiLList__settingRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>

        </div>
      </div>
      <div className="emailLIst__section">
        <Section Icon={InboxIcon} title='primary' color='red' selected />
        <Section Icon={PeopleIcon} title='Social' color='#1A73e8' />
        <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
      </div>
      <div className="emailList__list">
        {emails.map(({ id, data }) => (


        <EmailRow
            id={id}
            key={id}
            title={data.to}
            subject={data.subject}
            description={data.message}
            time={new Date(data.timestamp?.seconds * 1000).toUTCString()}
          /> 

      
        ))}
        {/* <EmailRow title={'hello'}  subject="hey!!" description={'dsds'} time='10pm'/> */}

      </div>
    </div>

  )
}

export default EmailList