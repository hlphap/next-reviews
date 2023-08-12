interface IProps {
  children: React.ReactNode
}

export default function Root({ children }: IProps) {
  return (
    <html lang="en">
      <body>
      <header style={{border: "solid blue 1px"}}>[Header]</header>
      {children}
      <footer style={{border: "solid green 1px"}}>[Footer]</footer>
      </body>
    </html>
  )
}
