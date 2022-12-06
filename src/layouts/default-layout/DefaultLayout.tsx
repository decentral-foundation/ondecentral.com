import React, {ReactNode} from "react";
import '../../assets/styles/global.scss'

type TDefaultLayoutProps = {
  children: ReactNode
}

export default function DefaultLayout(props: TDefaultLayoutProps) {
  return (
    <>
      { props.children}
    </>
  )
}
