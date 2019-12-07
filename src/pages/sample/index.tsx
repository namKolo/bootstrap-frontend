import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// store
import { getGithubUsersAction } from 'store/sampleReducer';
import { IApplicationState } from 'store';

import UserList from './UserList';

const SamplePage = () => {
  const dispatch = useDispatch();
  const result = useSelector((state: IApplicationState) => state.sample);

  useEffect(() => {
    if (!result.loaded && !result.loading) {
      dispatch(getGithubUsersAction.request());
    }
  }, [result, dispatch]);

  return (
    <div>
      {result.loading && <div>Loading...</div>}
      {result.loaded && <UserList users={result.data} />}
    </div>
  );
};

export default SamplePage;
