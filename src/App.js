import { useState } from "react";

import UserForm from "./components/users/userform/UserForm";

function App() {
  const [users, setUsers] = useState([{id: "u1", name: "Jhon Doe", age: "55"}]);

  return (
    <div>
      <UserForm onNewUser={user => setUsers(oldUsers => [...oldUsers, user])} />
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name + ": " + user.age}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
