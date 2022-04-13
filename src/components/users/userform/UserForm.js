import { useState } from "react";
import { v4 as uuid } from "uuid";

import Card from "../../ui/Card";
import Input from "../../ui/Input";
import styles from "./UserForm.module.css";

const UserForm = props => {
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [age, setAge] = useState("");
  const [isAgeValid, setIsAgeValid] = useState(true);

  const nameInputHandler = name => {
    setName(name);
    setIsNameValid(!!name && !name.match(/[\d]/));
  };

  const ageInputHandler = age => {
    setAge(age);
    setIsAgeValid(!!age && parseInt(age) > 0);
  };

  return (
    <Card>
      <form>
        <Input
          label="Name"
          isValid={isNameValid}
          onChange={nameInputHandler}
          type="text"
        />
        <Input
          label="Age (Years)"
          onChange={ageInputHandler}
          isValid={isAgeValid}
          type="number"
        />
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;
