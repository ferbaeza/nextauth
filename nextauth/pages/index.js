import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Festivales from './Festivales';

export default function Home() {
    useEffect(() => {
      axios.get('http://festivales.test/api/index')
      //axios.get('http://festivales.test/notes/notes')
      .then((payload)=>{
          console.log(payload.data);
          //setNotas(payload.data)
          setFestivales(payload.data)
      }).catch((error)=>{
          console.log(error)
      })
  }, [])

  


const [festivales, setFestivales]= useState([

]);



  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <div className=''>
          <p className='has-background-black has-text-primary-light'>Signed in as {session.user.email}</p> <br />
          <button className='button is-dark' onClick={() => signOut()}>Sign out</button>
        </div>
        <div className='container'>
        <Festivales festivales={festivales} setFestivales={setFestivales}></Festivales>

        </div>
      </>
    )
  }
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>NextAuth</title>
        <meta name="description" content="Nextauth app" />
        <link rel="icon" href="/code.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="has-text-link-dark is-size-1">NextAuth</h1>
        <p className='has-text-danger'>Not signed in </p><br />
        <div class="main_login">
          <div class="logo">
            <img id="logo" src="./img/logo.png" />
          </div>
          <form id="formLogin" method="POST">
            <h1 id="signin">Please sign in</h1>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input class="input" type="email" placeholder="Email" />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Password" />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div class="field m-auto">
              <p class="control m-auto">
                <button class="button is-success ml-6 mr-6">Login</button>
                <button className='button is-link ml-6' onClick={() => signIn()}>LoginAuth</button>
              </p>
            </div>
          </form>
        </div>
        <div class="backhome mt-6">
          <p id="log_p">
            <i class="fas fa-copyright"></i>2022 Fernando Baeza CodeIgniter
            Project <i class="fas fa-registered"></i>
          </p>
        </div>
      </main>

      <footer className="">
        <p>Powered by Fernando Baeza</p>
      </footer>
    </div>
    </>
  )
}
