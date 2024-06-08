import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";


function todoapp() {
    const[text, setText] = useState("");
    const todos = useSelector((state) => state.to)
  return (
    <div>
        <input type="text" value={text}/>
    </div>
  )
}

export default todoapp
