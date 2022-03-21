
import Todos from './components/Todos';
import store from './store/index';
import { Provider } from 'react-redux';
import Api from './components/Api';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todos />
      </div>
      <Api />
    </Provider>

  );
}

export default App;
