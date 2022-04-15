import PropTypes from 'prop-types';
import {useEffect, useReducer, useState} from 'react';
import {v4 as uuid} from 'uuid';

import Button from '../../ui/Button';
import Card from '../../ui/Card';
import Input from '../../ui/Input';
import Modal from '../../ui/Modal';

const formStateReducer = (oldState, action) => {
  const validation = (field, value) => {
    switch (field) {
      case 'name':
        return !!!(value?.trim().length === 0 || value?.match(/([\d]|^[\s]+$)/));
      case 'age':
        return +value > 0;
      default:
        return false;
    }
  };

  switch (action.type) {
    case 'INPUT':
      return {
        value: action.value,
        isValid: validation(action.field, action.value),
      };
    case 'RESET':
    default:
      return {value: '', isValid: null};
  }
};

const UserForm = (props) => {
  const [nameState, dispatchName] = useReducer(formStateReducer, {value: '', isValid: null});
  const [ageState, dispatchAge] = useReducer(formStateReducer, {value: '', isValid: null});
  const [isModalActive, setIsModalActive] = useState(null);

  useEffect(() => {
    const validationTimeout = setTimeout(() => {
      setIsModalActive(nameState.isValid === false || ageState.isValid === false);
    }, 700);
    return () => clearTimeout(validationTimeout);
  }, [nameState.isValid, ageState.isValid]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (nameState.isValid && ageState.isValid) {
      props.onNewUser({id: uuid(), name: nameState.value, age: ageState.value});
      dispatchName({type: 'RESET', field: 'name'});
      dispatchAge({type: 'RESET', field: 'age'});
    }
  };

  return (
    <Card>
      {(isModalActive === true) &&
        <Modal
          onClose={() => setIsModalActive(false)}
          title="Invalid Input"
          messages={[
            nameState.isValid === false && 'Name shouldn\'t be empty or contain digits.',
            ageState.isValid === false && 'Age shouldn\'t be less than zero.',
          ]}
        />
      }
      <form onSubmit={submitHandler}>
        <Input
          label="Name"
          type="text"
          value={nameState.value}
          isInvalid={nameState.isValid === false}
          onChange={(value) => dispatchName({type: 'INPUT', field: 'name', value: value})}
        />
        <Input
          label="Age (Years)"
          type="number"
          value={ageState.value}
          isInvalid={ageState.isValid === false}
          onChange={(value) => dispatchAge({type: 'INPUT', field: 'age', value: value})}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

UserForm.propTypes = {
  onNewUser: PropTypes.func.isRequired,
};

export default UserForm;
