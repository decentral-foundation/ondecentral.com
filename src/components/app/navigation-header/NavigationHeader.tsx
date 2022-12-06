import React from "react";
import * as styles from './NavigationHeader.module.scss'
import FOUNDERS_KIT_LOGO from '../../../assets/images/logo.svg'
import IC_MENU from '../../../assets/icons/ic-menu.svg'
import IC_CLOSE from '../../../assets/icons/ic-close.svg'
import {navigationItems, useNavigationHeader} from "./useNavigationHeader";
import AppLink from "../app-link/AppLink";

// type TNavigationHeaderProps = {}

export default function NavigationHeader() {
  const { gWindow, openMobileNavigation, isNavigationOpen } = useNavigationHeader()
  return (
    <header className={styles.navigationHeader}>
      <div className={styles.container}>
        <img src={FOUNDERS_KIT_LOGO} alt={'Founders Kit'} height={15} />

        <ul className={styles.navigationMenu}>
          { navigationItems.map(item => (
            <AppLink key={item.id} href={item.path}>
              <li className={[
                  styles.menuItem,
                  gWindow?.location.pathname === item.path ? styles.active : ''
                ].join(' ').trim()}
              >
                { item.name }
              </li>
            </AppLink>
          ))}
        </ul>

        <div className={styles.mobileMenuIcon}>
          <img src={isNavigationOpen ? IC_CLOSE : IC_MENU} alt={'Founders kit Menu'} onClick={openMobileNavigation} />
        </div>
      </div>
    </header>
  )
}
