var React = require('react/addons');
var Cursor = require('react-cursor').Cursor;

var Clicker = require('./clicker.jsx');

'use strict';

var App = React.createClass({
    getInitialState: function () {
        var counts = [];
        for (var i = 0; i < 400; i++) {
            counts.push(0);
        }

        return {
            very: {
                deeply: {
                    nested: {
                        counts: counts
                    }
                }
            }
        };
    },

    componentWillMount: function () {
        window.App = this;
    },

    render: function () {
        var cursor = Cursor.build(this);
        var counts = cursor.refine('very', 'deeply', 'nested', 'counts');
        var contents = counts.value.map(function (count, index) {
            return (<Clicker index={index} cursor={counts.refine(index)} />);
        }.bind(this));

        return (
            <div className="app-root">
               <div>{contents}</div>
               <pre>{JSON.stringify(cursor.value, undefined, 2)}</pre>
            </div>
        );
    }
});

module.exports = App;
