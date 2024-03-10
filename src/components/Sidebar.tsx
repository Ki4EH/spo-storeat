import React from 'react';
import styles from "@/styles/Sidebar.module.scss";
import Image from 'next/image';
import Title from './Title';
import Links from './Links';
import Profile from './Profile';
  

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
            <div className={styles.tittle}><Title /></div>
            <div className={styles.account}><Profile /></div>
            <Links />
            
        </div>    
  )
}