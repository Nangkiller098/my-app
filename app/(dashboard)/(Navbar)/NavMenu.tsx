import React from 'react'
import Image from 'next/image'
import style from './NavMenu.module.css'
import Link from 'next/link'

export default function NavMenu() {
  return (
    <div>
      <nav className={style.nav}>
        <Link href={''}>
        <Image 
        src={'/next.svg'}
        width={216}
        height={30}
         alt={'NextSpace Logo'}
          />
        </Link>
        <ul className={style.links}>
            <li>
                <Link href={'/about'}>About</Link>
            </li>
            <li>
                <Link href={'/blog'}>Blog</Link>
            </li>
            <li>
                <Link href={'/users'}>Users</Link>
            </li>
        </ul>
    </nav>
    </div>
  )
}
