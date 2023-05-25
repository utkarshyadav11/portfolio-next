"use client";
import React from 'react'
import Link from "next/link";
import styles from "@/app/styles/page.module.css";

const Footer = () => {
  return (
    <>
    <div className={styles.footer}>Copyright © 2023 <Link href="https://utkarshyadav.web.app/" >Utkarsh.</Link> All Rights Reserved.</div>


    </>
  )
}

export default Footer
