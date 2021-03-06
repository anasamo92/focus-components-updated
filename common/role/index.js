import React from 'react';
import builder from 'focus-core-updated/component/builder';
import user from 'focus-core-updated/user';

import {intersection} from 'lodash';
import {isArray} from 'lodash';

import type from 'focus-core-updated/component/types';

/**
 * Mixin button.
 * @type {Object}
 */
let roleMixin = {
    propTypes: {
        hasOne: type('array'),
        hasAll: type('array')
    },
    componentWillMount() {
        console.warn('FocusComponents 2.2.0: this component is deprecated, please use focus-components-updated/components/role instead');
    },
    render() {
        let userRoles = user.getRoles();
        if (isArray(this.props.hasAll) && intersection(userRoles, this.props.hasAll).length === this.props.hasAll.length) {
            return this.props.children;
        } else if (isArray(this.props.hasOne) && intersection(userRoles, this.props.hasOne).length > 0) {
            return this.props.children;
        }
        return null;

    }
};

const { mixin, component } = builder(roleMixin);
export { mixin, component };
export default { mixin, component };
