// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from 'prop-types'

const About = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };
  const [myStyle,setMyStyle]=useState({
        backgroundColor: 'white',
        color:'black'
  })
  const [btntext, setBtnText]= useState("Enable Dark Mode")
   const enableStyle=()=>{
    if(myStyle.color == "black"){
        setMyStyle({
        backgroundColor:"black",
        color:'white',})
    setBtnText("Enable Light Mode")
    }
    else{
        setMyStyle({
             backgroundColor: 'white',
        color:'black'
        })
        setBtnText("Enable Dark Mode")
    }
  }

  return (
    <>
    <div className="mx-48 my-10">
    <h1 className="mx-3 my-2 text-3xl font-semibold" style={{color:props.mode===`light`?`white`:`#212529`}}>About Us</h1>
    <div id="accordionExample" className="space-y-4">
      <div className="border border-gray-200 rounded-lg">
        <h2 className="mb-0">
          <button
            type="button"
            className="flex items-center justify-between w-full p-4 font-medium text-left text-gray-900 bg-white border-b border-gray-200 rounded-t-lg focus:outline-none focus:ring focus:ring-opacity-50"
            onClick={() => toggleAccordion(0)}
            aria-expanded={activeIndex === 0}
            aria-controls="collapseOne" style={myStyle}
          >
            Accordion Item #1
            <svg
              className={`w-4 h-4 ml-2 transform ${
                activeIndex === 0 ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="collapseOne"
          className={`${activeIndex === 0 ? "block" : "hidden"}`}
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="p-4 border-t border-gray-200" style={myStyle}>
            <strong>This is the first items accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. Its also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg">
        <h2 className="mb-0">
          <button style={myStyle}
            type="button"
            className="flex items-center justify-between w-full p-4 font-medium text-left text-gray-900 bg-white border-b border-gray-200 rounded-t-lg focus:outline-none focus:ring focus:ring-opacity-50"
            onClick={() => toggleAccordion(1)}
            aria-expanded={activeIndex === 1}
            aria-controls="collapseTwo"
          >
            Accordion Item #2
            <svg
              className={`w-4 h-4 ml-2 transform ${
                activeIndex === 1 ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="collapseTwo"
          className={`${activeIndex === 1 ? "block" : "hidden"}`}
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="p-4 border-t border-gray-200" style={myStyle}>
            <strong>This is the second items accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. Its also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg">
        <h2 className="mb-0">
          <button style={myStyle}
            type="button"
            className="flex items-center justify-between w-full p-4 font-medium text-left text-gray-900 bg-white border-b border-gray-200 rounded-t-lg focus:outline-none focus:ring focus:ring-opacity-50"
            onClick={() => toggleAccordion(2)}
            aria-expanded={activeIndex === 2}
            aria-controls="collapseThree"
          >
            Accordion Item #3
            <svg
              className={`w-4 h-4 ml-2 transform ${
                activeIndex === 2 ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="collapseThree"
          className={`${activeIndex === 2 ? "block" : "hidden"}`}
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="p-4 border-t border-gray-200" style={myStyle}>
            <strong>This is the third items accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. Its also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div>
      <button  className=" mx-1 py-2 border border-transparent rounded text-white bg-[#1D764E] focus:outline-none focus:ring-2 active:ring-blue-500 focus:ring-offset-2" onClick={enableStyle}>
        {btntext}
      </button></div>
    </div>
    </div>
    </>
  );
};
About.propTypes={
  mode:PropTypes.string
}

export default About;
