import React from "react"
import './styles.css'

class FormCompo extends  React.Component{

    constructor(){
        super()
        this.state={
            StuData:[],
            error:{},
            newData:[
                {name:'Ramesh',batch :'EA23'},
                {name:'Ramte',batch :'EA21'},
                {name:'Suresh',batch :'EA23'},
                {name:'Saketh',batch :'EA13'},
                {name:'Vishal',batch :'EA18'},
            ]
        }

        // this.setState({StuData:this.StuData})
    }
    
    handleChange=(event)=>{
        // console.log(event.target.value)
        this.setState({[event.target.name]:event.target.value})
        // console.log(event.target.value)
        // console.log(this.state)

        }

    validate=()=>{
        let invalid=true
        if(!this.state.name) {
            // this.setState()
            invalid=false
            alert("Invalid name")
        }
        if(this.state.department==='') {
            invalid=false
            alert("Invalid email")
        }
        if((this.state.rating>5 && this.state.rating<1)|| !this.state.rating) 
        {
            alert("Invalid email")

            invalid=false
        }

        return invalid
    }
    handleSubmit=()=>{
        
        if(this.validate()){
            const tempobj={
                name:this.state.name,
                department:this.state.department,
                rating:this.state.rating
            }
            this.state.StuData.push(tempobj)
            this.state.name=""
            this.state.department=""
            this.state.rating=0
            this.setState({StuData:this.state.StuData})
            // console.log(this.state.StuData)
        }

    }
    render(){


        return(
            <>
                <h1 className="center">COURSE FEEDBACK FORM</h1>
            <div className="formContainer">
            <form>
                <label >Name:
                    <input type="text"  id="name" name="name" onChange={this.handleChange}></input>
                </label><br/>
                <label >Department:
                    <input type="text"  id="department" name="department" onChange={this.handleChange}></input>
                </label>
                <br></br>
                <label >Rating:
                    <input type="number"  id="rating" name="rating" onChange={this.handleChange}></input>
                </label><br></br>
                {/* <h1>{this.state.name}</h1> */}
                <button onClick={this.handleSubmit} type="button">Submit</button>
            </form>
            </div>

            {/* <div>
                <h2>Results:</h2>
                {this.state.StuData.map((element,index)=>{
                    // console.log("map",index,element.name)
                    return( <>
                   <div key={index}>
                    <h3>Name:{element.name}</h3>
                    </div>  </>
                    )
                })}
                </div> */}
<div className="tableContainer">
<table border="1">
        <thead>
            <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Rating</th>

            </tr>
        </thead>
        <tbody>
            {this.state.StuData.map((element,index)=>{
                return(<>
                <tr key={index}>
                    <td>{element.name}</td>
                    <td>{element.department}</td>
                    <td>{element.rating}</td>
                </tr>
                </>)
            })}
        </tbody>
        </table>
        </div>
            </>
        )
    }
}
export {FormCompo}