import React from "react";
import * as styles from './HomeHeroSection.module.scss'
import AppLink from "../../../app/app-link/AppLink";
import AppButton from "../../../app/app-button/AppButton";
import BS_BUTTON from '../../../../assets/images/bs-button.svg'
import APPLICATION_SHOT from '../../../../assets/images/application-shot.jpg'

export default function HomeHeroSection() {
  return (
    <section className={styles.homeHeroSection}>
      <div className={styles.container}>
        <div className={styles.columnOne}>
          <div className={styles.headingContainer}>
            <h1 className={styles.heading}>
              Automate
              <br />
              the back-end
            </h1>
            <img src={BS_BUTTON} alt={'automate'} className={styles.bsButton} />
          </div>
          <p className={styles.caption}>
            Forget about lying awake on the kitchen floor at 3 a.m., mulling over whether your product release puts you at risk  for meeting compliance and regulatory requirements
          </p>
          <div className={styles.actionsContainer}>
            <AppLink href={'https://portal.founderskit.org'} external>
              <AppButton inverted>
                GET EARLY ACCESS
              </AppButton>
            </AppLink>
            <AppLink href={'https://portal.founderskit.org'} external>
              <AppButton>
                SCHEDULE A DEMO
              </AppButton>
            </AppLink>
          </div>
        </div>
        <div className={styles.columnTwo}>
          <img src={APPLICATION_SHOT} className={styles.applicationPreview} />
        </div>
      </div>
    </section>
  )
}
