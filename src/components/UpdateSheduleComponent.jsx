import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import SheduleServices from '../services/SheduleServices';

export default class UpdateEmployee extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id: this.props.match.params.id,
            title:'',
            description:'',
        }

        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.updateShedule = this.updateShedule.bind(this);

    }
    componentDidMount() {
        SheduleServices.getEmployById(this.state.id).then((response) => {
            let shedule = response.data;
            this.setState({
                title: shedule.title,
                description: shedule.description,
            })
        })
    }
    updateShedule = (e) => {
        e.preventDefault();
        let shedule ={title:this.state.title,description:this.state.description}
        console.log("shedule: " + JSON.stringify(shedule));
        SheduleServices.updatShedule(shedule,this.state.id).then((response) => {
            this.props.history.push('/shedules')
            
        })

    }
    changeTitleHandler=(event) => {
        this.setState({firstName:event.target.value})
    }
    changeDescriptionHandler=(event) => {
        this.setState({lastName:event.target.value})
    }

    cancel(){
        this.props.history.push('/shedules');
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card mt-5 col-md-6 offset-md-3">
                            <h3 className="text-center mt-1">Update Shedule</h3>
                            <div className="card-body">
                            <Form>
                                <Form.Group>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control name="title" type="text" placeholder="Enter Title" value={this.state.title} onChange={this.changeTitleHandler}/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="description" placeholder="Enter Description" value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                </Form.Group>

                            

                                <Button variant="primary" type="button" onClick={this.updateShedule}>
                                    Update
                                </Button>
                                <Button variant="danger" type="button" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>
                                    Cansel
                                </Button>
                                </Form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }

}
