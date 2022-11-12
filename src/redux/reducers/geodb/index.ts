import { LOAD_DATA, LOAD_DATA_FAILURE, LOAD_DATA_SUCCESS } from './actions';

export const initialGeodbState = {
  isLoading: false,
  isError: false,
  data: [],
};

export interface geodbAction {
  payload: {
    isLoading: boolean;
    isError: boolean;
    data: any[];
  };
  type: string;
}

export default function geodbReducer(state = initialGeodbState, action: geodbAction) {
  switch (action.type) {
    case LOAD_DATA: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case LOAD_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    }

    case LOAD_DATA_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }

    default:
      return state;
  }
}
