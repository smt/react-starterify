var ImmutableOptimizations = require('react-cursor').ImmutableOptimizations;

'use strict';

var Clicker = React.createClass({
    mixins: [ImmutableOptimizations(['cursor'])],

    render: function () {
        console.log('rendering clicker ', this.props.idx);
        return (
            <div>
                <label htmlFor={"clicker-" + this.props.idx}>{this.props.idx}:</label>
                <input id={"clicker-" + this.props.idx} type="text" value={this.props.cursor.value} onChange={this.onInputChange} />
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
