import { useState } from "react";

import UserForm from "./components/users/userform/UserForm";
import UserList from "./components/users/userlist/UserList";

function App() {
  const [users, setUsers] = useState([{id: "u1", name: "Jhon Doe", age: "55"}]);

  return (
    <div>
      <UserForm onNewUser={user => setUsers(oldUsers => [...oldUsers, user])} />
      <UserList users={users} />
    </div>
  );
}

export default App;
