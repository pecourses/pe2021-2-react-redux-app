import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = { count: 0, step: 1 }

// reducer - чистая функция, (state, action) => {return state}
const counterReducer = (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case 'increment': {
      const { count, step } = state
      return { ...state, count: count + step }
    }
    case 'decrement': {
      const { count, step } = state
      return { ...state, count: count - step }
    }
    case 'setStep': {
      const { newStep } = action
      return { ...state, step: newStep }
    }
    default:
      return state
  }
}

// хранилище
const store = createStore(counterReducer)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

//redux:
// - createStore: ф-я для создания store (state+reducer)
// - store:    глобальное хранилище js-объектов + логика их изменения
// - reducer:  pure func: (state, action) => state
// - dispatch: функция, кот. отправляет action в store (reducer)
// - action:   js-object {type: 'string', ...bag }
//react-redux:
// - connect: HOC, пробрасывает нужную часть состояния в пропсы компонента
// - mapStateToProps: функция: что конкретно взять из state
// - Provider: дает теоретический доступ дерева App к состоянию

reportWebVitals()
