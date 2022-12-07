import React, {ReactNode} from "react";
import * as styles from './AppButton.module.scss'

type TAppButtonProps = {
  children: ReactNode
  inverted?: boolean
}

export default function AppButton(props: TAppButtonProps) {
  return (
    <button className={[
      styles.appButton, props.inverted ? styles.inverted : ''].join(' ').trim()}>
      { props.children }
    </button>
  )
}
