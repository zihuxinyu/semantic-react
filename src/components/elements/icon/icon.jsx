import React, { Component } from 'react';
import { returnTag } from '../../utilities';
import classNames from 'classnames';

export class Icon extends Component {
    static defaultProps = {
        defaultClasses: true
    };

    static propTypes = {
        aligned: React.PropTypes.string,
        bordered: React.PropTypes.bool,
        circular: React.PropTypes.bool,
        color: React.PropTypes.bool,
        corner: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        fitted: React.PropTypes.bool,
        flipped: React.PropTypes.string,
        inverted: React.PropTypes.bool,
        link: React.PropTypes.bool,
        loading: React.PropTypes.bool,
        name: React.PropTypes.string.isRequired,
        rotated: React.PropTypes.string,
        size: React.PropTypes.string,
        tag: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.func,
            React.PropTypes.string
        ]),
    };

    render() {
        let classes = {
            // default

            // variations
            bordered: this.props.bordered,
            circular: this.props.circular,
            corner: this.props.corner,
            disabled: this.props.disabled,
            fitted: this.props.fitted,
            link: this.props.link || this.props.onClick,
            inverted: this.props.inverted,
            loading: this.props.loading,

            // flipped variation
            horizontally: false,
            vertically: false,
            flipped: this.props.flipped,

            // rotated variation
            clockwise: false,
            counterclockwise: false,
            rotated: this.props.flipped,

            // aligned variation
            bottom: false,
            top: false,
            middle: false,
            aligned: this.props.aligned,         

            // component
            icon: this.props.defaultClasses
        };

        // handle all string or mixed string/bool props

        classes[this.props.aligned] = !!this.props.aligned;
        classes[this.props.size] = !!this.props.size;
        classes[this.props.color] = !!this.props.color;
        classes[this.props.flipped] = !!this.props.flipped;
        classes[this.props.rotated] = !!this.props.flipped;
        classes[this.props.name] = !!this.props.name;

        let Tag = returnTag(this.props.tag || React.DOM.i);

        // do other on completing docs

        return Tag({
            className: classNames(this.props.className, classes)
        });
    }

}