import React, { Component } from 'react';
import { Link } from 'react-router'
import CerealShow from '../components/CerealShow'


class CerealsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cereals: []
    }
  }

  componentDidMount() {
    fetch("/api/v1/cereals.json")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({cereals: responseData.cereals})
    })
  }

  render() {
    let project = this.state.cereals.map(cereal => {
      return(
        <CerealShow

          key={cereal.id}
          id={cereal.id}
          name={cereal.name}
          description={cereal.description}
        />

      )
    })

    return(

      <div>

        {project}
        {this.props.children}
      
      </div>
    )
  }
}

export default CerealsIndexContainer;
