/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const convertoup=()=>{
    let newtext= text.toUpperCase()
    setText(newtext)
    props.showAlert(" Text changed in Upper Case", "success")
  }
  const convertolower=()=>{
    let newtext= text.toLowerCase()
    setText(newtext)
    props.showAlert(" Text changed in Lower Case", "success")
  }
  const cleartext=()=>{
    let newtext= ""
    setText(newtext)
    props.showAlert(" Text has been Cleared", "success")
  }
  const capitalize=()=>{
   let newText=()=>{ text.toLowerCase()
    return text[0].toUpperCase()+ text.slice(1)
   }
   setText(newText())
   props.showAlert(" Text has been Capitalized", "success")
  }
  const handleExtraSpaces=()=>{
   let newText= text.split(/[ ]+/);
   setText(newText.join(" "));
   props.showAlert(" Extra space has been Cleared", "success")
  }
  const handleOnChange=(event)=>{
    setText(event.target.value)
  }
  const wordslength=()=>{
    if(text.length===0){
      return "0"
    }
    else if(text.split(" "+"")){
      return text.split(" ").length-1
    }
  }
  const[text,setText]= useState("");
  return (
    <>
    <div className=' md:mx-[150px] lg:mx-[300px] container'>
      <h1 className='text-4xl my-2' style={{color:props.mode===`light`?`black`:`white`}} >{props.heading}</h1>
      <div className='mt-2'>
        {/* <label htmlFor="myBox" className='flex justify-center mt-2 '>Example text area</label> */}
        <textarea className='border-2  rounded w-[800px] h-[150px] pl-2 ' id='myBox' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode===`light`?`white`:`grey`, color:props.mode===`light`?`#212529`:`white`,}}></textarea>
      </div>
      <div className='my-2 space-x-2'>
      <button className=" py-1 pl-1 pr-2  border border-transparent rounded  focus:outline-none focus:ring-2 font-semibold active:ring-blue-500 focus:ring-offset-2" style={{backgroundColor:props.mode===`light`?`#1D764E`:`white`, color:props.mode===`light`?`white`:`#212529`,}} onClick={convertoup}>
        Convert to UpperCase
      </button>
      <button className=" py-1 pl-1 pr-2  border border-transparent rounded  focus:outline-none focus:ring-2 font-semibold active:ring-blue-500 focus:ring-offset-2" style={{backgroundColor:props.mode===`light`?`#1D764E`:`white`, color:props.mode===`light`?`white`:`#212529`,}} onClick={convertolower}>
        Convert to LowerCase
      </button>
      <button className=" py-1 pl-1 pr-2  border border-transparent rounded  focus:outline-none focus:ring-2 font-semibold active:ring-blue-500 focus:ring-offset-2" style={{backgroundColor:props.mode===`light`?`#1D764E`:`white`, color:props.mode===`light`?`white`:`#212529`,}}onClick={cleartext}>
        Clear
      </button>
      <button className=" py-1 pl-1 pr-2  border border-transparent rounded  focus:outline-none focus:ring-2 font-semibold active:ring-blue-500 focus:ring-offset-2" style={{backgroundColor:props.mode===`light`?`#1D764E`:`white`, color:props.mode===`light`?`white`:`#212529`,}} onClick={capitalize}>
        Capitalize
      </button>
      <button className=" py-1 pl-1 pr-2  border border-transparent rounded  focus:outline-none focus:ring-2 font-semibold active:ring-blue-500 focus:ring-offset-2" style={{backgroundColor:props.mode===`light`?`#1D764E`:`white`, color:props.mode===`light`?`white`:`#212529`,}} onClick={handleExtraSpaces}>
        Remove Spaces
      </button></div></div>
    <div className="container md:mx-[150px] lg:mx-[300px] font-medium my-3">
      <h1 className='text-3xl' style={{color:props.mode===`light`?`#212529`:`white`}}>Your text Summary</h1>
      <p className='my-2' style={{color:props.mode===`light`?`#212529`:`white`}}>{wordslength()} words and {text.length} Character</p>
      <p className='py-2' style={{color:props.mode===`light`?`#212529`:`white`}}>{0.008 * text.split(" ").length} minutes to read this summary</p>
      <h1 className='text-3xl font-medium py-2' style={{color:props.mode===`light`?`#212529`:`white`}}> Summary Preview</h1>
      <p style={{color:props.mode===`light`?`#212529`:`white`}} >{text}</p>
    </div>
    </>
  )
}
TextForm.prototype = {
  heading: PropTypes.string,
  mode:PropTypes.string.isRequired,
}