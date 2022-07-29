import { Button } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import AddIcon from '@mui/icons-material/Add';
import SidebarOption from './SidebarOption'
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { LabelImportant } from '@mui/icons-material';
import {IconButton}  from '@mui/material'
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

function Sidebar() {
  const dispatch = useDispatch()
  return (
    <div className="sidebar">
        <Button className='sidebar__compose' startIcon={<AddIcon fontSize='large'/>} onClick={()=> dispatch(openSendMessage())} fontSize="large">Compose</Button>
        <SidebarOption Icon={InboxIcon} title='Inbox' number={54} selected={true}/>
        <SidebarOption Icon={StarIcon} title='Starred' number={54} selected={false}/>
        <SidebarOption Icon={AccessTimeIcon} title='Snoozed' number={32}/>
        <SidebarOption Icon={LabelImportant} title='Important' number={32}/>
        <SidebarOption Icon={NearMeIcon} title='Send' number={32}/>
        <SidebarOption Icon={NoteIcon} title='Drafts' number={32}/>
        <SidebarOption Icon={ExpandMoreIcon} title='More' number={32}/>
        <div className="sidebar__footer">
          <div className="sidebar__footerIcons">
            <IconButton>
              <PersonIcon/>
            </IconButton>
            <IconButton>
              <DuoIcon/>
            </IconButton>
            <IconButton>
              <PhoneIcon/>
            </IconButton>
          </div>
        </div>
    </div>
  )
}

export default Sidebar