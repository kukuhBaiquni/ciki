import React, { Component } from "react";
import Context from "./Context";

class Provider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: ""
        }
    }

    render() {
        const { name, email } = this.state;
        const { children } = this.props;
        return(
            <Context.Provider
                value={{
                    name,
                    email,
                    setData: (text, type) => {
                        this.setState({ [type]: text })
                    }
                }}
            >
            {children}
            </Context.Provider>
        )
    }
}

export default Provider;
