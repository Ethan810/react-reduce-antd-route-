
export default {

  namespace: 'example',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
       dispatch({
        type: 'example/test',
        payload: { subreddit: 'reactjs' },
        dispatch
      });
    },
  },

  thunks: {
    test({subreddit}) {
      return (dispatch, getState) => {
        return dispatch(dispatch => {
          return fetch(`/api/${subreddit}.json`)
            .then(response => response.json())
            .then(json => dispatch({
              type: 'example/save',
              payload: {
                posts: json.data.children.map(child => child.data),
                receivedAt: Date.now()
              }
            }
            ))
        })
      }
    }
  },

  reducers: {
    save(state, action) {
      // console.log(2);
       console.log(state);
      // console.log(action);
      return { ...state, ...action.payload };
    },
  },

};

