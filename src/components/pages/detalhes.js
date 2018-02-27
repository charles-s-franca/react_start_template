import React, { Component } from 'react';

class Detalhes extends Component {
  constructor(props){
    super(props);

    this.state = {
        pessoas: [
            {
                "id": 4,
                "first_name": "Eve",
                "last_name": "Holt",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
            }
        ]
    }
  }

  componentDidMount(){

      fetch("https://reqres.in/api/users?page=2").then(response=>{
        return response.json()
      }).then(json => {
          this.setState({pessoas: json.data})
      })
  }

  listPeople(){
    const pessoas = this.state.pessoas.map(p => {
        return (
            <p>{p.first_name} {p.id}</p>
        );
    });

    return pessoas;
  }

  render() {
    return (
      <div className="Detalhes">
        <div>
            Meu componente de detalhes { this.props.pessoa.idade }
        </div>
        <div>
            {this.listPeople()}
        </div>
      </div>
    );
  }
}

export default Detalhes;
