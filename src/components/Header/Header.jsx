import React from 'react'
import { TopNav } from './TopNav/TopNav'
import styles from './Header.module.scss';
import { MiddleNav } from './MiddleNav/MiddleNav';
import { BottomNav } from './BottomNav/BottomNav';
import { Breadcrumbs } from './Breadcrumbs/Breadcrumbs';


export const Header = ({cart, toggleDrawer}) => {
  return (
    <div className={styles.header}>
      <TopNav/>
      <MiddleNav cart={cart} toggleDrawer={toggleDrawer}/>
      <BottomNav/>
      <Breadcrumbs/>
    </div>
  )
}
