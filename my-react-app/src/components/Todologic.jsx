import React from 'react';
import { Checkbox } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { DialogButton } from './Dialog';

export default function Todologic({ newData, deletehandler,updatehandler }) {
    
  // Check if newData is undefined or null
  console.log(newData)
  if (!newData) {
    return null;
     // Or any other fallback UI you want to render when newData is undefined
  }
  

  return (
    <>
      <link
  rel="stylesheet"
  href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
/>
  <tr role="row">
  
    <td className="py-3 text-sm" role="cell">

      <div className="flex items-center gap-2">
        <div>
        <Checkbox color="green" defaultChecked />
        </div>
        <div className="h-[30px] w-[30px] rounded-full">
          <img
            src="https://source.unsplash.com/featured/300x29"
            className="h-full w-full rounded-full"
            alt=""
          />
        </div>
        <p className="text-sm font-medium text-navy-700 dark:text-white">
          {newData.name}
        </p>
      </div>
    </td>
    <td className="py-3 text-sm" role="cell">
         <DialogButton  updatehandler={updatehandler} newData={newData}/>

      {/* <TaskButton label="Update" color="green"  /> */}
    </td>
    <td className="py-3 text-sm" role="cell">
      <TaskButton label="Delete" color="pink" deletehandler={()=>deletehandler(newData.key)} />

    </td>
  </tr>


    </>
  );
}

// Reusable TaskButton component
const TaskButton = ({ label, color,deletehandler}) => (
  
  <button
    className={`right-1 top-1 z-10 select-none rounded bg-${color}-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-${color}-500/20 transition-all hover:shadow-lg hover:shadow-${color}-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none`}
    type="button"
    data-ripple-light="true"
    onClick={deletehandler}
  >
    {label} task
  </button>
);
