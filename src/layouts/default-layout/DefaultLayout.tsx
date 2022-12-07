import React, {ReactNode} from "react";
import '../../assets/styles/global.scss'

export type TDefaultLayoutProps = {
  children: ReactNode
}

export default function DefaultLayout(props: TDefaultLayoutProps) {
  return (
    <>
      { props.children}
    </>
  )
}
