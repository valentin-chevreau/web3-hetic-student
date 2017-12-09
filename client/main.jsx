import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Studlist from '../imports/ui/Studlist.jsx';

Meteor.startup(() => {
    render(<Studlist />, document.getElementById('render-target'));
});
