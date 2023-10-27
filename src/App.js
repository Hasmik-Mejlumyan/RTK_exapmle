import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {userInfoActions} from "./Store/userInfo/userInfo.action";

function App() {
  const {user, list} = useSelector(state => state.userInfo);

  const dispatch = useDispatch();

  console.log(list, 'list')
  const handleChange = (e) => {
    dispatch(userInfoActions.addInfo(e.target.value))
  }

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(userInfoActions.getInfo())
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>click me to get data</button>
        <input onChange={handleChange} />
        <p>Value is: {user.name}</p>
        {list?.length && (
            list.map((elem, index) => (
                <p key={index}>
                  Value is : {elem.name}
                </p>
            ))
        )}
      </header>
    </div>
  );
}

export default App;
