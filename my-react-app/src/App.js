import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './components/Counter';
import Login from './components/Login';
import Todo from './components/Todo';
import Postlist from './features/Postlist';
import Addform from './features/Addform';
import Singlepost from './features/Singlepost';
import Updatepost from './features/Updatepost';

/**
 * Renders the main application component.
 *
 * @return {JSX.Element} The JSX element representing the main application component.
 */
function App() {
  return (
    <Router>
      <Routes>
    <Route path="/" element={<Counter />}>
      <Route index element={<Login />} />
      <Route path="todo" element={<Todo />} />
      
      <Route
          
            path="post" element={
            
              <React.Fragment>
                <Addform />
                <Postlist />
              </React.Fragment>
          }
          >
                <Route path='/post:postId' element={<Singlepost/>} />
          </Route>
          <Route path='/editpost/:postId' element={<Updatepost/>} />
          
    </Route>
{/* check for any errows */}

  </Routes>
    </Router>
  );
}

export default App;
