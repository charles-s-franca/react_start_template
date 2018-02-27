import React, { Component } from 'react';

class Clients extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <a href="#">
                                <img className="img-fluid d-block mx-auto" src="template/img/logos/envato.jpg" alt="" />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <a href="#">
                                <img className="img-fluid d-block mx-auto" src="template/img/logos/designmodo.jpg" alt="" />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <a href="#">
                                <img className="img-fluid d-block mx-auto" src="template/img/logos/themeforest.jpg" alt="" />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <a href="#">
                                <img className="img-fluid d-block mx-auto" src="template/img/logos/creative-market.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Clients;