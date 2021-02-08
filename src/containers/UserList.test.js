import React from 'react'
import renderer from 'react-test-renderer';

import UserList from './UserList'

it("renders when there are no users", () => {
    const tree = renderer.create(
        <UserList />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});