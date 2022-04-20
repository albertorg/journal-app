import React from 'react'

export const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>
            <div className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://st2.depositphotos.com/3759967/5593/i/600/depositphotos_55936567-stock-photo-swirling-frosty-multi-colored-fractal.jpg)'
                }}
            ></div>

            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    Un nuevo dia
                </p>
                <p className='journal__entry-content'>
                    Lorem lklnlk ln,mmmam, lore insup huhih 
                    ihiuhiuhui iuh.
                </p>
            </div>

            <div className='journal__entry-date'>
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
