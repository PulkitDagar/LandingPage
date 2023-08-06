import React from 'react'
import './Social.css'

const Social = () => {
  return (
    <div>
        <div className='container'>
            <div id='marketing' className='section'>
                <div className='content'>
                    <h2>Facebook</h2>
                </div>
                <div className='overlay'></div>
            </div>

            <div id='technology' className='section'>
                <div className='content'>
                    <h2>Instagram</h2>
                </div>
                <div className='overlay'></div>
            </div>


            <div id='advertising' className='section'>
                <div className='content'>
                    <h2>Twitter</h2>
                </div>
                <div className='overlay'></div>
            </div>
            
            <div id='promotion' className='section'>
                <div className='content'>
                    <h2>LinkedIn</h2>
                </div>
                <div className='overlay'></div>
            </div>
            


        </div>

    </div>
  )
}

export default Social