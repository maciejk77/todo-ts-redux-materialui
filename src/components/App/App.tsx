import { Dispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, editTodo, setTodoStatus } from '../../redux/todoSlice';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import AddItem from '../AddItem/AddItem';

const App = () => {
  const todoList = useSelector((state: RootState) => state);
  const dispatch = useDispatch<Dispatch>();

  return (
    <Container maxWidth="sm">
      <Typography style={{ textAlign: 'center', margin: 10 }} variant="h4">
        Todo List
      </Typography>
      <AddItem />
      <List>
        {todoList.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText
              onChange={() => dispatch(editTodo('foo'))}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.description}
            </ListItemText>

            <IconButton
              onClick={() => {
                dispatch(removeTodo(todo.id));
              }}
            >
              <DeleteIcon />
            </IconButton>
            <Checkbox
              edge="end"
              value={todo.completed}
              onChange={() => {
                dispatch(
                  setTodoStatus({ completed: !todo.completed, id: todo.id })
                );
              }}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default App;
