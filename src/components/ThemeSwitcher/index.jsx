import React from 'react'
import { connect } from 'react-redux'

function ThemeSwitcher (props) {
  const { isLight, setTheme } = props
  return (
    <div>
      Theme: {isLight ? 'Light' : 'Dark'}
      <button onClick={() => setTheme(isLight)}>
        Switched to {isLight ? 'Dark' : 'Light'}
      </button>
    </div>
  )
}
const mapStateToProps = state => {
  return { isLight: state.isLight }
}

const mapDispathToProps = dispatch => {
  return {
    setTheme: isLight =>
      dispatch({
        type: 'setTheme',
        newTheme: !isLight
      })
  }
}

export default connect(mapStateToProps, mapDispathToProps)(ThemeSwitcher)
