import React from 'react'
import Moins from '../actions/moins';
import Plus from '../actions/plus'
 import { useDispatch, useSelector} from 'react-redux'
 function Test() {
     const dispatch =useDispatch()
     const value=useSelector(state=>state)
     const incriment = ()=> {
        dispatch(Plus())
     }
     const decriment = ()=>{
        dispatch(Moins())
     }
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={()=>incriment()}>Plus</button>
            <button onClick={decriment}>Moins</button>

        </div>
    )
}
export default Test;