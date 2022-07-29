import React from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { async } from '@firebase/util';

function SendMail() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const onSubmit = async (formData) => {
        console.log(formData);
        try {
            const collectionRef = collection(db, "emails")
            const payload = {
                to: formData.to,
                subject: formData.subject,
                message: formData.message,
                timestamp: serverTimestamp()
            }
            const docRef = await addDoc(collectionRef, payload)
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        dispatch(closeSendMessage())
    }
  return (
    <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon onClick={()=> dispatch(closeSendMessage())} className='sendMail__close'/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='To' type="text" {...register("to", {required: true})}/>
                {errors.to && <p className='sendMail__error'>This field is required</p>}
                <input  placeholder='Subject' type="text"  {...register("subject", {required: true})}/>
                {errors.subject && <p className='sendMail__error'>This field is required</p>}
                <input placeholder='Message...' className='sendMail__message' type="text" {...register("message", {required: true})} />
                {errors.message && <p className='sendMail__error'>This field is required</p>}
                    <div className="sendMail__options">
                        <Button className='sendMail__send' variant='contained' color='primary' type='submit'>Send</Button>
                    </div>
            </form>
    </div>
  )
}

export default SendMail