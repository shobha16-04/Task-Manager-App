import '../App.css';

function CustomInput(props) {
    return(
       <div className='inputWrapper'>
           <label>{props.name}</label>
           <input className='inputForm' placeholder={props.placeholder} onChange={props.change}></input>
       </div>
           
        
    );
    
}

export default CustomInput;