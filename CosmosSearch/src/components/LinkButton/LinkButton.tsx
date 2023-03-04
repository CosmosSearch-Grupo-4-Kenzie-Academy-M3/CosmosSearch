interface iLinkButton {
    text: string
    line?: boolean
}

export const LinkButton = ({text, line}: iLinkButton) => {
  return (
    <div>
        <a href="#" className="links">{text}</a>
        {line ? <div className="links__line"/> : null}
    </div>
  )
}
