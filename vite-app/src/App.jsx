import './App.css'
import { useEffect, useState } from "react";
import FunComp from './Components/FuncComp'
import StaticList from './Components/StaticList'
import DynamicList from './Components/DynamicList';
import Controlled from './Components/Controlled';
import Uncontrolled from './Components/Uncontrolled';
import DynamicComp from './Components/Dynamic';
import HOCComp from './Components/HOC';
// import Counter from './Components/useCallback/Counter';
import CompA from './Components/useContex/CompA';
import Counter from './Components/useReducer/Counter';


const HOCCom = HOCComp(DynamicComp)

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [list, setList] = useState(['Home','Blog', 'Product', 'About', 'Service', 'Contact'])
  // useEffect(()=> {
  //   setTimeout(()=> {
  //     setIsLoading(false)
  //   }, 3000)
  // })
  return (
    <>
        {/* <FunComp name='hello wolrd' age={15} /> */}
        {/* <StaticList list={list} />
        <DynamicList list={list} /> */}
        {/* <Controlled />
        <Uncontrolled /> */}
        {/* <DynamicComp /> */}
        {/* <HOCCom isLoading={isLoading} /> */}
        {/* <Counter /> */}
        {/* <CompA /> */}
        <Counter />
    </>
  )
}

export default App;
