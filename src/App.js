import './App.css';
import Player from './components/Player';
import A from './components/PracProps/A';
import { TodoList } from './components/TodoList';
import ListPrac from './components/ListPrac';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/RoutingExample/Layout';
import Home from './components/RoutingExample/Home';
import About from './components/RoutingExample/About';
import Contact from './components/RoutingExample/Contact';
import HookPrac from './components/HooksPrac/HookPrac';
import AddEmp from './components/RoutingExample/AddEmp';
import ReducerHook from './components/HooksPrac/ReducerHook';
import HandleForm from './components/HandleForm';
import ParentC from './components/useCallback/ParentC';
function App() {
  return (
    <div className="text-center">
      {/* <TodoList /> */}
      {/* <A /> */}
      {/* <Player /> */}
      {/* <ListPrac name="kishor">
          <h1>Vaibhavi bodke</h1>
      </ListPrac> */}

      <BrowserRouter>
      <Layout />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/hooks' element={<HookPrac />} />
        <Route path='/add-emp' element={<AddEmp />} />
        <Route path='/reducer' element={<ReducerHook />} />
        <Route path='/handle-form' element={<HandleForm />} />
        <Route path='/usecallback' element={<ParentC />} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
