import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/modules/app.module.scss';
import TodoItem from './TodoItem';
import CheckButton from './CheckButton';

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function AppContent({selectedItem, setSelectedItem}) {
  const todoList = useSelector((state) => state.todo.todoList);
  const filterStatus = useSelector((state) => state.todo.filterStatus);

  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === 'all') {
      return true;
    }
    else if (filterStatus === 'complete') {
      return item.isCompleted;
    }
    else  {
      return !item.isCompleted;
    }
  });


  return (
    <motion.div
      className={styles.content__wrapper}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {filteredTodoList && filteredTodoList.length > 0 ? (
          filteredTodoList.map((todo) => (
             <motion.div key={todo.id} variants={child} style={{display: 'flex', alignItems: 'center'}}>
              <motion.div variants={child} style={{display: 'flex', marginRight: '10px'}}>
              <CheckButton 
                
              checked={selectedItem.includes(todo.id)}  handleCheck={
                ()=> {                  
                  if(!selectedItem.includes(todo.id)){
                    setSelectedItem([...selectedItem, todo.id])
                  } else {
                    setSelectedItem(selectedItem.filter((id) => id !== todo.id))
                  }
                }}/>
              </motion.div>

            <TodoItem 
              key={todo.id} 
              todo={todo} 
              
              />
              
              </motion.div>
          ))
        ) : (
          <motion.p variants={child} className={styles.emptyText}>
            No Todos
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default AppContent;
