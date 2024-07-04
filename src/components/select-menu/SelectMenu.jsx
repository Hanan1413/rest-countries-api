import styles from './SelectMenu.module.css'
import { useState } from 'react';

const SelectMenu = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Select an option');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className={styles.customSelect} style={{width:"200px"}}>
    <select>
      <option value="0" >Filter by Region:</option>
      <option value="1">Africa</option>
      <option value="2">America</option>
      <option value="3">Asia</option>
      <option value="4">Europe</option>
     
    </select>
  </div>
  );
}

export default SelectMenu;


