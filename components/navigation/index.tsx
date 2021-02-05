import { useRouter } from "next/router"
import Link from "next/link"
import { ReactNode } from "react"

import styles from "./Navigation.module.css"

const LINKS = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "About",
    path: "/about"
  }
]

type NavAnchorType = {
  path: string
  children: ReactNode
}

function NavAnchor({ path, children }: NavAnchorType) {
  return (
    <Link href={path}>
    <a className={styles.navAnchor}>{children}</a>
  </Link>
  )
}

export default function Navigation() {
  const { pathname } = useRouter();
  return (
    <nav>
      <ul className={styles.list}>
        {
          LINKS.map(({name,path}) => {
            return (
              <li key={name}>{path === pathname ? <span>{name}</span> : <NavAnchor path={path}>{name}</NavAnchor> }</li>
            )
          })
        }
      </ul>
    </nav>
  )
}