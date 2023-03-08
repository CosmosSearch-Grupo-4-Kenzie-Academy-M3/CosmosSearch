import { Link } from "react-router-dom"

interface iLinkButton {
    text: string
    line?: boolean
    path: string
}

export const LinkButton = ({text, line, path}: iLinkButton) => {
  return (
    <div>
        <Link to={path} className="links">{text}</Link>
        {line ? <div className="links__line"/> : null}
    </div>
  )
}
