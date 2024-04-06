import React from "react";
import { useState } from "react";
import DBFlow from "../components/DBFlow.jsx";
import ReactModal from 'react-modal';
import DBQuery from "../components/DBQuery.jsx";
import { redirect } from "react-router-dom";
import DBForm from "../components/DBForm";
import { useSelector, useDispatch } from 'react-redux';
import { useConnectMutation } from '../../apiSlice.js';

const DBFlowContainer = () => {
    // const count = useSelector((state) => state.database.value);
    // const dispatch = useDispatch();
    
    //useState function  for the modal being open:
  const [modalIsOpen, setIsOpen] = useState(false);
  // function to open the modal
  const openModal = () => {
      setIsOpen(true);
    }
    
    // Using a query hook automatically fetches data and returns query values
  const [postConnect, { data, error, isLoading, isSuccess }] = useConnectMutation({
    fixedCacheKey: 'databaseSchema',
  });
// conditional rendering:
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error:{error}</div>
  }
  // if query is status: success, render components, pass data on props down to DBFlow 
  if (isSuccess && data) {
    return (     
        <div className="chart-page-container">
          <DBQuery />
           {/* button to open modal: */}
          <button className='button' onClick={openModal}>join</button>
          <ReactModal isOpen={modalIsOpen} shouldCloseOnEsc={true}>
            <div>this is our join modal</div>
          </ReactModal>
          <DBFlow data={data} />
        </div>
    )      
  };
}
export default DBFlowContainer;