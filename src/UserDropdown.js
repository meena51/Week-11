// UserDropdown.js
import React from 'react';

const UserDropdown = ({ users, onSelect }) => {
  return (
    <div>
      <select onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select User</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>{`${user.id} - ${user.name}`}</option>
        ))}
      </select>
    </div>
  );
};

export default UserDropdown;
