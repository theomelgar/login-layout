'use client'
import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";
import Login from "@/components/Login/Login";

export default function Home() {
  return (
    <main className={styles.main}>
        <Login></Login>
    </main>
  );
}

const Container = styled.div`

`;
