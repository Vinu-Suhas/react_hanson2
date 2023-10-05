import React from "react"

class FormCompo extends  React.Component{

    constructor(){
        super()
        this.state={
            StuData:[],
            error:{}
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
    /*    if(!this.state.name) {
            // this.setState()
            invalid=false
            console.log("Invalid name")
        }
        if(this.state.email==='') {
            invalid=false
            console.log("Invalid email")
        }
        if((this.state.rating>5 && this.state.rating<1)|| !this.state.rating) 
        {
            console.log("Invalid email")

            invalid=false
        }
*/
        return invalid
    }
    handleSubmit=()=>{
        
        if(this.validate()){
            const tempobj={
                name:this.state.name,
                mail:this.state.mail,
                rating:this.state.rating
            }

            this.state.StuData.push(tempobj)
            console.log(this.state.StuData)
        }

    }
    render(){


        return(
            <>
            <form>
                <label >Name:
                    <input type="text"  id="name" name="name" onChange={this.handleChange}></input>
                </label><br/>
                <label >Email:
                    <input type="email"  id="email" name="mail" onChange={this.handleChange}></input>
                </label>
                <br></br>
                <label >Rating:
                    <input type="number"  id="rating" name="rating" onChange={this.handleChange}></input>
                </label>
                {/* <h1>{this.state.name}</h1> */}
                <button onClick={this.handleSubmit} type="button">Submit</button>
            </form>

            <div>
                <h2>Results:</h2>
                {this.state.StuData.map((element,index)=>{
                    // console.log("map",index,element.name)
                   return( <>
                   <div key={index}>
                    <h3>Name:{element.name}</h3>
                    </div>  </>
                    )
                })}
            </div>
            </>
        )
    }
}
export {FormCompo}