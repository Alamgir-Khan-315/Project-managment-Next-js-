"use client"
import React, { useState } from 'react'

const Work_2 = (prop) => {
  const [workHeader, setworkHeader] = useState(1)
  const items1 = [
    { text: "Operationize goals", className: "text-title mt-[2rem]" },
    { text: "Connect work to company goals", className: "ml-[1rem] mt-[1rem]" },
    { text: "Automate workflows across departments", className: "ml-[1rem] mt-[1rem]" },
    { text: "Report on progress and address bottlenecks", className: "ml-[1rem] mt-[1rem]" }
  ];
  const items2 = [
    { text: "Meet campaign goals", className: "text-title mt-[2rem]" },
    { text: "Streamline campaign management", className: "ml-[1rem] mt-[1rem]" },
    { text: "Enhance creative production", className: "ml-[1rem] mt-[1rem]" },
    { text: "Manage events and editorial calendars", className: "ml-[1rem] mt-[1rem]" }
  ];
  const items3 = [
    { text: "Drive operational efficiency", className: "text-title mt-[2rem]" },
    { text: "Track work and see progress in real time", className: "ml-[1rem] mt-[1rem]" },
    { text: "Standardize and automate processes", className: "ml-[1rem] mt-[1rem]" },
    { text: "Unblock teams to hit revenue goals", className: "ml-[1rem] mt-[1rem]" }
  ];
  const items4 = [
    { text: "Prioritize and streamline IT requests", className: "text-title mt-[2rem]" },
    { text: "Prioritize and streamline IT requests", className: "ml-[1rem] mt-[1rem]" },
    { text: "Automate and scale your workflows", className: "ml-[1rem] mt-[1rem]" },
    { text: "Onboard and offboard employees", className: "ml-[1rem] mt-[1rem]" }
  ];
  const items5 = [
    { text: "Launch better products faster", className: "text-title mt-[2rem]" },
    { text: "Keep product development on track", className: "ml-[1rem] mt-[1rem]" },
    { text: "Centralize launch information", className: "ml-[1rem] mt-[1rem]" },
    { text: "Tie your product roadmap to your strategy", className: "ml-[1rem] mt-[1rem]" }
  ];

  return (
    <div className='px-4   m-[5rem] lg:lrg mx-auto'>
      <h1 className='text-title mt-[3rem] 2xl:ml-[10%]'>See how {prop.Title} connects work <br /> across different departments</h1>
      <div className="box mt-[3rem] container mx-auto border border-gray-200 rounded-lg p-2">
        <div className="haeder flex items-center gap-2 md:gap-10 mt-[1rem] md:pl-[1rem]">
          {workHeader === 1 ?
            <div className="workHeader-active" onClick={() => setworkHeader(1)}>Company-wide</div>
            :
            <div className="workHeader-inactive" onClick={() => setworkHeader(1)}>Company-wide</div>
          }
          {workHeader === 2 ?
            <div className="workHeader-active" onClick={() => setworkHeader(2)}>Market</div>
            :
            <div className="workHeader-inactive" onClick={() => setworkHeader(2)}>Market</div>
          }
          {workHeader === 3 ?
            <div className="workHeader-active" onClick={() => setworkHeader(3)}>Operation</div>
            :
            <div className="workHeader-inactive" onClick={() => setworkHeader(3)}>Operation</div>
          }
          {workHeader === 4 ?
            <div className="workHeader-active" onClick={() => setworkHeader(4)}>IT</div>
            :
            <div className="workHeader-inactive" onClick={() => setworkHeader(4)}>IT</div>
          }
          {workHeader === 5 ?
            <div className="workHeader-active" onClick={() => setworkHeader(5)}>Product</div>
            :
            <div className="workHeader-inactive" onClick={() => setworkHeader(5)}>Product</div>
          }

        </div>

        {workHeader === 1 &&
          items1.map((d, i) => (
            <h1 key={i} className={d.className}>{d.text}</h1>
          ))
        }
        {workHeader === 2 &&
          items2.map((d, i) => (
            <h1 key={i} className={d.className}>{d.text}</h1>
          ))
        }
        {workHeader === 3 &&
          items3.map((d, i) => (
            <h1 key={i} className={d.className}>{d.text}</h1>
          ))
        }
        {workHeader === 4 &&
          items4.map((d, i) => (
            <h1 key={i} className={d.className}>{d.text}</h1>
          ))
        }
        {workHeader === 5 &&
          items5.map((d, i) => (
            <h1 key={i} className={d.className}>{d.text}</h1>
          ))
        }

        <div className="btn-gray w-fit mt-[2rem] mb-[2rem] ml-[1rem]">Explore</div>
      </div>
    </div>
  )
}

export default Work_2
