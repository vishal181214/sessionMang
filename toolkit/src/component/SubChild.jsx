import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../features/showSlice';

function SubChild() {
    const dispatch = useDispatch();
    const data = useSelector((c)=>{
        console.log(c.show.value)
        return c.show.value;
    })
  return (
    <div>
      <h3>Sub-Child - {data}</h3>
      <button onClick={()=> dispatch(increment())}>Click Me</button>
    </div>
  )
}

export default SubChild
