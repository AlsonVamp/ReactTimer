var React = require('react');

var Clock = React.createClass({
    propTypes: {
        totalSeconds: React.PropTypes.number
    },
    formatSeconds: (totalSeconds) => {
        var seconds = totalSeconds % 60;
        var minutes = Math.floor(totalSeconds / 60);
        return (minutes >= 10 ? minutes : ("0" + minutes)) + ":" + (seconds >= 10 ? seconds : ("0" + seconds));
    },
    render: function () {
        var {totalSeconds} = this.props;
        return (
            <div className="clock">
                <span className="clock-text">{this.formatSeconds(totalSeconds)}</span>
            </div>
        )
    },
    getDefaultProps: function () {
        return {
            totalSeconds: 0
        }
    },
})

module.exports = Clock;