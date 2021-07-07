import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  render() {
    let bands = this.props.bands.map( band => <li key={band.id}>{band.name}</li>)
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand} />
        <ul>
          {bands}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { bands: state.bands }
};

const mapDispatchToProps = dispatch => {
  return { addBand: band => dispatch({type: 'ADD_BAND', band})};
};


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
