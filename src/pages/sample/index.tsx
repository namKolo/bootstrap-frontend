import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// store
import { fetchGithubUsers, GithubUser } from 'store/sampleReducer';
import { IApplicationState } from 'store';

const SamplePage = () => {
  const dispatch = useDispatch();
  const result = useSelector((state: IApplicationState) => state.sample);

  useEffect(() => {
    if (!result.loaded && !result.loading) {
      dispatch(fetchGithubUsers());
    }
  }, [result, dispatch]);

  return (
    <div>
      {result.loading && <div>Loading...</div>}
      {result.loaded && (
        <div>
          {result.data.map(user => (
            <User user={user} key={user.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SamplePage;

interface UserProps {
  user: GithubUser;
}
const User: React.FC<UserProps> = ({ user }) => {
  return <div>{user.login}</div>;
};
