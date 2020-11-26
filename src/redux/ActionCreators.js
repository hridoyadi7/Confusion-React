import * as ActionTypes from './ActionTypes';
// import { DISHES } from '../shared/dishes';
// import { Dishes } from './dishes';
import {baseUrl} from '../shared/baseUrl';

export const addComment=(comment)=>({
    type:ActionTypes.ADD_COMMENT,
    payload:comment
});


export const postComment=(dishId,rating,author,comment)=>(dispatch)=>{

    const newComment={
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }

    newComment.date=new Date().toISOString();

    //POST the comment to the server

    return fetch(baseUrl+'comments',{
        method:'POST',
        body:JSON.stringify(newComment),
        headers:{
            'Content-Type':'application/json'
        },
        Credentials:'same-origin'
    })
    .then(response=>{
        if(response.ok){
            return response;
        }
        else{
            var error=new Error('Error '+response.status+':'+response.statusText);
            error.response=response;
            throw error;
        }
    },
    error=>{
        var errmess=new Error(error.message);
        throw errmess;
    })
    .then(response=>response.json())
    .then(response=>dispatch(addComment(response)))
    .catch(error=>{console.log('POST comments',error.message)
        alert('Your comment could not be posted!\nError:'+error.message);})


}//--------->>>Post operation on the server

//------------------------------Feedback-------------------------------

export const addFeedback=(feedback)=>({
    type:ActionTypes.ADD_FEEDBACK,
    payload:feedback
});


export const postFeedback=(firstname,lastname,telnum,email,agree,contactType,message)=>(dispatch)=>{

    const newFeedback={
        firstname:firstname,
        lastname:lastname,
        telnum:telnum,
        email:email,
        agree:agree,
        contactType:contactType,
        message:message,
    }

    newFeedback.date=new Date().toISOString();

    //POST the comment to the server

    return fetch(baseUrl+'feedback',{
        method:'POST',
        body:JSON.stringify(newFeedback),
        headers:{
            'Content-Type':'application/json'
        },
        Credentials:'same-origin'
    })
    .then(response=>{
        if(response.ok){
            return response;
        }
        else{
            var error=new Error('Error '+response.status+':'+response.statusText);
            error.response=response;
            throw error;
        }
    },
    error=>{
        var errmess=new Error(error.message);
        throw errmess;
    })
    .then(response=>response.json())
    .then(response=>dispatch(addFeedback(response)))
    .catch(error=>{console.log('POST feedbacks',error.message)
        alert('Your Feedback could not be posted!\nError:'+error.message);})


}//--------->>>Post operation on the server




//---------------------Dishes------------------------------------

export const fetchDishes=()=>(dispatch)=>{
    dispatch(dishesLoading(true));
    
    return fetch(baseUrl+'dishes')//Available from localhost:3001
        .then(response=>{
            if(response.ok){
                return response;
            }
            else{
                var error=new Error('Error '+response.status+':'+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error=>{
            var errmess=new Error(error.message);
            throw errmess;
        })
        .then(response=>response.json())
        .then(dishes=>dispatch(addDishes(dishes)))
        .catch(error=>dispatch(dishesFailed(error.message)));
}//----------------------------------------->>> Redux-Thunk


export const dishesLoading=()=>({
    type:ActionTypes.DISHES_LOADING
});


export const dishesFailed=(errmess)=>({
    type:ActionTypes.DISHES_FAILED,
    payload:errmess
})


export const addDishes=(dishes)=>({
    type:ActionTypes.ADD_DISHES,
    payload:dishes
})



//-------------------------Comments------------------------------------

export const fetchComments=()=>(dispatch)=>{
    
    return fetch(baseUrl+'comments')//Available from localhost:3001
        .then(response=>{
            if(response.ok){
                return response;
            }
            else{
                var error=new Error('Error '+response.status+':'+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error=>{
            var errmess=new Error(error.message);
            throw errmess;
        })
        .then(response=>response.json())
        .then(comments=>dispatch(addComments(comments)))
        .catch(error=>dispatch(commentsFailed(error.message)));
}

export const commentsFailed=(errmess)=>({
    type:ActionTypes.COMMENTS_FAILED,
    payload:errmess
})


export const addComments=(comments)=>({
    type:ActionTypes.ADD_COMMENTS,
    payload:comments
})


//-------------------------Promotions---------------------------------


export const fetchPromos=()=>(dispatch)=>{
    dispatch(promosLoading(true));
    
    return fetch(baseUrl+'promotions')//Available from localhost:3001
        .then(response=>{
            if(response.ok){
                return response;
            }
            else{
                var error=new Error('Error '+response.status+':'+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error=>{
            var errmess=new Error(error.message);
            throw errmess;
        })
        .then(response=>response.json())
        .then(promos=>dispatch(addPromos(promos)))
        .catch(error=>dispatch(promosFailed(error.message)));
}//----------------------------------------->>> Redux-Thunk


export const promosLoading=()=>({
    type:ActionTypes.PROMOS_LOADING
});


export const promosFailed=(errmess)=>({
    type:ActionTypes.PROMOS_FAILED,
    payload:errmess
})


export const addPromos=(promos)=>({
    type:ActionTypes.ADD_PROMOS,
    payload:promos
})

//---------------------Leaders-----------------------------------

export const fetchLeaders=()=>(dispatch)=>{
    dispatch(leadersLoading(true));
    
    return fetch(baseUrl+'leaders')//Available from localhost:3001
        .then(response=>{
            if(response.ok){
                return response;
            }
            else{
                var error=new Error('Error '+response.status+':'+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error=>{
            var errmess=new Error(error.message);
            throw errmess;
        })
        .then(response=>response.json())
        .then(leaders=>dispatch(addLeaders(leaders)))
        .catch(error=>dispatch(leadersFailed(error.message)));
}//----------------------------------------->>> Redux-Thunk


export const leadersLoading=()=>({
    type:ActionTypes.LEADERS_LOADING
});


export const leadersFailed=(errmess)=>({
    type:ActionTypes.LEADERS_FAILED,
    payload:errmess
})


export const addLeaders=(leaders)=>({
    type:ActionTypes.ADD_LEADERS,
    payload:leaders
})