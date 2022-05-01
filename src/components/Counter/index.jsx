import React from 'react'
import { connect } from 'react-redux'
import {
  counterDecrement,
  counterIncrement,
  counterSetStep
} from '../../actions/actionCreators'

function Counter (props) {
  console.log('props :>> ', props)
  // состояние и обработчики появляются в пропсах благодаря
  // connect(mapStateToProps, mapDispatchToProps)
  const { count, step, increment, decrement, setStep } = props

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <br />
      <input type='number' value={step} onChange={setStep} />
    </>
  )
}

// функция пробрасывает нужную часть состояния в пропсы компоненту
const mapStateToProps = state => {
  return state.counter
}

// функция пробрасывает обработчики в пропсы компоненту
// если пробрасываются обработчики, то dispatch в пропсы не приходит

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(counterIncrement()),
    decrement: () => dispatch(counterDecrement()),
    setStep: ({ target: { value } }) => dispatch(counterSetStep(Number(value)))
  }
}

//  первый вызов connect прокидывает dispatch в пропсы компонента
// (если нет второго аргумента у connect)
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
