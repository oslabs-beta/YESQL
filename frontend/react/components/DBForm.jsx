import React from "react";
const DBForm = () => {
    return ( 
        <form action="/connect" method="POST"> 
          <label htmlFor="user">USER</label> 
          <input type="text" name="user" id="user"></input>
          <label htmlFor="host">Host</label> 
          <input type="text" name="host" id="host"></input> 
          <label htmlFor="database">database</label> 
          <input type="text" name="database" id="database"></input> 
          <label htmlFor="port">port</label> 
          <input type="text" name="port" id="port"></input> 
          <button type="submit" value ="submit">Submit</button>
        </form>
     );
}
 
export default DBForm;