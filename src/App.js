import {useState} from 'react';

import UserForm from './components/users/userform/UserForm';
import UserList from './components/users/userlist/UserList';

const App = () => {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <UserForm onNewUser={(user) =>
        setUsers((oldUsers) => [...oldUsers, user])} />
      {users.length ? <UserList users={users} /> : ''}
    </div>
  );
};

export default App;
