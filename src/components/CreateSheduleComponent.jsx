import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import SheduleServices from '../services/SheduleServices';


export default class CreateSheduleComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            //step 2
            id: this.props.match.params.id,
            title:'',
            description:''

        }

        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveShedule = this.saveShedule.bind(this);

    }
    //step 3
    componentDidMount() {
        //step 4
        if (this.state.id === "_add"){
            return
        }
        else{
            SheduleServices.getSheduleById(this.state.id).then((response) => {
                let shedule = response.data.data;
                this.setState({
                    title:shedule.title,
                    description:shedule.description
                })
            })
        }
       
    }
    saveShedule = (e) => {
        e.preventDefault();
        let shedule ={title:this.state.title,description:this.state.description}
        console.log("shedule: " + JSON.stringify(shedule));

        //step 5
        if(this.state.id === "_add"){
            SheduleServices.createShedule(shedule).then(response =>{
                this.props.history.push('/shedules')
            })
        }
        else{
            SheduleServices.updatShedule(shedule,this.state.id).then((response) => {
                this.props.history.push('/shedules')
                
            })
        }


     

    }

    changeTitleHandler=(event) => {
        this.setState({title:event.target.value})
    }
    changeDescriptionHandler=(event) => {
        this.setState({description:event.target.value})
    }
    cancel(){
        this.props.history.push('/shedules');
    }
    getTitle(){
        if(this.state.id === "_add"){
            return <h3 className="text-center mt-1">Add Shedule</h3>

        }
        else{
            return <h3 className="text-center mt-1">Update Shedule</h3>
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card mt-5 col-md-6 offset-md-3">
                            {/* <h3 className="text-center mt-1">Add Employee</h3> */}
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                            <Form>
                                <Form.Group>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control name="title" type="text" placeholder="Enter Title" value={this.state.title} onChange={this.changeTitleHandler}/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control name = "description" type="text" placeholder="Enter Description" value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                </Form.Group>

                            
                               
                              
                                <Button variant="primary" type="button" onClick={this.saveShedule}>
                                    Save
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
