import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
            {text}
        </p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Kiziltan</span> 👋
            <br/>
            A Software Developer from Turkiye
        </h1>
    ),
    2: (
        <InfoBox 
        text="Curious About the Code Behind the Developer?"
        link="/about"
        btnText="Learn More"
        />
    ),
    3: (
        <InfoBox 
        text="Want a Peek at My Coding Adventures?"
        link="/projects"
        btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox 
        text="Thinking of Teaming Up for a Project?"
        link="/contact"
        btnText="Let's talk"
        />
    )
}



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo