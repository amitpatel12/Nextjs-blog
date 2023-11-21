'use client'
import React, { useContext } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { ThemeContext } from "@/context/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
     <div className={styles.social}>
     {
      theme === 'dark' ? <Image src="/2wh.svg" alt="logo" width={60} height={60} /> 
      : <Image src="/1.svg" alt="logo" width={60} height={60} />
     }
      </div>
      <div className={styles.logo}>LunaPulse</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
