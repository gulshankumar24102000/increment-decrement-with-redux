import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {incrementNumber,decrementNumber } from './actions/index';

const App = () =>{
  const changeNumber=useSelector((state)=>state.changeNumber);
  const dispatch=useDispatch();
  return (
    <>
    <div className="main-div">
      

      <div className="container">
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div className="quantity">
        <a className="quantity__minus"  title="Decrement" onClick={ ()=>dispatch(decrementNumber())} ><span>-</span></a>
        <input name="quantity" type="text" className="quantity__input" value={changeNumber} />
        <a className="quantity__plus"  title="Increment" onClick={ ()=>dispatch(incrementNumber(5))}><span>+</span></a>
      </div>
  
          </div>
        </div>
        </>
  );
}

export default App;
