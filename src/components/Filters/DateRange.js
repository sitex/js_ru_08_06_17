import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DayPicker, { DateUtils } from 'react-day-picker'
import {setDateFilter} from '../../AC'
import {connect} from 'react-redux'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {

    static propTypes = {
        // from connect
        from: PropTypes.objectOf(Date),
        to: PropTypes.objectOf(Date)
    }

    handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, this.props)
        this.props.setDateFilter({
            from: (!!range.from) ? range.from : null,
            to: (!!range.to) ? range.to : null
        })
    }

    render() {
        const { from, to } = this.props;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                    initialMonth = {new Date('June 2016')}
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(state => ({
    from: state.filter.from,
    to: state.filter.to
}), { setDateFilter })(DateRange)