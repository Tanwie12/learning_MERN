import React, { useState } from 'react';
import Todologic from './Todologic';
import '../App.css';
import axios from 'axios';
import { Button } from '@material-tailwind/react';

export default function Todo() {
    const url = 'http://localhost:3001/todo';
  const [inputValue, setInputValue] = useState('');
  const [newData, setNewData] = useState([]);
 let data
  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };
// adding data
  const addHandler = () => {
     data= {
        name: inputValue,
        key: Math.random().toString(),
      }
    setNewData((prevData) => [
      ...prevData,
      data,
    ]);
    setInputValue(''); // Clear the input field
    server(data) ;
  };





  // deleteing data

  const deletehandler = (key) => { 
    setNewData((prev)=>{
        return([...prev.filter(newData=>newData.key !==  key)])
    })
   
    deletedata(key);
  }





  // upadating the data
  const updatehandler = (key, updatedName) => {
  
    setNewData((prev) => {
        return (prev.map((item) => {
          if (item.key === key) {
            // Update the name property with the new value
            return {
              ...item,
              name: updatedName,
            };
          }
          return item;
        }));
      });

    };

    
// server functionalities

//finding data
const findHandler =async (second) => { 
    getdata();
 }
//adding data
const server = async(data) => {
    const response=await axios.post(`${url}/post`,data)
    console.log(response.data);
}
// deleteing data
const deletedata = async(key) => {
    console.log(key);
    const response=await axios.delete(`${url}/delete/${key}`)
    console.log(response.data);
}
//getting data

const getdata=async()=>{
    const res=await axios.get(`${url}/find`)
  setNewData(res.data)
        
    
}
// update data





  return (
    <> 

      {/* stylesheet */}
      <link rel="stylesheet" href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css" />

      {/* section */}
      <div>
        <div className="flex flex-col justify-center items-center h-[100vh]">
          <div className="relative flex max-w-[500px] h-[430px] w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="flex h-fit w-full items-center justify-between rounded-t-2xl bg-white px-4 pb-[20px] pt-4 shadow-2xl shadow-gray-100 dark:!bg-navy-700 dark:shadow-none">
            
              <div className="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
                <button
                  className="!absolute right-1 top-1 z-10 select-none rounded bg-pink-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                  type="button"
                  data-ripple-light="true"
                  onClick={addHandler}
                  
                >
                  Add
                </button>
                
                <input
                  type="text"
                  value={inputValue}
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  required=""
                  onChange={changeHandler}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      addHandler();
                    }
                  }}

                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  enter task
                </label>
              </div>
            </div>
            <div className="w-full overflow-x-scroll px-4 md:overflow-x-hidden">
              <table role="table" className="w-full min-w-[500px] overflow-x-scroll">
                <thead>
                  <tr role="row">
                    <th colSpan={1} role="columnheader" title="Toggle SortBy" style={{ cursor: "pointer" }}>
                      <div className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs">
                        task
                      </div>
                    </th>
                   
                  </tr>
                </thead>
                <tbody className="px-4">
              {
                newData.map((item)=>{
               return(<Todologic newData={item}  key={item.key} deletehandler={deletehandler} updatehandler={updatehandler} />)
                    
                })
              }
                
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4">
          <Button className='' variant="gradient" onClick={findHandler}>
                findAll
            </Button>
            <Button variant="outlined" className="flex items-center gap-3">
       See completed task
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </Button>
            </div>
        </div>
      </div>
    </>
  );
}
