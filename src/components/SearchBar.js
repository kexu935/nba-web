import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';

function onSelect(value) {
    console.log('onSelect', value);
}

export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : [
                value,
                value + value,
                value + value + value,
            ],
        });
    }

    render() {
        const { dataSource } = this.state;
        return (
            <AutoComplete
                className="search-bar"
                dataSource={dataSource}
                onSelect={onSelect}
                onSearch={this.handleSearch}
                size="large"
                placeholder="Search NBA Player"
            >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
        );
    }
}