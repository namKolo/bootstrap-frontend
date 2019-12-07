import React from 'react';

import UserList from './UserList';

export default { title: 'UserList' };

export const withEmptyUsers = () => <UserList users={[]} />;

export const withUsers = () => <UserList users={[{ login: 'abc' }, { login: 'xyz' }]} />;
