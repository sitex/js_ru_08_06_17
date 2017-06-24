import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {setIdFilter} from '../../AC'
import {connect} from 'react-redux'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    state = {
        selected: []
    }

    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => {
        this.setState({selected})
        this.props.setIdFilter(selected.map(select => select.value))
    }

    render() {
        const { selected } = this.state
        const { articles } = this.props

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(null, { setIdFilter })(SelectFilter)