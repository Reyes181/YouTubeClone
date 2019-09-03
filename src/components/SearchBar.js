import React, {Component} from 'react';

class SearchBar extends Component {
    state = {
        searchTerm:''
    }

    handleChange = () => {
        let newTerm = document.getElementById("search").value
        this.setState({
            searchTerm: newTerm
        })
    }

    handleSubmit = (e) => {
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;

        onFormSubmit(searchTerm);
        
        e.preventDefault();
    }

    render(){
        return(
            <div className="search_box">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="search" placeholder="Search....app published by E.R."/>
                    <button onClick={this.handleChange}>
                        <img alt="search" src="https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png"/>
                    </button>
                </form>
            </div>
        )
    }
}

export default SearchBar;