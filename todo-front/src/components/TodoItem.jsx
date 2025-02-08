import { format } from 'date-fns';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../slices/todoSlice';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';
import CheckButton from './CheckButton';
import TodoModal from './TodoModal';

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  useEffect(() => {
    if (todo.status === 'complete') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({ ...todo, isCompleted: checked })
    );
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success('Todo Deleted Successfully');
  };

  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };

  return (
    <>
      <motion.div className={styles.item} variants={child}>
        <div className={styles.todoDetails} onClick={handleCheck}>
          <div className={styles.texts}>
            <p
              className={getClasses([
                styles.todoText,
                todo.isCompleted && styles['todoText--completed'],
              ])}
            >
              {todo.title}
            </p>
            <p className={getClasses([styles.todoDescription])}>
              {todo.description}
            </p>
            <p className={styles.time}>
              {format(new Date(todo.createdAt), 'p, MM/dd/yyyy')}
            </p>
          </div>
        </div>
        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
            onKeyDown={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
            tabIndex={0}
            role="button"
          >
            <MdDelete />
          </div>
          <div
            className={styles.icon}
            onClick={(e) => {
              e.stopPropagation();
              handleUpdate();
            }}
            onKeyDown={(e) => {
              e.stopPropagation();
              handleUpdate();
            }}
            tabIndex={0}
            role="button"
          >
            <MdEdit />
          </div>
        </div>
      </motion.div>
      <TodoModal
        type="update"
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
        todo={todo}
      />
    </>
  );
}

export default TodoItem;
