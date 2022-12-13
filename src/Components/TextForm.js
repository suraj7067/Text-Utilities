import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () => {
        let newText=text.toLowerCase();
        setText(newText)    }

    const handleClearText = () => {
        let newText="";
        setText(newText)    }       

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const[text, setText] = useState('Enter your text');
  return (
    <div >
    <div className="mb-3" >
    <h1 className="my-3"  >{props.heading}</h1>
    <div className="mb-3" >
    <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange}  ></textarea>
    </div>
    <button className="btn btn-primary mx-3" onClick={(e) => {handleUpClick(); e.preventDefault(); console.log(e);}}>Change to Uppercase</button>
    <button className="btn btn-primary mx-3" onClick={handleLowClick} >Change to Lowercase</button>
    <button className="btn btn-primary mx-3" onClick={handleClearText} >Clear Text</button>

    <h1 className="my-3"  >Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} mins average read time</p>

  </div>
    </div>
  )
}
