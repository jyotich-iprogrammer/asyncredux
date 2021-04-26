import * as actionTypes from './actions';

export const increment=()=>{
    return{
        type:actionTypes.INCREMENT
    };
};

export const decrement=()=>{
    return{
        type:actionTypes.DECREMENT
    };
};

export const addition=(value)=>{
    return{
        type:actionTypes.ADDITION,
        value:value
    };
};

export const substract=(value)=>{
    return{
        type:actionTypes.SUBSTRACT,
        value:value
    };
};

export const saveResult=(res)=>{
    return{
        type:actionTypes.STORE_RESULT,
        result:res
    };
};

export const storeResult=(res)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(saveResult(res));
        },2000)
        
    }
};




export const deleteResult=(resElId)=>{
    return{
        type:actionTypes.DELETE_RESULT,
        resultElId:resElId
    };
};