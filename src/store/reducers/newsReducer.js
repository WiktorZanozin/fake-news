import * as actions from '../actions'
const initialState={
    news:[
        {id:1, text:"First", editing:false},
        {id:2, text:"Second", editing:false},
        {id:3, text:"Third", editing:false},
       ],
}

export default(state, action)=>{
    switch(action.type){
        case actions.NEWS_LOADING:
            return{
                news:action.payload,
            }

         case actions.ADD_POST:
            return{
             news:action.payload,
            }

        case actions.DELETE_POST:
            
            return {
              news:state.news.filter((newsItem)=>newsItem.id !== action.payload)
            }
        case actions.EDIT_POST:
            return {
              news:state.news.map((post)=>post.id === action.payload ? {...post,editing:!post.editing}:post)
            }

            case actions.UPDATE:
            return{
                news: state.news.map((post) => {
            if (post.id === action.id) {
            return {
            ...post,
            text:action.payload,
            editing: !post.editing
            }
            } else return post;
            })
        }
        default: return initialState;
    }
}

