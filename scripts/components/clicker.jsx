var ImmutableOptimizations = require('react-cursor').ImmutableOptimizations;

'use strict';

var Clicker = React.createClass({
    mixins: [ImmutableOptimizations(['cursor'])],

    render: function () {
        console.log('rendering clicker ', this.props.index);
        return (
            <div>
                <label for={"clicker-" + this.props.index}>{this.props.index}:</label>
                <input id={"clicker-" + this.props.index} type="text" value={this.props.cursor.value} set={this.onInputChange} readOnly />
                <span>{this.props.cursor.value}</span>
                <button onClick={this.inc2}>+2</button>
                <button onClick={this.inc10}>+10</button>
            </div>
        );
    },

    onInputChange: function (e) {
        var nextValue = parseInt(e.target.value, 10);
        if (isNaN(nextValue)) nextValue = '';
        this.props.cursor.set(nextValue);
    },

    inc2: function () {
        this.props.cursor.set(this.props.cursor.pendingValue() + 1);
        this.props.cursor.set(this.props.cursor.pendingValue() + 1);
    },

    inc10: function () {
        this.props.cursor.set(this.props.cursor.pendingValue() + 10);
    }
});

module.exports = Clicker;
