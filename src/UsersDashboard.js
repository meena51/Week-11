// UsersDashboard.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectUser, removeUser } from './usersSlice';
import UserTable from './UserTable';
import UserDropdown from './UserDropdown';

const UsersDashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.list);
  const selectedUser = useSelector(state => state.users.selectedUser);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleUserSelect = (userId) => {
    dispatch(selectUser(userId));
  };

  const handleRemoveUser = (userId) => {
    dispatch(removeUser(userId));
  };

  return (
    <div>
      <h2>Users Dashboard</h2>
      <UserDropdown users={users} onSelect={handleUserSelect} />
      <UserTable users={users} selectedUser={selectedUser} onRemove={handleRemoveUser} />
    </div>
  );
};

export default UsersDashboard;
