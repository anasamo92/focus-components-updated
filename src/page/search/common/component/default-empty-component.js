// Dependencies
import React from 'react';
import { translate } from 'focus-core-updated/translation';

function DefaultEmpty() {
    return (
        <div data-focus='empty-result'>
            {translate('search.empty')}
        </div>
    );
}

export default DefaultEmpty;
