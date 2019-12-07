import React from 'react';

// app types
import { GithubUser } from 'types';

type Props = {
  users: GithubUser[];
};

const UserList: React.FC<Props> = ({ users }) => {
  return (
    <div>
      {users.length === 0 && <div>No Users</div>}
      {users.map(user => (
        <User user={user} />
      ))}
    </div>
  );
};

type UserProps = {
  user: GithubUser;
};
const User: React.FC<UserProps> = ({ user }) => {
  return <div>User {user.login}</div>;
};

export default UserList;
