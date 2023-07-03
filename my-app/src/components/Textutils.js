import {React,useState} from 'react'

export default function Textutils(){
    const [text, setText] = useState("");
    function uppercase(e) {
        setText(text.toUpperCase())
        e.preventDefault();
    }
    function  changeEvent(e) {
        setText(e.target.value)
    }
    return(
        <>
        <form>
        <div class="form-group">
        <label for="exampleFormControlTextarea1">Enter your Text</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" onChange={changeEvent} value={text}></textarea>
        </div>
        <div>
        <button class="btn btn-primary" onClick={uppercase}>change to uppercase</button>
        <h3>Your Text has {text.split(" ").length} words and {text.length} letters</h3>
        </div>
        <div>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </form>
        </>
    )
}


