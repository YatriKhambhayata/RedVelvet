import { useState } from 'react';
import './App.css';
import Login from './Pages/Login/Login';
import firebase from 'firebase';

function App() {
  const [isAdmin, setisAdmin] = useState(false);


  firebase.auth().onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      return setisAdmin(true);
    } else {
      return setisAdmin(false);
    }
  });
  return (
    <div className="App">
      <Login isAdmin={isAdmin} setisAdmin={setisAdmin}/>
    </div>
  );
}

export default App;
