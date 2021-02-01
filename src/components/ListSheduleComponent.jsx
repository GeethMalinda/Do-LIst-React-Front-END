import React, { Component } from 'react'
import SheduleService from '../services/SheduleServices';

export default class ListSheduleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
             shedules: []
        }
        
        this.addShedule = this.addShedule.bind(this);
        this.editShedule = this.editShedule.bind(this);
        this.deleteShedule = this.deleteShedule.bind(this);


    }
    deleteShedule(id){
        SheduleService.deleteShedule(id).then(response =>{

            this.setState({shedules: this.state.shedules.filter(shedule => shedule.id !== id)});

        })
    }
    addShedule(){
        this.props.history.push('/add-shedule/_add');
    }
    editShedule(id){
        this.props.history.push(`/add-shedule/${id}`);
    }

    componentDidMount() {
        SheduleService.getShedule().then((response) => {
            this.setState({shedules: response.data.data})
        })

        console.log("Test 1",this.state.shedules)
    }
    
    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addShedule} style={{marginBottom:"10px"}}>
                        Add Employee
                    </button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Actions</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        {
                                this.state.shedules.map(
                                    shedule =>
                                    
                                    <tr key={shedule.id}>
                                        <td>{shedule.title}</td>
                                        <td>{shedule.description}</td>
                                        <td>
                                            <button onClick={() => this.editShedule(shedule.id)} 
                                            className="btn btn-info">Update</button>

                                            <button style={{marginLeft:"10px"}} onClick={() => this.deleteShedule(shedule.id)} 
                                            className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                    
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
