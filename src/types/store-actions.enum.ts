export enum StateReducerActions {
  SET_GET_STARTED = "SET_GET_STARTED",
  SET_PASSWORD = "SET_PASSWORD",
  SET_KYC = "SET_KYC",
  SET_COMPANY_NUMBER = "SET_COMPANY_NUMBER",
  UPDATE_FILE_LIST = "UPDATE_FILE_LIST",
  SET_LOGIN_DETAILS = "SET_LOGIN_DETAILS",
  SET_USER_ID = "SET_USER_ID",
  SET_USER = "SET_USER",
  SET_BOOKING_DETAILS = "SET_BOOKING_DETAILS",
  SET_INVENTORY_ITEMS = "SET_INVENTORY_ITEMS",
  CLEAR_INVENTORY_ITEMS = "CLEAR_INVENTORY_ITEMS",
  ADD_SINGLE_INVENTORY_ITEM_TO_VAN = "ADD_SELECTED_INVENTORY_ITEM_TO_VAN",
  ADD_MULTIPLE_INVENTORY_ITEM_TO_VAN = "ADD_MULTIPLE_INVENTORY_ITEM_TO_VAN",
  UPDATE_SELECTED_INVENTORY_ITEM_IN_VAN = "UPDATE_SELECTED_INVENTORY_ITEM_IN_VAN",
  UPDATE_SELECTED_INVENTORY_ITEMS_TO_ORDER = "UPDATE_SELECTED_INVENTORY_ITEMS_TO_ORDER",
  REMOVE_SELECTED_INVENTORY_ITEMS_FROM_VAN = "REMOVE_SELECTED_INVENTORY_ITEMS_FROM_VAN",
  SELECT_INVENTORY_ITEMS_TO_ORDER = "SELECT_INVENTORY_ITEMS_TO_ORDER",
  UNSELECT_INVENTORY_ITEMS_TO_ORDER = "UNSELECT_INVENTORY_ITEMS_TO_ORDER",
  SELECT_ALL_INVENTORY_ITEMS_TO_ORDER = "SELECT_ALL_INVENTORY_ITEMS_TO_ORDER",
  INCREMENT_ORDER_QUANTITY = "INCREMENT_ORDER_QUANTITY",
  DECREMENT_ORDER_QUANTITY = "DECREMENT_ORDER_QUANTITY",
  INCREMENT_DELIVERY_VAN_ORDER_QUANTITY = "INCREMENT_DELIVERY_VAN_ORDER_QUANTITY",
  DECREMENT_DELIVERY_VAN_ORDER_QUANTITY = "DECREMENT_DELIVERY_VAN_ORDER_QUANTITY",
  CLEAR_SELECTED_INVENTORY_LIST = "CLEAR_SELECTED_INVENTORY_LIST",
}