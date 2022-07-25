import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React, { useRef,useState } from 'react'
import ListItem from '../listItem/ListItem'
import './list.scss'
import Movies from '../../data/movies'

function List({listTitle}) {

    const [slideIndex,setSlideIndex]=useState(0)

    const listRef=useRef()  

  const sliderClick=(direction)=>{
      var d=listRef.current.getBoundingClientRect().x-50;
      if(direction==="left"){
        listRef.current.style.transform=`translateX(${230+d}px)`
        setSlideIndex(slideIndex-1)
      }
      else{
        listRef.current.style.transform=`translateX(${d-230}px)`
        setSlideIndex(slideIndex+1)
      }
  }    

  return (
    <div className='list'>
        <span className="listTitle">{listTitle}</span>
        <div className="wrapper">
            {slideIndex!=0 && <ArrowBackIosOutlined className='sliderArrow left' onClick={()=>sliderClick("left")}/>}
            <div className="container"  ref={listRef}>
                {
                    Movies.map((m)=>{
                        return <ListItem index={m.id-1} data={m} />
                    })
                }
            </div>
            {slideIndex<(10-((window.innerWidth-50)/230)) && <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>sliderClick("right")}/>}
        </div>
    </div>
    )
}
export default List