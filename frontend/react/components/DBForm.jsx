import React from "react";
import { useNavigate } from 'react-router-dom';
import { useConnectMutation } from '../../apiSlice';

const DBForm = () => {
    const navigate = useNavigate();
    const [postConnect, {isLoading, isError}] = useConnectMutation({
      fixedCacheKey: 'databaseSchema',
    });

  const handleSubmit = async (event) => {
      event.preventDefault();
      // capture user's input credentials in an object to send in post request to connect to user's db:
      const formData = {
        user: event.target.elements.user.value,
        host: event.target.elements.host.value,
        database: event.target.elements.database.value,
        port: event.target.elements.port.value,
      }
      try {
        //sending user credentials in a post request; 
        const {data} = await postConnect(formData);
        console.log('we got something back!', data);
        //we navigate to /chart (dbFlow container) only once we confirm our post request with the user credentials was successful
        navigate('/chart');
      } catch (error) {
        console.error('we have an error', error);
      }
    }
    return ( 
        <form onSubmit={handleSubmit}> 
          <h3>Connect to Database</h3>
          <label htmlFor="user">User</label> 
          <input type="text" name="user" id="user"></input>
          <label htmlFor="host">Host</label> 
          <input type="text" name="host" id="host"></input> 
          <label htmlFor="database">Database</label> 
          <input type="text" name="database" id="database"></input> 
          <label htmlFor="port">Port</label> 
          <input type="text" name="port" id="port"></input> 
        <button type="submit" className="button" value="submit">Submit</button>
        {isError && <div>Error submitting form</div>}
        </form>
     );
}
 
export default DBForm;