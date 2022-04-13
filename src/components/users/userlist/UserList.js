import Card from "../../ui/Card";
import styles from "./UserList.module.css";

const UserList = props => {
  return (
    <Card>
      <ul className={styles["list"]}>
        {props.users.map(user => (
          <li key={user.id}>{user.name + " (" + user.age + " years old)"}</li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;