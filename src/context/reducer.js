const reducer = (state, action) => {
  switch (action.type) {
    case 'DISPLAY_ALERT':
      return {
        ...state,
        showAlert: true,
        alertType: 'danger',
        alertText: 'Please provide all values',
      };

    case 'CLEAR_ALERT':
      return {
        ...state,
        showAlert: false,
        alertType: '',
        alertText: '',
      };

    case 'GET_ORDERS_BEGIN':
      return {
        ...state,
        isLoading: true,
      };

    case 'GET_ORDERS_SUCCESS':
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: 'Your request successfully sent',
        orders: action.payload.orders,
      };

    case 'GET_ORDERS_ERROR':
      return {
        ...state,
        isLoading: false,
        alertType: 'danger',
        alertText: 'Something wrong',
      };
    case 'CREATE_ORDER_BEGIN':
      return {
        ...state,
        isLoading: true,
      };

    case 'CREATE_ORDER_SUCCESS':
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: 'Your request successfully sent',
        orders: action.payload,
      };

    case 'CREATE_ORDER_ERROR':
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        alertType: 'danger',
        alertText: 'Something wrong',
      };
    default:
      new Error(`no such action :${action.type}`);
  }
};

export default reducer;
