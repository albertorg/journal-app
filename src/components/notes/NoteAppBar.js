import React from 'react'

export const NoteAppBar = () => {
    return (
        <div className='notes__appbar'>
            <span>28 de agoto 2020</span>
            <div>
                <button className='btn'>
                    Picture
                </button>

                <button className='btn'>
                    Save
                </button>
            </div>
        </div>
    )
}