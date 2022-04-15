import React,{useState} from "react";
import Values from "values.js";
import SingleColor from './singleColor'

function App() {
const [color,setColor]=useState('');
const [myerror,setError]=useState(false)
const [list,setList]=useState(new Values('#f15025').all(10));

const handelcolor=(e)=>{
e.preventDefault();
try{
  const colors=new Values(color).all(10);
  setList(colors)
}
catch(error){
setError(true);
console.log(error)
}
}
return (
  <>   <section className="container">
     <h3> color generator</h3>
     <form onSubmit={handelcolor}>
       <input type='text' value={color} onChange={(e)=>setColor(e.target.value)} placeholder='#f15025'
       className={`${myerror?'error':null}`}
       />
       <button type="submit" className="btn" >Submit</button>
     </form>
   </section>
   <section className="colors">
{list.map((col,index)=>(
  <SingleColor key={index} {...col} index={index} hexColor={col.hex}/>
))}
   </section>
   </>
  );
}

export default App;
