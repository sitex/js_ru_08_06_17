import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {setDateFilter} from '../../AC'
import {connect} from 'react-redux'
import moment from 'moment'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {
    state = {
        from: null,
        to: null
    }

    handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)
        this.props.setDateFilter({
            from: (!!range.from) ? moment(range.from).hour(0).minute(0) : null,
            to: (!!range.to) ? moment(range.to).hour(23).minute(59) : null
        })
    }

    render() {
        const { from, to } = this.state;
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

export default connect(null, { setDateFilter })(DateRange)