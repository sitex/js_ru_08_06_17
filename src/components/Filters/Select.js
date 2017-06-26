import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {setIdFilter} from '../../AC'
import {connect} from 'react-redux'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {

    static propTypes = {
        // from connect
        articles: PropTypes.array.isRequired,
        selected: PropTypes.array.isRequired
    };

    handleChange = selected => {
        this.props.setIdFilter(selected.map(select => select.value))
    }

    render() {
        const { selected, articles } = this.props

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

export default connect((state) => ({
    articles: state.articles,
    selected: state.filter.ids
}), { setIdFilter })(SelectFilter)