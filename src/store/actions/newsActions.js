import * as actions from './index'


export const newsLoading = (payload) => {
    return {
      type: actions.NEWS_LOADING, 
      payload
    };
  };

  export const addNews = (payload) => {
    return {
      type: actions.ADD_POST, 
      payload
    };
  };

  export const deletePost=(payload)=>{
    return{
      type:actions.DELETE_POST,
      payload
    }
  }

  export const editPost=(payload)=>{
    return{
      type:actions.EDIT_POST,
      payload
    }
  }

  export const update=(id, payload)=>{
    return{
      type:actions.UPDATE,
      id, payload
    }
  }

  