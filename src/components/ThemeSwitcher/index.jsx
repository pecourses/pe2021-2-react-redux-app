import React from 'react'
import { connect } from 'react-redux'
import { setTheme } from '../../actions/actionCreators'
import ACTION_TYPES from '../../actions/actionTypes'

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
    setTheme: isLight => dispatch(setTheme(isLight))
  }
}

export default connect(mapStateToProps, mapDispathToProps)(ThemeSwitcher)
