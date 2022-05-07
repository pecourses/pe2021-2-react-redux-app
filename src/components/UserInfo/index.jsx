import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserAction } from '../../actions/actionCreators'

function UserInfo (props) {
  const { user, isFetching, error, getUser } = props

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      {error && <div>ERROR!!!</div>}
      {isFetching && <div>Loading...</div>}
      {!error && !isFetching && <article>{JSON.stringify(user)}</article>}
    </>
  )
}

const mapStateToProps = ({ userData }) => userData

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUserAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
