import { useState } from "react"
import "./Slider.scss"

const Slider = ({images}) => {
    const[imageIndex,setImageIndex] = useState(null);

    const changeSlide = (direction) =>{
        if(direction === "left"){
            imageIndex === 0 ? setImageIndex(images.length-1) : setImageIndex(imageIndex-1);
        }else{
            imageIndex === images.length-1 ? setImageIndex(0) : setImageIndex(imageIndex+1);
        }
    }
  return (
    <div className="slider">
        {imageIndex !== null && (<div className="fullSlider">
            <div className="arrow" onClick={()=>changeSlide("left")}>
                <img src="/arrow.png" alt="" />
            </div>
            <div className="imgContainer">
                <img src={imageIndex} alt="" />
            </div>
            <div className="arrow" onClick={()=>changeSlide("right")}>
                <img src="/arrow.png" className="right" alt="" />
            </div>
            <div className="close" onClick={()=>setImageIndex(null)}>X</div>
        </div>)}
        <div className="bigImage">
            <img src={images[0]} alt="" onClick={()=>setImageIndex(0)}/>
        </div>
        <div className="smallImage">
            {images.slice(1).map((image,index)=>{
                <img src={image} alt="" key={index} onClick={()=>setImageIndex(image+1)}/>
            })}
        </div>
    </div>
  )
}

export default Slider