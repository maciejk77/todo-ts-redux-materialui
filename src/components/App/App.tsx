import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import AddItem from '../AddItem/AddItem';
import ItemsList from '../ItemsList/ItemsList';

const App = () => (
  <Container maxWidth="sm">
    <Typography style={{ textAlign: 'center', margin: 10 }} variant="h4">
      Todo List
    </Typography>
    <AddItem />
    <ItemsList />
  </Container>
);

export default App;
