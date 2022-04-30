import React from 'react'
import { connect } from 'react-redux'

function Counter (props) {
  console.log('props :>> ', props)
  const { count, step, dispatch } = props

  const increment = () => {
    const ACTION = { type: 'increment' }
    dispatch(ACTION)
  }

  const decrement = () => {
    const ACTION = { type: 'decrement' }
    dispatch(ACTION)
  }

  const setStep = ({ target: { value } }) => {
    const ACTION = { type: 'setStep', newStep: Number(value) }
    dispatch(ACTION)
  }

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

const mapStateToProps = state => {
  return state
}

//  первый вызов connect прокидывает dispatch в пропсы компонента
export default connect(mapStateToProps)(Counter)
