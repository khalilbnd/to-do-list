import { AnimatePresence, motion } from 'framer-motion';
import React, { use, useEffect } from 'react';
import styles from '../styles/modules/dashboard.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getStatistics } from '../slices/todoSlice';

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

function AppDashboard() {
    const analyticsData = [
        { id: 1, title: 'Total Tasks', value: 120 },
        { id: 2, title: 'Completed Tasks', value: 80 },
        { id: 3, title: 'Pending Tasks', value: 40 },
    ];
    const dispatch = useDispatch();
    const statistics = useSelector((state) => state.todo.statistics);

    useEffect(() => {
        dispatch(getStatistics());
    }, [dispatch]);

    return (
        <motion.div
            className={styles.dashboard__wrapper}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            <AnimatePresence>
                    <motion.div variants={child} className={styles.card}>
                        <h3>Total Tasks</h3>
                        <p>{statistics.totalTasks}</p>
                    </motion.div>
                    <motion.div  variants={child} className={styles.card}>
                        <h3>Updated tasks</h3>
                        <p>{statistics.updatedTasks}</p>
                    </motion.div>
                    <motion.div variants={child} className={styles.card}>
                        <h3>Deleted Tasks</h3>
                        <p>{statistics.deletedTasks}</p>
                    </motion.div>
                
            </AnimatePresence>
        </motion.div>
    );
}

export default AppDashboard;