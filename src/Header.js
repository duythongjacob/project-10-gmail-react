import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {Avatar, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { logout, selectUser } from './features/userSlice';
import {useSelector} from 'react-redux'
import { auth } from './firebase';
import { signOut } from "firebase/auth";
import { useDispatch } from 'react-redux/es/exports';
function Header() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const outApp = () =>{
           signOut(auth).then( () => {
            dispatch(logout())
           })
    }
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="" />
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input placeholder='Search mail' type="text" />
                <ArrowDropDownIcon className='header__inputCaret' />
            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon />

                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar onClick={outApp} src={user?.photoUrl}/>
            </div>
        </div>
    )
}

export default Header