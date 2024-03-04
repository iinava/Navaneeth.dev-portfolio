import React from 'react'

export default function Title({text,className}:{text:string,className?:string}) {
  return (
    <div className={className}> <div>
    <h1 className="text-3xl font-bold group-hover:text-green-500 ">
      {text}
    </h1>
    <div className="w-50 h-2 bg-green-500 rounded-full "></div>
    <div className="w-50 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
  </div></div>
  )
}