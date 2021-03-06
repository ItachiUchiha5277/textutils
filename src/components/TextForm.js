import React, { useState } from 'react'
import { motion } from "framer-motion"
import './styles.css'

export default function TextForm(props) {
    const handleUpClick = () => {
        if (text === null) {
            return
        }
        else {
            setText(text.toUpperCase())
        }
    }
    const handleLoClick = () => {
        if (text === null) {
            return
        }
        else {
            setText(text.toLowerCase())
        }
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const clearText = () => {
        setText('')
    }

    const removeExtraSpaces = () => {
        setText(text.replace(/\s+/g, ' ').trim())
    }

    const copyText = () => {
        let textarea = document.getElementById('textarea')
        navigator.clipboard.writeText(textarea.value)
        props.showAlert('Text Copied!', 'success')
    }

    const [text, setText] = useState('')

    let words = text.split(/\s+/).filter((element) => { return element.length !== 0 }).length

    let minutes = words * 0.008
    let first = minutes.toString().split('.')[0]
    let second = '0.' + minutes.toString().split('.')[1]
    let final = parseFloat(second) * 60

    return (
        <>
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.6}}
            >
                <div className="mb-3 my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h1>{props.heading}</h1>

                    <textarea className="form-control" id="exampleFormControlTextarea1" id="textarea" rows="8" placeholder="Enter text here" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#1f232e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>

                    <button type="button" onClick={handleUpClick} className={`btn btn-${props.mode==='dark'?'dark':'primary'} my-3 ${text.length===0?'disabled':''}`}>Convert to <b>UPPERCASE</b> </button>

                    <button type="button" onClick={handleLoClick} className={`btn btn-${props.mode==='dark'?'dark':'primary'} my-3 mx-2 ${text.length===0?'disabled':''}`}>Convert to <b>lowercase</b> </button>

                    <button type="button" className={`btn btn-${props.mode==='dark'?'dark':'primary'} my-3 ${text.length===0?'disabled':''}`} onClick={clearText}>Clear Text</button>

                    <button type="button" className={`btn btn-${props.mode==='dark'?'dark':'primary'} my-3 mx-2 ${text.length===0?'disabled':''}`} onClick={removeExtraSpaces}>Remove extra spaces</button>

                    <button type="button" className={`btn btn-${props.mode==='dark'?'dark':'primary'} my-3 ${text.length===0?'disabled':''}`} onClick={copyText}><span class="fas fa-copy"></span>Copy Text</button>
                </div>
                <hr style={{ color: props.mode === 'dark' ? 'white' : 'black' }} />
                <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <div className="container my-5">
                        <h2>Text Summary</h2>
                        <p><b>{words}</b> words <b>{text === null ? 0 : text.length}</b> characters</p>
                    </div>

                    <div className="container my-5">
                        <h2>Estimated Reading Time</h2>
                        <p><b>{first}</b> minutes <b>{final.toFixed(1)}</b> seconds</p>
                    </div>

                    <div className="container my-5">
                        <h2>Preview</h2>
                        <p>{text.length!==0 ? text : 'Nothing to preview here'}</p>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
