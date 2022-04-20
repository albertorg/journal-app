import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NotesScreen = () => {
  return (
    <div className='note__main-content'>
        <NoteAppBar />

        <div className='notes__content'>
            <input 
                type="text" 
                placeholder='Some awesome title'
                className='notes__title-input'
            />

            <textarea 
                placeholder='What happened today'
                className='notes__textarea'
            ></textarea>

            <div className='notes__image'>
                  <img 
                    src="https://nystudio107-ems2qegf7x6qiqq.netdna-ssl.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg" 
                    alt="Imagen"
                  />
            </div>
            
        </div>
    </div>
  )
}
