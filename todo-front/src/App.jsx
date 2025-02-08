import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';
import { fetchTodos } from './slices/todoSlice';
import { useDispatch } from 'react-redux';
import AppDashboard from './components/AppDashboard';

function App() {
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = React.useState([]);
  const [page, setPage] = React.useState('dashboard');
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <>
      <div className="container">
        <div style={{display: 'flex', alignItemss: 'center', justifyContent: 'center'}}>
        <PageTitle onClick={()=>setPage('todolist')} style={{color: page == "todolist" ?  "#646ff0" : "#646681" }}>TODO List</PageTitle>
        <PageTitle onClick={()=>setPage('dashboard')} style={{color: page == "dashboard" ?  "#646ff0" : "#646681" }}>Dashboard</PageTitle>
        </div>
        {
          page === 'dashboard' ? (
            <AppDashboard/>
          ) : (
            <div className={styles.app__wrapper}>
          <AppHeader selectedItem={selectedItem}  setSelectedItem={setSelectedItem} />
          <AppContent selectedItem={selectedItem}  setSelectedItem={setSelectedItem} />
        </div>
          )

        }
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
