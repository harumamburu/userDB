import { useState } from "react";
import { v4 as uuid } from "uuid";

import Button from "../../ui/Button";
import Card from "../../ui/Card";
import Input from "../../ui/Input";

const UserForm = props => {
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [age, setAge] = useState("");
  const [isAgeValid, setIsAgeValid] = useState(true);

  const submitHandler = event => {
    event.preventDefault();
    if (name && isNameValid && age && isAgeValid) {
      props.onNewUser({ id: uuid(), name: name, age: age });
      setName("");
      setAge("");
    }
  };

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
      <form onSubmit={submitHandler}>
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
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;
