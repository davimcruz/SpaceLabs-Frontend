import { useHistory } from 'react-router-dom';

function Dashboard() {
  const history = useHistory();

  history.push('/dashboard/overview');

}