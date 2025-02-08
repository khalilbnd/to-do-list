import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';
import { fetchTodos } from './slices/todoSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = React.useState([]);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <>
      <div className="container">
        <PageTitle>TODO List</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader selectedItem={selectedItem}  setSelectedItem={setSelectedItem} />
          <AppContent selectedItem={selectedItem}  setSelectedItem={setSelectedItem} />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  );
}

export default App;
