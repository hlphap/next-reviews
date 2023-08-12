interface IProps {
  children: React.ReactNode
}

export default function Root({ children }: IProps) {
  return (
    <html lang="en">
      <body>
      <header>[Header]</header>
      {children}
      <footer>[Footer]</footer>
      </body>
    </html>
  )
}
