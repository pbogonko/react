import { useState } from 'react';
import '../../App.css'
import { redJ ,blackJ,orangeJ,greenJ,greyJ,yellowJ,blueJ} from "../../assets";
const HeaderComponent=({item})=>{
    const[image,setImage]=useState(redJ)
    const[backgroundColor,setColor]=useState('white')
    const onhandleClick=(event)=>(
         setImage(
            event.target.id==='Red'?redJ:event.target.id==='Black'?blackJ
            :event.target.id==='Green'?greenJ:event.target.id==='Blue'?blueJ :event.target.id==='Grey'?greyJ :event.target.id==='Yellow'?yellowJ:orangeJ
         ),
         setColor(
            event.target.id==='Red'?'red':event.target.id==='Black'?'black'
            :event.target.id==='Green'?greenJ:event.target.id==='Blue'?'blue' :event.target.id==='Grey'?'grey' :event.target.id==='Yellow'?'yellow'
            :event.target.id==='Orange'?'orange':'white'

         )
    )
    return (
        <div className="container" style={{backgroundColor}} >
            <img src={image} style={{backgroundColor}}/>
            <div className='description'>
                <h2>{item.title}</h2>
                <h4>{item.collection}</h4>
                <p>{item.description}</p>
                <div className="colors">
                    <p>Available colors:</p>
                    {item.availableColors.map(btns=>(
                      <button key={btns} id={btns} onClick={onhandleClick}></button>
                     ))}
           
                </div>
                <div className='price'>
                    <h4>Rs.{item.price}</h4>
                    <button id='buy'>Buy Now</button>
                </div>

                
            </div>
        
        
            
     
      </div>
    )
}
export default HeaderComponent;


     

