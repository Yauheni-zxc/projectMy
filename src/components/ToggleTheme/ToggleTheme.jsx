import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../features/basketCount/addTheme';
import styles from './Theme.module.css'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const ThemeToggle = () => {

  const isDarkMode = useSelector(state => state.themes.isDarkTheme);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <button className={styles.theme}  onClick={()=>handleToggleTheme()} >
      {isDarkMode ? <MdDarkMode className={styles.dark} /> : <MdLightMode className={styles.light} />}
      
    </button>
  
  );
};

export default ThemeToggle;