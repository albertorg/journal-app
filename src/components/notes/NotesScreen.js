import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, deleteNote } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NoteAppBar } from './NoteAppBar'

export const NotesScreen = () => {

  const {active} = useSelector(state => state.notes)
  const [formValues, handleInputChange, reset] = useForm(active)
  const dispatch = useDispatch()

  const {body, title} = formValues
  const activeId = useRef(active.id)

  useEffect(() => {
    if (activeId.current !== active.id) {
      reset(active)
      activeId.current = active.id
    }
  }, [active, reset])

  useEffect(() => {
    
    dispatch(activeNote(formValues.id, {...formValues}))
    
  }, [formValues, dispatch])
  
  const handleDelete = () => {
    dispatch(deleteNote(active.id))
  }

  return (
    <div className='note__main-content'>
        <NoteAppBar />

        <div className='notes__content'>
            <input 
                type="text" 
                placeholder='Some awesome title'
                className='notes__title-input'
                name='title'
                value={title}
                onChange={handleInputChange}
            />

            <textarea 
                placeholder='What happened today'
                className='notes__textarea'
                name='body'
                value={body}
                onChange={handleInputChange}
            ></textarea>

            <div className='notes__image'>
                  <img 
                    src="https://nystudio107-ems2qegf7x6qiqq.netdna-ssl.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg" 
                    alt="Imagen"
                  />
            </div>
            
        </div>

        <button
          className='btn btn-danger' 
          onClick={handleDelete}
        >Delete</button>
    </div>
  )
}
