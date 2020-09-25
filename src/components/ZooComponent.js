
import React, { Component } from 'react';
import { Media, Card, CardImg } from 'reactstrap';



class Zoo extends Component {

    constructor(props) {
        super();

        this.state = {
            selected : null
        }
    }

    slectedAnimal(animal) {
        console.log("veikia")
        console.log(animal)
        this.setState({selected : animal})
    }

    renderSelectedAnimal(animal) {
        if (animal == null) {
            return (
                <div>Nieko</div>
            );
        }
        else {
            return (
                <h1>{animal.title}</h1>
            );
        }
    }

    render () {
        const zoo = this.props.animals.map((animal) => {
             return (
                <div key={animal.id} className="col-12">
                    <Card onClick={() => this.slectedAnimal(animal)}>
                        <Media heading>
                            {animal.title}
                        </Media>
                        <CardImg width="100px" src={animal.image} />
                        <p>{animal.desc}</p>
                    </Card>
                </div>
            );
        });    

        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {zoo}
                    </Media>
                </div>
                {this.renderSelectedAnimal(this.state.selected)}
            </div>
        )
        
    }

}

export default Zoo;