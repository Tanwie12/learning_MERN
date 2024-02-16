import {
    Card,
    Input,
    
    Button,
    Typography,
  } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
   
  export function FormDialog( {updatehandler, newData}) {
    const url = 'http://localhost:3001/todo';
    const[newDataa,setdata]=useState('')
    const changeHandler = (e) => { 
        setdata(e.target.value)
     }
const clickhandler = (e) => { 
   
    updatehandler(newData.key,newDataa)
 }
const submitHandler = (e) => { 
    e.preventDefault();

    updateData();
 }
 //  posting data

const updateData = async() => {
    const response=await axios.put(`${url}/update`,newData)
    console.log(response.data);
}

    return (
       <Card color="transparent" shadow={false}>
        
        <Typography color="gray" className="mt-1 font-normal">
          Enter upadated task
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={submitHandler}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Enter task
            </Typography>
            <Input
            onChange={changeHandler}
            value={newDataa}
              size="lg"
              placeholder="task"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            
            
            
          </div>
         
          <Button  type='submit'className="mt-6" fullWidth onClick={clickhandler}>
           UPDATE
          </Button>
         
        </form>
      </Card>
    );
  }