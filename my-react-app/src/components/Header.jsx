import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Header({ mike }) {
  let data;
  const url = 'http://localhost:3001';
  let forminfo;
  const [meals, setMeals] = useState([]);
  const [now, setNow] = useState({name:''});

  const getdata = async() => {
  const res= await  axios.get(`${url}/things/mike`)
     setNow(res.data)
  };

  // useEffect(() => {
  //   sendData();
  // }, []);
  
  // forminfo = {
  //   name: 'adey',
  //   age: 19,
  // };

  // const sendData = async () => {
    
  //     const response = await axios.post(`${url}/mike`, forminfo);
  //     setNow(response.data);
   
  // };

  return (
    <div>
      <input
        type="text"
        value={now.name}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="John"
        required
        onChange={(e) => setNow(  e.target.value )}
      />

      <button
        onClick={getdata}
        className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
      >
        adey
      </button>
    </div>
  );
}

export default Header;
