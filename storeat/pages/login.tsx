import style from '../styles/login.module.css'
import "../app/globals.css";
import Image from 'next/image'
import Title from '../components/title'
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Main from './main' 

export default function LoginPage() {
  const router = useRouter()
 
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
 
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
 
    if (response.ok) {
      router.push('/profile')
    } else {
      // Handle errors
    }
  }
 
  return (
    <div className={style.back}>

      <div className={style.register}>
      <div className={style.img_leaves}>
      <Image
        src="\leaves-2-svgrepo-com 1.svg"
        width={218}
        height={207}
        alt=""
      />
      </div>
      <div className={style.title}>
          <Title />
      </div>
      <form className={style.form_login} onSubmit={handleSubmit}>
        <input className={style.login_email} type="email" name="email" placeholder="Введите логин" required />
        <input className={style.login_password} type="password" name="password" placeholder="Введите пароль" required />
        <button className={style.login_btn} type="submit">Войти</button>
      </form>
      <div className={style.img}>
        <Image
        src='/Login.svg'
        width={854}
        height={318}
        alt=''
        />
      </div>
    </div>
    </div>
    
  )
}

