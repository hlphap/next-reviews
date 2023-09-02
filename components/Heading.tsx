interface IProps {
  children: React.ReactNode;
}

export default function Heading({ children }: IProps) {
  return <h1 className="font-bold pb-3 text-2xl font-orbitron">{children}</h1>;
}
