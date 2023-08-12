interface IProps {
  children: React.ReactNode
}

export default function ReviewsLayout({ children }: IProps) {
  return (
    <div style={{display: "flex"}}>
      <div style={{border: "solid red 1px"}}>
        [Review sidebar]
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}