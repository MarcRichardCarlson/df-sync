import React from 'react';
import { motion } from 'framer-motion';
import Profile from './Profile';
import Toggle from '../../shared/Toggle';
import Divider from '../../shared/XDivider';

interface UtilsProps {
    isOpen: boolean;
}

const Dropdown: React.FC<UtilsProps> = ({ isOpen }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -100, zIndex: -1 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`${
                isOpen ? 'absolute' : 'hidden'
            } flex flex-col gap-3 p-6 rounded-bl-xl top-20 right-0 h-96 bg-CustomWhite text-black w-full sm:w-72`}
            id="navbar-default"
        >
            <Profile />
            <Divider />
            <Toggle />
        </motion.div>
    );
};

export default Dropdown;