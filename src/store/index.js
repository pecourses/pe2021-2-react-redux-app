import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import counterReducer from '../reducers'

// хранилище
const store = createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware())
)

export default store

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
