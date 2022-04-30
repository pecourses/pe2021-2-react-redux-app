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

// создать компонент ThemeSwitcher
// Theme: Light <button>Switched to Dark</button>
// Theme: Dark <button>Switched to Light</button>

// добавить в глобальное состояние isLight
// по клику на кнопку менять тему

export default counterReducer
