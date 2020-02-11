import React from "react";
import PropTypes from "prop-types";
import {DatePicker} from "@material-ui/pickers";

export class ModalDatePicker extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.instanceOf(Date),
        onChange: PropTypes.func.isRequired
    };

    open = false;
    state = {
        date: null
    };

    render() {
        // @ts-ignore
        const { label, value, onChange } = this.props;
        return (
            <DatePicker
                label={label}
                format="d MMMM yyy"
                disableFuture
                clearable
                value={this.open ? this.state.date : value}
                onChange={date => this.setState({ date: date })}
                onAccept={date => onChange(date)}
                onOpen={() => (this.open = true)}
                onClose={() => (this.open = false)}
            />
        );
    }
}
