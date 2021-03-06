// Dependencies
import React, { Component, PropTypes } from 'react';
import builder from 'focus-core-updated/component/builder';
import type from 'focus-core-updated/component/types';
import {uniqueId} from 'lodash';

class Title extends Component {

    static propTypes = {
        id: PropTypes.string,
        label: PropTypes.string
    };

    state = {
        spyId: uniqueId('title_')
    };

    render() {
        const { spyId } = this.state;
        const { id, label } = this.props;

        return (
            <div>
                <h3 data-spy={spyId} id={id}>{label}</h3>
            </div>
        );
    }
}

export default Title;
