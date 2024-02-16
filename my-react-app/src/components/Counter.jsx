// Counter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, incrementAsync } from '../state/Store'
import { Button } from '@material-tailwind/react';
import { Link,Outlet } from 'react-router-dom';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state)=>state.counter.value+2);

  return (
    <div>
      <div>Count: {count}</div>
      <Button onClick={()=>dispatch(increment())}>
        increment
      </Button>
      <Button onClick={()=>dispatch(decrement())}>
        decrement
      </Button>
      <Button onClick={()=>dispatch(incrementAsync(10))}>
       incrementByAmount
      </Button>
      <Button>
        <Link to={'/todo'}> todo</Link>
      </Button>
  
        <Link to={'/'}>
          <Button>login</Button>
           </Link>
           <Link to={'/post'}>
          <Button>Post</Button>
           </Link>
     
      
      <Outlet />
    </div>
  );
};

export default Counter;
