import React ,{useState,useEffect}from 'react'

const Timer = ({time,maxtime}) => {
    const[timer,settimer]=useState(0)
    useEffect(()=>{
        let id=setInterval(() => {
            settimer(timer+1)
            time(timer)
        }, 1000);
        if(timer>maxtime){
          settimer(0)
               
        }
        return()=>{
            clearInterval(id)
        }
        
          },[timer])
              



  return (
    <div>
    <div>{}</div>
    </div>
  )
}

export default Timer