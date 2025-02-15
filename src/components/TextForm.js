import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Upper Case Click" + text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("UpperCase has been Enabled","success")
    }
    const handleloClick = ()=>{
        // console.log("Upper Case Click" + text);
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("LowerCase has been Enabled","success")
    }
    const handleRevClick = ()=>{
        // console.log("Upper Case Click" + text);
        let newText= text.split('').reverse().join('');
        setText(newText)
        props.showAlert("Converted Text in Reverse","success")
    }
    const handleOnChange = (event)=>{
        // console.log("OnChange");
        setText(event.target.value);
    }
    const[text,setText] = useState('');
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-ptimary mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="btn btn-ptimary mx-2" onClick={handleloClick} >Convert to LowerCase</button>
            <button className="btn btn-ptimary mx-2" onClick={handleRevClick} >Reverse</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary </h1>
            <p>{text.split(" ").length} words,{text.length} charachter</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h1>Preview</h1>
            <p>{text.length>0?text:"Enter something to preview"}</p>
        </div>
        </>
    )
}
