import Link from "next/link"

interface IProps {
  children: React.ReactNode
}

export default function Root({ children }: IProps) {
  return (
    <html lang="en">
      <body>
      <header style={{border: "solid blue 1px"}}>
         <nav>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/reviews/hollow-knight">Hollow knight</Link>
            </li>
            <li>
              <Link href="/reviews/stardew-valley">Stardew valley</Link>
            </li>
          </ul>
         </nav>
      </header>
      {children}
      <footer style={{border: "solid green 1px"}}>[Footer]</footer>
      </body>
    </html>
  )
}
