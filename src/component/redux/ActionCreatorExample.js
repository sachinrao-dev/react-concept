import React from "react";

const createPolicy = (name, amount) =>{
    return{
        type: "Create_policy",
        payload:{ 
            name: name,
            amount:amount,
        }
    }
};


const deletePolicy = (name) => {
    return{
        type: "Delete_policy",
        payload:{
            name
        }

    }
}

const claimHistory = (oldListOfClaims = [], action) => {
    if (action.type === "Crete_policy")
    {
        // we care about this action
        return[...oldListOfClaims, action.payload]
    }

    // we don't care about this section
     
    return oldListOfClaims;
};

const accounting = (bagOfMoney, action) =>{

    if (action.type === "Create_policy"){
        return bagOfMoney - action.payload.amount

    }


    // to create Delete policy 


    const policy = (listPolicy = [], action) => { 
        if (action.type === "Create_policy"){
            return [...listPolicy, action.payload.name];
        }else if (action.type === "Delete_policy"){
            return listPolicy.filter(name => name !== action.payload.name)
        }
        return listPolicy;

    }

}



const { createStore , combineReducer} = redux;

const ourDepartment = combineReducer({
    claimHistory: claimHistory,
    accounting: accounting,

})

const store = createStore(ourDepartment);


const action = createPolicy("sachin", 200);
store.dispatch(action);
store.getState();


store.dispatch()




// from redux tutorial
const createPolicy = (name, amount) => {
    return { // Action (a form in our analogy)
      type: 'CREATE_POLICY',
      payload: {
        name: name,
        amount: amount
      }
    };
  };
  
  const deletePolicy = (name) => {
    return {
      type: 'DELETE_POLICY',
      payload: {
        name: name
      }
    };
  };
  
  const createClaim = (name, amountOfMoneyToCollect) => {
    return {
      type: 'CREATE_CLAIM',
      payload: {
        name: name,
        amountOfMoneyToCollect: amountOfMoneyToCollect
      }
    };
  };
  
  
  // Reducers (Departments!)
  const claimsHistory = (oldListOfClaims = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
      // we care about this action (FORM!)
      return [...oldListOfClaims, action.payload];
    }
    
    // we don't care the action (form!!)
    return oldListOfClaims;
  };
  
  const accounting = (bagOfMoney = 100, action) => {
    if (action.type === 'CREATE_CLAIM') {
      return bagOfMoney - action.payload.amountOfMoneyToCollect;
    } else if (action.type === 'CREATE_POLICY') {
      return bagOfMoney + action.payload.amount;
    }
    
    return bagOfMoney;
  };
  
  const policies = (listOfPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY') {
      return [...listOfPolicies, action.payload.name];
    } else if (action.type === 'DELETE_POLICY') {
      return listOfPolicies.filter(name => name !== action.payload.name);
    }
    
    return listOfPolicies;
  };
  
  const { createStore, combineReducers } = Redux;
  
  const ourDepartments = combineReducers({
    accounting: accounting,
    claimsHistory: claimsHistory,
    policies: policies
  });
  
  const store = createStore(ourDepartments);
  
  createPolicy('Alex', 20)
  createClaim('Alex', 120)
  deletePolicy('Alex')
  
  store.dispatch(createPolicy('Alex', 20));
  store.dispatch(createPolicy('Jim', 30));
  store.dispatch(createPolicy('Bob', 40));
  
  // store.dispatch(createClaim('Alex', 120));
  // store.dispatch(createClaim('Jim', 50));
  
  // store.dispatch(deletePolicy('Bob'));
  
  console.log(store.getState());