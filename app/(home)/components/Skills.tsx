"use client";
import React, { use } from 'react'
import Title from './Title'
import { HoverEffect } from './ui/CardsHoverEffect'
import { SiPreact } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiRedux } from "react-icons/si";

export default function Skills() {

  const skills=[
    {
      text:"React",
      icon:SiPreact 

    },
    {
      text:"Django",
      icon: SiDjango

    },
    {
      text:"Mysql",
      icon:SiMysql 


    },
    {
      text:"Tailwind",
      icon:SiTailwindcss 


    },
    {
      text:"Redux",
      icon:SiRedux 

    },
    {
      text:"Express",
      icon:SiExpress 

    },
    {
      text:"Node js",
      icon:SiNodedotjs 

    },
    // {
    //   text:"HTML",
    //   icon:SiHtml5 

    // },
    {
      text:"Python",
      icon:SiPython 

    },
    // {
    //   text:"Js",
    //   icon:SiJavascript 

    // },
    {
      text:"Mongo DB",
      icon:SiMongodb 

    },
 
  ]
  return (
    <div className='max-w-5xl  mx-auto px-8'>
         <Title text="Skills 🔨" className='flex flex-col items-center justify-center -rotate-6'/>
   
   <HoverEffect items={skills}/>
    </div>
  )
}
