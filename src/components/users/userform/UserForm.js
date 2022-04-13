import { useState } from "react";

import Card from "../../ui/Card";
import Input from "../../ui/Input";
import styles from "./UserForm.module.css";

const UserForm = props => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <Card>
      <form>
        <Input
          label="Name"
          onInput={name => setName(name)}
          required={true}
          type="text"
          validate={value => value && !value.match(/[\d]/)}
          value={name}
        />
        <Input
          label="Age (Years)"
          onInput={age => setAge(age)}
          required={true}
          type="number"
          validate={value => value && value > 0}
          value={age}
        />
      </form>
    </Card>
  );
};

export default UserForm;
