
import { useState } from 'react';
import './App.css';
import Login from './components/login/Login';
import Alert from './components/alert/Alert';

function App() {

  const [message, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState('')

  const validLogin = (user) => {
    console.log('user', user);
    const validEmail="nicolsandovalu@gmail.com"
    const validPassword="123456"

    if (user.email == validEmail && user.password == validPassword) {
      setAlertMessage('Inició sesión correctamente')
      setAlertType('success')

    } else {
      setAlertMessage('Datos incorrectos')
      setAlertType('danger')
    }
  }

  return (
    <div className='container'>
      <Login onSubmit = {validLogin}/>
      <Alert message = {message} alertType = {alertType}/>
    </div>
  );
}

export default App;

