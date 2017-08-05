// action constants
const OPEN_PO_MODAL = 'OPEN_PO_MODAL';
const CLOSE_PO_MODAL = 'CLOSE_PO_MODAL';

// action creators
export const openModal = () => ({
  type: OPEN_PO_MODAL
});

export const closeModal = () => ({
  type: CLOSE_PO_MODAL
});

// reducer
const purchaseOrderReducer = (state = false, action) => {
  switch (action.type) {
    case OPEN_PO_MODAL:
      return true;
    case CLOSE_PO_MODAL:
      return false;
    default:
      return state
  }
}

export default purchaseOrderReducer;
