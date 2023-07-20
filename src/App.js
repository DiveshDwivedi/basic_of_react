import './App.css';
import { Users } from './User';
import { users} from './User_new';

import { useState } from 'react';
 
function App() {
  // Day - 3 Use State Hook

  // it not updating so
  // let age = 0;

  // useState is a kind of function we can say
  // age is variable and setAge is function use to change age value
  const [age, setAge] = useState(0); // passing initial value incase age it's 0
  const increaseAge = () => {
    // age = age+1;
    setAge(age+1)
  }

  return (
    <div className="App">

      {age}
      <button onClick={increaseAge}>click here</button>
    </div>
  )


  // Basic React Concept 

  // const users = [
  //   {name: 'raj', age:18},
  //   {name: 'karan', age:20},
  //   {name: 'peter', age:19},
  //   {name: 'joe', age:28},
  // ]
// console.log(users);.
/*
  return (
    <div className="App">
      {users.map((user, key) => 
        // instead of doing this we can use components
        (user.age <= 18) && <h1 key={key}>{user.name}</h1>
       

        // return <Users name={user.name} age={user.age}/>
      )}
    </div>
  );

  */
  /*
  const names = ["raj", "karan", 'peter', 'mark', 'joe', 'ram'];
  return (
    <div className="App">
      {names.map((name,key) => {
        return <h1 key={key}>{name}</h1>
      })}
    </div>
  )
*/

  /*
  const age = 19;
  const isGreen = true;
  return (
    <div className="App">
      {age > 18 ? <h1> Over age</h1> : <h1> Under Age</h1>}
      <h1 style={{ color: isGreen ? "blue" : "yellow" }}>Welcome to learning React</h1>

      {isGreen && <button> This is button </button>}
    </div>
  )
   */
  
  /*
  const name = "Divesh";
  const email = <h2>dwivedidivesh21@gmail.com</h2>
  const name1 = <h1>Divesh Dwivedi</h1>;
  return (
    <div className="App">
      <User name="Divesh" email="dwivedidivesh21@gmail.com"/>
      <User name="Dwivedi" email="divesh21@gmail.com"/>
      <User name="Divesh" email="dwivedidivesh21@gmail.com"/>
      <Job company_name="mobtexting" email="dwivedidivesh21@gmail.com" destination="SDE1"/>
      <Job company_name="mobtexting" email="divesh21@gmail.com" destination="SDE1"/>
      <Job company_name="mobtexting" email="dwivedidivesh21@gmail.com" destination="SDE1"/>
    </div>
  );
  */
}

// js function 
const getName = () => {
  return "Divesh"
}

/**
 * js component always start with uppercase
 * @returns always UI stuff
 */
const GetNameComponent = () => {
  return <h1>Divesh </h1>
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.email}</h2>
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.email}</h2>
      <h2>{props.destination}</h2>
    </div>
  );
}

// const Users = (props) => {
//   return (
//     <h1>
//       {props.name} {props.age}
//     </h1>
//   );
// }

export default App;
