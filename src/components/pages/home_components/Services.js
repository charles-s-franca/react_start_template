import React, { Component } from 'react';
import axios from "axios";

class Services extends Component {
    constructor(props) {
        super(props);

        this.state = {
            services: [
                {
                    nome: "Ranqueamento de profissionais",
                    descricao: "Cadastre-se siga os passos no site e suba no ranking de profissionais."
                },
                {
                    nome: "Forum",
                    descricao: "Mantenha contato com milhares de mulheres desenvolvedoras que irão te ajudar em tudo o que precisar."
                },
                {
                    nome: "Qualificação",
                    descricao: "Receba dicas de cursos, eventos, palestras entre outros conteúdos que irão alavancar sua carreira abrindo um mundo novo de possibilidades."
                },
                {
                    nome: "Qualificação",
                    descricao: "Receba dicas de cursos, eventos, palestras entre outros conteúdos que irão alavancar sua carreira abrindo um mundo novo de possibilidades."
                },
                {
                    nome: "Qualificação",
                    descricao: "Receba dicas de cursos, eventos, palestras entre outros conteúdos que irão alavancar sua carreira abrindo um mundo novo de possibilidades."
                }
            ]
        }
    }

    componentDidMount(){
        this.loadServicesBackend();
    }

    loadServicesBackend(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            this.setState({
                //services: data
            })
            console.log(response.data);
        })
    }

    listServices() {
        return this.state.services.map((item) => {
            return (
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="service-heading">{item.nome}</h4>
                    <p className="text-muted">{item.descricao}</p>
                </div>
            );
        })
    }

    render() {
        return (
            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Services</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row text-center">
                        {this.listServices()}
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;