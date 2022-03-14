import React, { Component } from 'react'
import { connect } from 'react-redux'
import DarkMode from './DarkMode'

class DarkModeContainer extends Component {
  render() {
    return (
      <>
      <DarkMode darkMode={this.props.darkMode} />
      </>
    )
  }
}


const mapStateToProps = (state) => ({
    darkMode: state.settings.darkMode
})

export default connect(mapStateToProps,)(DarkModeContainer)