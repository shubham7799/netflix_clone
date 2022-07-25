import { Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import './listitem.scss'

function ListItem({index,data}) {
    const [isHovered,setIsHovered]=useState(false)
  return (
    <div className='listItem' 
        onMouseEnter={()=>{setIsHovered(true)}}
        
        >
        <img src={data.listImage} />
        {isHovered && (
            <div 
                className="onHover"
                style={{left: isHovered && index*225 + index*2.5}}
                onMouseLeave={()=>{setIsHovered(false)}}>
                <iframe 
                    src={data.trailer+"?autoplay=1&mute=1"}>
                </iframe>
                <div className="itemInfo">
                    <div className="icons">
                        <PlayArrow className='icon'/>
                        <Add className='icon'/>
                        <ThumbUpOutlined className='icon'/>
                        <ThumbDownOutlined className='icon'/>
                    </div>
                    <div className="itemInfoTop">
                        {data.time}  |  {data.year}
                    </div>
                    <div className="desc">{data.desc}</div>
                    <div className="genre">{data.genre}</div>
                </div>
            </div>
        )}
        

    </div>
  )
}

export default ListItem