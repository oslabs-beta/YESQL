import React from 'react';
import {useState} from 'react';
import DBFlow from '../components/DBFlow.jsx';
import ReactModal from 'react-modal';
import DBQuery from '../components/DBQuery.jsx';
import {redirect} from 'react-router-dom';
import DBForm from '../components/DBForm';
import {useSelector, useDispatch} from 'react-redux';
import {useConnectMutation} from '../../apiSlice.js';
import JoinModal from '../components/JoinModal.jsx';
import OnColumnsModal from '../components/OnColumnsModal.jsx';
import {Overlay} from 'react-bootstrap';
import {Position} from 'reactflow';

const DBFlowContainer = () => {
  // const count = useSelector((state) => state.database.value);
  // const dispatch = useDispatch();
  const [modalOpen, setOpen] = useState(false);
  function closeModal() {
    setOpen(false);
  };
  // subscribing to state to check if state is updated (i.e. if openModal has been changed)
  const modalIsOpen = useSelector((state) => state.queryReducer.isModalOpen);
  // console.log('have we made it past our openModal subscription??? It should be', modalIsOpen);
  // subscribe to state to see which modal should render
  const isOnColumnsModalOpen = useSelector((state) => state.queryReducer.isColumnModalOpen);
  // Using a query hook automatically fetches data and returns query values

  // Do we actually need useConnectMutation here??
  const [postConnect, {data, error, isLoading, isSuccess}] = useConnectMutation({
    fixedCacheKey: 'databaseSchema',
  });
  // conditional rendering:
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error:{error}</div>;
  }
  // if query is status: success, render components, pass data on props down to DBFlow
  if (isSuccess && data) {
    console.log('Data => ', data);
    return (
      <div className="chart-page-container">
        <DBQuery />
        <ReactModal isOpen={modalIsOpen} shouldCloseOnEsc={true} className='overlay' onRequestClose={closeModal} >
          { isOnColumnsModalOpen && <OnColumnsModal />}
          { !isOnColumnsModalOpen && <JoinModal />}
        </ReactModal>
        <DBFlow data={data} />
      </div>
    );
  };
};
export default DBFlowContainer;
