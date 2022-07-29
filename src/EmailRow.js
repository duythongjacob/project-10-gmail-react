import React from 'react'
import { useNavigate } from 'react-router-dom';
import './EmailRow.css'
import { IconButton, Checkbox } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useDispatch } from 'react-redux';
import { selectedMail } from './features/mailSlice';

// import CheckBoxIcon from '@mui/icons-material/CheckBox';
function EmailRow({id,title, subject, description,time }) {
    const dispatch = useDispatch()
    const navigate  = useNavigate()
    const openMail = () =>{
        dispatch(selectedMail({
            id ,
            title,
            subject,
            description,
            time,
        }))
        navigate('/mail')
    }
  return (
        <div onClick={openMail } className="emailRow">
            <div className="emilRow__options">
            <Checkbox/>
            <IconButton>
                <StarBorderOutlinedIcon/>
            </IconButton>
            <IconButton>
                <LabelImportantIcon/>
            </IconButton>

            </div>
            <h3 className="emailRow__title">
                    {title}
            </h3>
            <div className="emailRow__message">
               <h4>{subject}
               <span className='emailRow__description'>
                  {'-'}   {description}
               </span>
               </h4>
            </div>
            <div className="emailRow__time">
                    {time}
            </div>
        </div>
  )
}

export default EmailRow