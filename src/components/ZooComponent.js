import React, { Component } from 'react';
import { Media, Card, CardImg } from 'reactstrap';



class Zoo extends Component {

    constructor(props) {
        super();

        // this.state = {
        //     animals : 
        // }

    }

    render () {

        const zoo = this.props.animals.map((animal) => {
             return (
                <div key={animal.id} className="col-12">
                   
                        <Card>
                            <Media heading>
                                {animal.title}
                            </Media>
                            <CardImg width="300px" src={animal.image} />
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

            </div>
        )
        
       
    
    }



}

export default Zoo;