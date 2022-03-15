
import Todos from './components/Todos';
import store from './store/index';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todos />
      </div>
    </Provider>

  );
}

export default App;
