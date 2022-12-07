import React from "react";
import * as styles from './HomeBandTwo.module.scss'
import AppButton from "../../../app/app-button/AppButton";
import AppLink from "../../../app/app-link/AppLink";
import TASKS_ILLUSTRATION from '../../../../assets/images/tasks-illustrations.svg'
import AMPERSAND_ILLUSTRATION from '../../../../assets/images/ampersand.svg'
import MIND_NUMBINGLY_ARROW_ILLUSTRATION from '../../../../assets/images/mind-numbingly-arrow.svg'

export default function HomeBandTwo() {
  return (
    <section className={styles.homeBandTwo}>
      <div className={styles.container}>
        <div className={styles.columnOne}>
          <img
            src={TASKS_ILLUSTRATION}
            alt={'Run your back-office financials on autopilot'}
            className={styles.illustration}
          />
        </div>

        <div className={styles.columnTwo}>
          <div className={styles.headingContainer}>
            <h1 className={styles.heading}>
              Ditch the <span className={styles.boringText}>
              <img src={MIND_NUMBINGLY_ARROW_ILLUSTRATION} alt={'mind numbingly'} className={styles.illustration}/>
              boring </span>
              <br />
              tedious busywork
            </h1>
            <img src={AMPERSAND_ILLUSTRATION} alt={'and'} className={styles.ampersand} />
          </div>

          <p className={styles.caption}>
            <span className={styles.tagline}>
              Run your back-office financials on autopilot so your team can huddle up & tackle more pressing challenges
            </span>
            <span className={styles.tinyCaption}>
              (you know, like how we’re gonna save the bees, or convince the BBC to produce another final, *final* season of Peaky Blinders, or somehow prevent Earth from moving out of the habitable zone...)
            </span>
          </p>

          <div className={styles.actionsContainer}>
            <AppLink href={'https://portal.founderskit.org'} external>
              <AppButton inverted>
                OK F-KIT!
              </AppButton>
            </AppLink>
          </div>
        </div>
      </div>
    </section>
  )
}
