import React, { useEffect, useState } from 'react'
import rgbToHex from './utils'
export default function SingleColor({rgb,weight,index,hexColor}) {
const [alert,setalert]=useState(false)
const bcg=rgb.join(',');
const hex=`#${hexColor}`;
useEffect(()=>{
  const timeout=setTimeout(()=>{
    setalert(false)
  },1500)
  return ()=>clearTimeout(timeout)
},[alert])
  return (
  <article className={`color ${index >9&&'color-light'}`} style={{backgroundColor: `rgb(${bcg})`}}
  onClick={()=>{
    setalert(true);
    navigator.clipboard.writeText(hex)
  }}
  ><p className='percent-value' >{weight}%</p>
  <p className='color-value'>{hex}</p>
  {alert&&<p className='alert'>copied to clipboard</p>}
  </article>
  )
}
