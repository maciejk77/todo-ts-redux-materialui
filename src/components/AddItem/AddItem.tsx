import { useState, ChangeEvent, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';
import { Dispatch } from '../../redux/store';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const AddItem = () => {
  const [todoDescription, setTodoDescription] = useState('');
  const dispatch = useDispatch<Dispatch>();

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodoDescription(value);
  };

  const handleButtonClick = (e: SyntheticEvent) => {
    if (!todoDescription.trim()) {
      setTodoDescription('');
      return;
    }
    dispatch(addTodo(todoDescription));
    setTodoDescription('');
  };

  return (
    <>
      <TextField
        fullWidth
        label="type here"
        onChange={handleTextChange}
        style={{ marginBottom: 10 }}
        value={todoDescription}
        variant="outlined"
      />
      <Button
        color="primary"
        fullWidth
        onClick={handleButtonClick}
        style={{ borderRadius: 0 }}
        variant="contained"
      >
        Add Item
      </Button>
    </>
  );
};

export default AddItem;
