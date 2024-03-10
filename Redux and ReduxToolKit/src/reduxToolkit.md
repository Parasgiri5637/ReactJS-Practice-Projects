# What is Redux/Redux Toolkit ?

## 1. Redux:

### Redux is a state management library for JavaScript applications, particularly those built using frameworks like React. It helps manage the global state of an application in a predictable and centralized way. Redux works by storing the entire application's state in a single JavaScript object called the "store." Components can access and update this state using actions and reducers, which ensures a clear separation between data and UI logic.

## 2. Redux Toolkit:

### Redux Toolkit is an official package provided by the Redux team that simplifies and streamlines the process of working with Redux. It includes utility functions and guidelines that make it easier to set up and manage a Redux store, write reducers, and handle actions. Redux Toolkit also encourages best practices like using "slices" (smaller reducers), handling immutability, and reducing boilerplate code, making it a more productive and efficient way to implement Redux in your application.

# How to use Redux and Redux Toolkit ?

## Step 1 : Install Redux and Toolkit from NPM.

### Command : npm install @reduxjs/toolkit react-redux.

## Step 2 : create store in your project "store.jsx".

### => in store we need to import "configureStore" from redux toolkit.

### Ex. import { configureStore } from "@reduxjs/toolkit";

### => then we need to create store using configureStore.

### Ex. const store = configureStore({});

### => then we need to create reducer object inside configureStore({}).

### Ex. const store = configureStore({

### reducer: {},

### });

### => we can add multiple reducer in reducer object.

### => then "export default store;" so we can use in main.jsx or any file

## Step 3 : to handle reducer object we can create new file or we can use same file.

### => to access reducer object we need import "createReducer" from redux toolkit.

### Ex. import { createReducer } from "@reduxjs/toolkit";

### => then we need to create variable so we can pass "createReducer({},{})"

### Ex. const customReducer = createReducer({},{})

### => in createReducer we need to pass 2 objects first is "initialState" and second is "action"

### Ex.const customReducer = createReducer(initialState,action)

### => InitialState : The value you want the state to be initially. It can be a value of any type, but there is a special behavior for functions. This argument is ignored after the initial render. If you pass a function as initialState , it will be treated as an initializer function.

### => initialState : Ex. const initialState = { c: 0,};

### => Action : action will be called when the action is dispatch

### => action : Ex. const action = {

### we can pass multiple action here we did not need switch statement to call action because createReducer is smart it will know

### increment: (state) => {

### state.c += 1;},}

## => then we can need to export customeReducer becouse we need to pass inside store's reducer so we can use in our all component = export default customReducer;

## Ex. in store = import customReducer from "./Reducer";

## Ex. const store = configureStore({ reducer: { custom: customReducer,},});

## Step 4 : Now import store in main.jsx so we can use data in all component

### => in main.jsx we need import "Provider" from redux toolkit

## Ex. import { Provider } from "react-redux";

## => then we need to wrap our App component with Provider

## => in Provider we need to pass our store

## Ex.

 <Provider store={store}>
      <App />
</Provider>

## Step 5: How trigger our reducer's action

### => we can use "useDispatch" hook from "react-redux"

### Ex. import { useDispatch} from "react-redux";

### => Then we need use in component Ex. " const dispatch = useDispatch();"

### => now we can use dispatch in event or any function to tigger our action baseed on action type and user's value "payload"

### Ex. function addInc() {

### dispatch({ type: "increment" }); }

### => in above example addInc function call when click on button then dispatch call dispatch give reducer type so action will triger in reducer

## Step 6 : How to get data from store

### => we need to use "useSelector" hook from redux-toolkit

### Ex. import { useSelector } from "react-redux";

### => get data from store = const value = useSelector((state) => state.custom.c);

### => we can use destructring const {c} = useSelector((state) => state.custom);
