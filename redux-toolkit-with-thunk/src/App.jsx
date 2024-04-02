import { Provider } from 'react-redux';
import { store } from './store/store';
import UserProfile from './features/UserProfile.jsx';

function App() {
  return (
    <div>
      <Provider store={store}>
        <UserProfile />
      </Provider>
    </div>
  )
}

export default App
