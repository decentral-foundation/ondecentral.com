import React, {ReactNode} from "react";
import {Link} from "gatsby";

type TAppLinkProps = {
  href: string
  children: ReactNode
  external?: boolean
}

export default function AppLink(props: TAppLinkProps) {
  if (props.external) {
    return (
      <a href={props.href} >
        { props.children }
      </a>
    )
  }

  return (
    <Link to={props.href}>
      { props.children }
    </Link>
  )
}
