import { Link } from "react-router-dom"

type Props = {
    to: string;
    children?: React.ReactNode;
    align?: 'end' | 'center' | 'start';
}

const LinkBuilder = ({to, children, align = 'center'}: Props) => {
  const alignment = 'flex-'+align
  return (
    <div className={`flex ${alignment} mt-1`}>
    <Link to={to} className="unstyled-link">
        <button className="btn text-normal btn-gradient">
            {children}
        </button>
    </Link>

</div>
  )
}

export default LinkBuilder