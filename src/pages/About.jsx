import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills, experiences } from '../constants'
import CTA from '../Components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Kiziltan</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I am a Software Developer based in Turkey. My professional journey began in the construction industry as a Hydrogeological Engineer, where I worked for 8 years, climbing up to a position equivalent to country management. However, my growing interest in software development in 2020 led me down a different path. After discovering this new passion, I made a radical career shift in 2022, fully transitioning to the software sector.

          During this transition, I acquired various certifications from 2020 to the end of 2022. Then, in March 2023, I furthered my software skills by enrolling in and successfully completing the BilgeAdam Boost program. Currently, I am doing an internship within BilgeAdam, continuing my technical education through hands-on learning and application development.

          My passion for software development, combined with my technical knowledge and diverse sector experience, aims to deliver innovative and effective solutions. My past experiences have endowed me with the ability to overcome challenges and manage projects successfully. Now, I am applying these skills to new and exciting projects in the world of software.
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <p>
        With a diverse background in both the construction and technology sectors, I bring a unique blend of skills and experiences to my professional endeavors. My career journey has taken me from managing complex construction projects to developing software applications, allowing me to cultivate a broad skill set that includes project management, team leadership, technical proficiency, and problem-solving.
        </p>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>}
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none'
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default About