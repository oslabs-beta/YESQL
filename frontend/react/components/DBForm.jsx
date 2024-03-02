import React from "react";
const DBForm = () => {
    return ( 
        <form action='/credentials' method="POST"> 
          <label for="user">USER</label> 
          <input type="text" id="user"></input>
          <label for="host">Host</label> 
          <input type="text" id="host"></input> 
          <label for="database">database</label> 
          <input type="text" id="database"></input> 
          <label for="port">port</label> 
          <input type="text" id="port"></input> 
          <input type = "submit" value = "submit"></input>
        </form>
     );
}
 
export default DBForm;