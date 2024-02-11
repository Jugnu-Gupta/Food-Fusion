import React from 'react'
import contactImg from '../assets/contactImg.svg';

const Contact = () => {
    return (
        <div className='max-w-4xl mx-auto px-6 flex justify-between items-center xs:flex-col my-5'>
            <div className='w-1/2 xs:w-full'>
                <img src={contactImg} alt="" />
            </div>
            <div className='w-1/2 xs:w-full'>
                <h1 className='text-center text-3xl font-bold mb-5'>Contact us</h1>
                <input className='w-full mb-3 px-2 border-[1px] border-orange rounded-md'
                    type="text" name="name" id="name" placeholder='Name' />
                <input className='w-full mb-3 px-2 border-[1px] border-orange rounded-md'
                    type="email" name="email" id="email" placeholder='Email' />
                <textarea className='w-full px-2 border-[1px] border-orange rounded-md truncate'
                    name="message" id="message" cols="30" rows="5" placeholder='Type your message here...'></textarea>
            </div>
        </div>
    )
}

export default Contact;