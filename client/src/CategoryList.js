import { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { fetchFromBackend } from './helpers';

export default class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
            ]
        }

    }

    componentDidMount() {
        fetchFromBackend("GET", "", "categories").then((categories) => {
            this.setState({ categories });
        });
    }

    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <ListGroup className="mt-4">
                    {
                        this.state.categories.map(v =>
                            <ListGroupItem active={v.id===this.props.info.currentCatId}  key={v.id} color={this.props.info.colors[v.id%this.props.info.colors.length]} onClick={() => this.props.setCurrentCat(v)}>
                                {v.categoryName}
                            </ListGroupItem>
                        )
                    }
                </ListGroup>
                <h2>{this.props.info.currentCategory}</h2>
            </div>
        );
    }
}
