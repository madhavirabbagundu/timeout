import React from 'react'

export default function App(){
    const myDebounce = (cb,d)=>{
        let timer;
        return function (...args){
            if(timer) clearTimeout(timer);
            timer = setTimeout(()=>{
                cb(...args);
            },d);
        }
    }

const handleChange = myDebounce((e)=>{
    console.log(e.target.value)
},1000)
return(
    <div>
        <input onChange={handleChange}/>
    </div>
)
}