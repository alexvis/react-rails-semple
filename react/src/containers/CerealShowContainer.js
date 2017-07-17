import React, { Component } from 'react';

class CerealShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cereal: {}
    }
  }


  componentDidMount() {
    let projectId = this.props.params.id;
    fetch(`/api/v1/cereals/${projectId}`)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({cereal: responseData.cereal})
    })
  }

  render() {
    return(
      <div>
        <h1>{this.state.cereal.name}</h1>
        <h3>{this.state.cereal.description}</h3>
        {this.props.children}

      </div>
    )
  }
}

export default CerealShowContainer
