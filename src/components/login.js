import React, { Component } from 'react'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            password: "",

        }
    }

    textFieldHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })

    }

    Login = () => {
        if (this.state.userId !=="" && this.state.password !=="") {
            this.props.history.push({ pathname: '/DashBoard' })
        }
        else {
            alert("please fill details")
        }
    }

    render() {
        return (
            <div>
                <div className='card' style={{textAlign:"center"}}>
                <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8" >
                           <h1>Login</h1>
                               <div className="col-md-2"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <input
                                type="text"
                                name="userId"
                                value={this.state.userId}
                                onChange={this.textFieldHandler}></input>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <input
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.textFieldHandler}></input>
                        </div>
                        <div className="col-md-2"></div>
                    </div>


                    <div className="row">
                        <div className="col-md-5"></div>
                        <div className="col-md-2">
                            <button s onClick={this.Login}>Login</button>
                        </div>
                        <div className="col-md-5"></div>
                    </div>

                </div>

            </div>
        )
    }
}
export default Login;