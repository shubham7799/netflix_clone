import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import './featured.scss'

function Featured({type}) {
  return (
    <div className='featured'>
        <img src='https://goggler.my/wp-content/uploads/2020/08/interstellar-54607ec4784a4.jpg' alt="Featured Image"  />
        <div className="info">
            <img src="https://occ-0-3662-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABfzyg6lm0pZbZiWV8ScALWqN1PJAInSJyHf-lx-JM44UkCnL9MzqiNTkWBRpmFg58SGJZcetnlLxZ9kKcUQmLKdftnhL6Y9_pOtX.png" alt="" />
            <div className="category">
                    <span>2h 49m   |   {type}</span>
                </div>
            <span className='desc'>With humanity teetering on the brink of extinction, a group of astronauts travels through a wormhole in search of another inhabitable planet.</span>
            <div className="buttons">
                <button className='play'><PlayArrow /><span>Play</span></button>
                <button className='more'><InfoOutlined /><span>Info</span></button>
            </div>
        </div>
    </div>
    
  )
}

export default Featured