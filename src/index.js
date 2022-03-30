import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

// Aquí importamos el reducer creado anteriormente
import rootReducer from './redux' 

const store = createStore(
		rootReducer,
		composeWithDevTools()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* Aquí sólamente encerramos a <App/> */}
      <App />                {/* En el provider */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();
