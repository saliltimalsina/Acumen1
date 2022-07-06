export const registerNewUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGITSER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "USER_REGITSER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
      };
    case "USER_REGITSER_FAILED":
      return {
        ...state,
        success:false,
        loading: false,
        error: "Username already exists",
      };
    default:
      return state;
  }
};

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
      };
    case "USER_LOGIN_FAILED":
      return {
        ...state,
        loading: false,
        success: false,
        error: "Invalid credentials",
      };

    case "USER_LOGOUT":
      return {
        ...state,
      };
    default:
      return state;
  }
};


export const updateUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_UPDATE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "USER_UPDATE_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "USER_UPDATE_FAILED":
      return {
        ...state,
        loading: false,
        error: "Username already exists",
      };
    default:
      return state;
  }
};



export const getAllUserReducer = (state={users : []}, action) => {
  switch (action.type) {
    case "GET_ALLUSERS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ALLUSERS_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case "GET_ALLUSERS_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};



export const deleteUserReducer = (state={}, action) => {
  switch (action.type) {
    case "DELETE_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        success:true,
      };
    case "DELETE_USER_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

