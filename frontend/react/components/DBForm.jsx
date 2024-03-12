import React from "react";
import { useNavigate } from 'react-router-dom';

const DBForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();

      const formData = {
        user: event.target.elements.user.value,
        host: event.target.elements.host.value,
        database: event.target.elements.database.value,
        port: event.target.elements.port.value,
      }
      
      fetch('/connect', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: formData.user, 
          host: formData.host, 
          database: formData.database, 
          port: formData.port
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('we got something back!', data)
      })
      .catch(error => console.log('we have an error', error));

      navigate('/chart');
    }
    return ( 
        <form onSubmit={handleSubmit}> 
          <h2>Database Credentials</h2>
          <label htmlFor="user">USER</label> 
          <input type="text" name="user" id="user"></input>
          <label htmlFor="host">Host</label> 
          <input type="text" name="host" id="host"></input> 
          <label htmlFor="database">database</label> 
          <input type="text" name="database" id="database"></input> 
          <label htmlFor="port">port</label> 
          <input type="text" name="port" id="port"></input> 
        <button type="submit" className="button" value="submit">Submit</button>
        </form>
     );
}
 
export default DBForm;