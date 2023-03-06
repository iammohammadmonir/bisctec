import React, { useReducer, useContext } from 'react';
import reducer from './reducer';

import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  CREATE_ORDER_BEGIN,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_ERROR,
  GET_ORDERS_BEGIN,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_ERROR,
} from './actions';

import axios from 'axios';

const initialState = {
  isLoading: false,
  isError: false,
  showAlert: false,
  orders: [],
  alertText: '',
  alertType: '',
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 500);
  };

  const fetchOrders = async () => {
    dispatch({ type: GET_ORDERS_BEGIN });
    try {
      const response = await axios.get(
        'https://bisctec.onrender.com/api/v1/order'
      );
      const orders = response.data;
      dispatch({ type: GET_ORDERS_SUCCESS, payload: orders });
    } catch (error) {
      dispatch({ type: GET_ORDERS_ERROR });
    }
  };

  const createOrder = async (orderData) => {
    dispatch({ type: CREATE_ORDER_BEGIN });
    try {
      const response = await axios.post(
        'https://bisctec.onrender.com/api/v1/order',
        orderData
      );
      const order = response.data;
      dispatch({
        type: CREATE_ORDER_SUCCESS,
        payload: order,
      });
      window.location.reload();
    } catch (error) {
      dispatch({
        type: CREATE_ORDER_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        createOrder,
        fetchOrders,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
