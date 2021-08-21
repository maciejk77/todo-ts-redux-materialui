import { Dispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, editTodo, setTodoStatus } from '../../redux/todoSlice';
import { Todo } from '../../models/Todo';

import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';

const ItemsList = () => {
  const todoList = useSelector((state: RootState) => state);
  const dispatch = useDispatch<Dispatch>();

  const handleTextChange = (e: any) => {
    const { id, value } = e.target;
    dispatch(editTodo({ id, description: value }));
  };

  const handleCheckboxChange = ({ id, completed }: Todo) => {
    dispatch(setTodoStatus({ completed: !completed, id }));
  };

  const handleButtonClick = ({ id }: Todo) => {
    dispatch(removeTodo(id));
  };

  return (
    <List>
      {todoList.map((todo) => (
        <ListItem key={todo.id}>
          <TextField
            id={todo.id}
            value={todo.description}
            fullWidth
            onChange={handleTextChange}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.description}
          </TextField>

          <IconButton onClick={() => handleButtonClick(todo)}>
            <DeleteIcon />
          </IconButton>

          <Checkbox
            edge="end"
            onChange={() => handleCheckboxChange(todo)}
            value={todo.completed}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ItemsList;
