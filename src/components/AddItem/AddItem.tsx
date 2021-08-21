import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from '../../redux/store';
import { addTodo } from '../../redux/todoSlice';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const AddItem = () => {
  const [todoDescription, setTodoDescription] = useState('');
  const dispatch = useDispatch<Dispatch>();

  return (
    <>
      <TextField
        variant="outlined"
        label="type here"
        fullWidth
        onChange={(e) => setTodoDescription(e.target.value)}
        style={{ marginBottom: 10 }}
        value={todoDescription}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => {
          dispatch(addTodo(todoDescription));
          setTodoDescription('');
        }}
        style={{ borderRadius: 0 }}
      >
        Add Item
      </Button>
    </>
  );
};

export default AddItem;
