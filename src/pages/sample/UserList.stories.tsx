import React from 'react';

import UserList from './UserList';

export default { title: 'UserList' };

export const withEmptyUsers: React.FC = () => <UserList users={[]} />;

export const withUsers: React.FC = () => (
  <UserList users={[{ id: 1, login: 'abc', url: 'abc' }, { login: 'xyz', id: 2, url: 'url' }]} />
);
