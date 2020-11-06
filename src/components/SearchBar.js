import React,{useState} from 'react';

const SearBar = ({onFormSubmit}) => {
    const [term,setTerm] = useState('');
    const onValueChange= (e)=>{
        setTerm(e.target.value)
    }

    const onFormDone= (e)=>{
        e.preventDefault();
        onFormSubmit(term);
    }

    return (
        <div>
        <form onSubmit={(e)=>onFormDone(e)}>
          <input type="text" style={{width:`${350}px`, height:`${30}px`, color:"rgb(47, 112, 209)",fontWeight: "800", paddingLeft:"6px", backgroundColor:"rgb(71, 64, 83)"}} value={term} onChange={(e)=>onValueChange(e)}></input>
        </form>
        </div>
    )

}

export default SearBar;