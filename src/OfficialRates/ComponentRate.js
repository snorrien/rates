import { render } from "@testing-library/react";

export default class ComponentRate {
    constructor(props) {
        this.stare = {
            error: null,
            isLoaded: false,
            items: []
        };
    };

    componentDidMount() {
        fetch()
            .then(res => res.json)
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.rates
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    };
    render() {
        const { erroe, isLoaded, items } = this.state;
        if (error) {
            return <p>Error</p>
        } else if(!isLoaded){
            return <p>Loading...</p>
        }else {
            return <ul>
                {items.map(item =>(
                    <li>
                        
                    </li>
                ))}
            </ul>
        }
    }

}

