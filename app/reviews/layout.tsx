interface IProps {
  children: React.ReactNode;
}

export default function ReviewsLayout({ children }: IProps) {
  return (
    <div style={{ display: "flex" }}>
      <div>{children}</div>
    </div>
  );
}
