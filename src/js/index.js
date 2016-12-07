import {createStore} from 'redux';
import React,{Component} from 'react';
import ReactDom from 'react-dom';

// console.log(createStore)




// const reducer = (state = 0,action) => {

// 	switch(action.type){
// 		case 'INCREASE':
// 			return state + 1;
// 		case 'DECREASE':
// 		    return state - 1;
// 		default:
// 			return state;
// 	}
// }

// let store = createStore(reducer);

// const createStore = (reducer) => {
// 	let list=[];
// 	let state;
// 	const getState = () => {
// 		return state;
// 	}
// 	const dispatch = (action) => {
// 		state = reducer(state,action);
// 		list.forEach((func) =>{
// 			func();
// 		})
// 	}
// 	const subscribe = (func) => {
// 		list.push(func);
// 		return (fn) => {
// 			list = list.filter((cb) => {
// 				if(cb===fn){
// 					return false;
// 				}
// 				return true;
// 			})
// 		}
// 	}
// 	return{
// 		getState,
// 		dispatch,
// 		subscribe
// 	}
// }
// let store = createStore(reducer);

// store.dispatch({
// 	type:'INIT'
// });

// const render = () => {
// 	document.body.innerHTML = store.getState();
// }
// render();

// let filterFunc = store.subscribe(render);

// document.onclick = function(){
// 	store.dispatch({type:'INCREASE'});
// 	filterFunc(render);
// }


const reducer = (state = 0,action) => {

	switch(action.type){
		case 'INCREASE':
			return state + 1;
		case 'DECREASE':
		    return state - 1;
		default:
			return state;
	}
}

const store = createStore(reducer);


class App extends Component{
	render () {
		return(
			<div>
				<h1>{store.getState()}</h1>
				<button onClick={()=>{ store.dispatch({type:'INCREASE'})}}>+</button>
				<button onClick={()=>{ store.dispatch({type:'INCREASE'})}}>-</button>
			</div>
		)
	}
}

const render = () => {
	ReactDom.render(
		<App/>,
		document.getElementById('root')	
	)
}
render();
store.subscribe(render);
