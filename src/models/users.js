export default {
    namespace:'users',

    state:{
        list:[],
        total:null,
        loading:false,   //控制加载状态
        current:null,    //当前分信息
        currentItem:{},   //当前操作的用户对象
        modalVisible:false,  //当前弹出框的状态
        modalType:''   //弹性框的状态（添加用户， 编辑用户）
    },
     subscriptions: {
        setup({ dispatch, history }) {
             history.listen(location =>{     //在这里设置一个判断，当。。。时触发action
                 if(location.pathname == '/myTable'){
                 dispatch({
                    type: 'users/queryTableData',  //调用一个action
                    payload: { subreddit: 'tabledata'},   //调用时传递的参数
                    dispatch
                });
                 }
             })
            
        },
    },
     thunks: {
        queryTableData({subreddit}) {
           // alert(subreddit);
            return (dispatch, getState) => {
                return dispatch(dispatch => {
                    return fetch(`/api/${subreddit}.json`)
                        .then(response => response.json())
                        .then(json => dispatch({
                            type: 'users/querySuccess',
                            payload: {
                                posts: json
                            }
                        }
                    ))
                })
            }
        },
        deleteTableData(id){
          //  alert(id);
             return (dispatch, getState) => {
                return dispatch(dispatch => {
                    return fetch(`/api/tabledata${id}.json`)
                        .then(response => response.json())
                        .then(json => dispatch({
                            type: 'users/deleteSuccess',
                            payload: {
                                posts: json
                            }
                        }
                    ))
                })
            }
        }
    },

    reducers:{
        showLoading(){},  //控制加载状态的reducers
        showModal(){},   //控制模态框显示的reducers
        hideModal(){},
        //使用静态数据返回
        querySuccess(state,action){
            // console.log(123);
            // console.log(state);
            // console.log(action);
            const mock = {
                total: 3,
                current: 1,
                loading: false,
                list: [...action.payload.posts]
            };
            return {...state, ...mock};
        },
        createSuccess(){},
        deleteSuccess(state,action){
            const mock = {
                total: 3,
                current: 1,
                loading: false,
                list: [...action.payload.posts]
            };
            return {...state, ...mock};
        },
        updateSuccess(){}
    }
}