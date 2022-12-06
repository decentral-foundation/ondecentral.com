import React from "react";
import {navigationItems} from "../navigation-header/useNavigationHeader";
import AppLink from "../app-link/AppLink";
import * as styles from './MobileNavigation.module.scss'
import useMobileNavigation from "./useMobileNavigation";

export default function MobileNavigation() {
  const { isNavigationOpen } = useMobileNavigation()

  if(!isNavigationOpen) return null

  return (
    <aside className={styles.mobileNavigation}>
      <ul className={styles.navigationItems}>
        { navigationItems.map(item => (
          <AppLink key={item.id} href={item.path}>
            <li className={styles.navigationItem}>
              { item.name }
            </li>
          </AppLink>
        )) }
      </ul>
    </aside>
  )
}
