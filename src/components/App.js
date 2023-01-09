import React, { useState, useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";
import { Button, theme, mixins, media, Section, Heading } from '../styles';
import Modal from 'react-modal';
import styles from "./Modal.module.css";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';
import classNames from 'classnames';
import i1 from './Images/i1.png';
import i2 from './Images/i2.png';
import i3 from './Images/i3.png';
import i4 from './Images/i4.png';
import i5 from './Images/i5.png';
import i6 from './Images/i6.png';
import i7 from './Images/i7.png';
import i8 from './Images/i8.png';
import i9 from './Images/i9.png';
import i10 from './Images/i10.png';
import i11 from './Images/i11.png';



const languages = [
  {
    code: 'de-DE',
    name: 'Deutsche',
    country_code: 'DE',
  },
  {
    code: 'en-GB',
    name: 'English',
    country_code: 'GB',
  },
  {
    code: 'zh-HK',
    name: '中國人',
    country_code: 'HK',
  },
  {
    code: 'zh-TW',
    name: '中國人',
    country_code: 'TW',
  },
  {
    code: 'zh-CN',
    name: '中国人',
    country_code: 'CN',
  },
  {
    code: 'ko-KR',
    name: '한국어',
    country_code: 'KR',
  },
]

const GlobeIcon = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    className="bi bi-globe"
    viewBox="0 0 16 16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
  </svg>
)


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '70%',
    color: '#fff',
    backgroundColor: '#000',
    overflow: 'hidden'
  },
};



function App() {

  const currentLanguageCode = cookies.get('i18next') || 'en-GB'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()


  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    console.log('Setting page stuff')
    
    
  }, [currentLanguage, t])

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#fff';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <a onClick={openModal} style={{ flexDirection: "column", alignItems: "flex-start" }}>{t('welcome_message')} </a>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} >
        {t('welcome_message')}
        </h2>
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
          <RiCloseLine style={{ marginBottom: "-3px" }} />
        </button>
        <div className={styles.scrolltext}>
          <div className="container">
            <div className="language-select">
              <div className="d-flex justify-content-end align-items-center language-select-root">
                <div className="dropdown">
                  <button
                    className="btn btn-link dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <GlobeIcon />
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                      <span className="dropdown-item-text">{t('language')}</span>
                    </li>
                    {languages.map(({ code, name, country_code }) => (
                      <li key={country_code}>
                        <a
                          href="#"
                          className={classNames('dropdown-item', {
                            disabled: currentLanguageCode === code,
                          })}
                          hreflang={country_code}

                          onClick={() => {
                            i18next.changeLanguage(code)
                          }}
                        >
                          <span
                            className={`flag-icon flag-icon-${country_code} mx-2`}
                            style={{
                              opacity: currentLanguageCode === code ? 0.5 : 1,
                            }}
                          ></span>
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column align-items-start">
              

              <div>{t('data')} </div>

              <h3 className="font-weight-normal mb-3">{t('l2')}</h3>
              <h4 className="font-weight-normal mb-3">{t('para1')}</h4>
              <h4 className="font-weight-normal mb-3">{t('para2')}</h4>
              <h3 className="font-weight-normal mb-3">{t('l3')}</h3>
              <h4 className="font-weight-normal mb-3">{t('para3')}</h4>
                <div>
                <img src={i1} alt="[Generate a cap table with a few clicks. No kidding.] " width= "50%"  height="70%" />
                
                        <h6 className="font-weight-normal mb-3">{t('xxx')}</h6>
                </div><br/>
              <h3 className="font-weight-normal mb-3">{t('l4')}</h3>
              <h4 className="font-weight-normal mb-3">{t('para4')}</h4>
                <div>
                <img src={i2} alt="[------]" width="80%" height="50%" />
                </div><br/>
              <h3 className="font-weight-normal mb-3">{t('l5')}</h3>
              <h4 className="font-weight-normal mb-3">{t('para5')}</h4>
              <h4 className="font-weight-normal mb-3">{t('para51')}</h4>
               <div>
                <img src={i3} alt="[------]" width="80%" height="50%" />
                </div><br/>
              <h3 className="font-weight-normal mb-3">{t('l6')}</h3>
              <h4 className="font-weight-normal mb-3">{t('para6')}</h4>
              <div>
                <img src={i4} alt="[------]" width="80%" height="50%" />
                <h6 className="font-weight-normal mb-3">{t('para61')}</h6>
              </div><br/>
                <h4 className="font-weight-normal mb-3">{t('para62')}</h4>
                <h5 className="font-weight-normal mb-3">{t('para63')}</h5>



                              







































                <h3 className="c5" id="h.lrex5d1dtok"><span className="c16">{t('p1')} </span></h3>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3"><span className="c1">{t('p2')} </span></p>
      <ul className="c8 lst-kix_ag82hfktlz6t-0 start">
         <li className="c3 c18 c4 li-bullet-0"><span className="c1">{t('p3')} &ldquo;{t('p4')}&rdquo; </span></li>
         <li className="c3 c18 c4 li-bullet-0"><span className="c1">{t('p5')}</span></li>
         
                <div>
                <img src={i5} alt="[------]" width="80%" height="50%" />
                
                </div>

                <div>
                <img src={i6} alt="[------]" width="80%" height="50%" />
                
                </div>

                <div>
                <img src={i7} alt="[------]" width="80%" height="50%" />
                
                </div>

                <div>
                <img src={i8} alt="[------]" width="80%" height="50%" />
                
                </div>

                


         <li className="c3 c6 c18 c4 li-bullet-0"><span className="c1"></span></li>
      </ul>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3"><span className="c1">^ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
      <p className="c3"><span className="c1">&ldquo;{t('p6')}&rdquo;</span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3"><span className="c1">&ldquo;{t('p7')}&rdquo;</span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3"><span className="c1">{t('p8')} </span></p>
      <ul className="c8 lst-kix_40gx2zv349wl-0 start">
         <li className="c3 c18 c4 li-bullet-0"><span className="c1">&ldquo;{t('p9')}&rdquo; {t('p10')} &ldquo;{t('p11')}&rdquo;</span></li>
         <li className="c3 c18 c4 li-bullet-0"><span className="c1">{t('p12')} &quot;{t('p13')}&quot; {t('p14')}</span></li>
         <li className="c3 c18 c4 li-bullet-0"><span>{t('p15')}</span></li>
      </ul>
      <p className="c3 c6"><span className="c1"></span></p>
      <h3 className="c5" id="h.26jfrwjn5u0z"><span className="c16">{t('p16')}</span></h3>
      <p className="c3"><span>{t('p17')} </span></p>
      <ul className="c8 lst-kix_yv5niwzfnbbw-0">
         <li className="c3 c18 c4 li-bullet-0"><span className="c1">{t('p18')} </span></li>
      </ul>
      <ul className="c8 lst-kix_yv5niwzfnbbw-1 start">
         <li className="c3 c18 c34 li-bullet-0"><span className="c1">{t('p19')}</span></li>
         <li className="c3 c18 c34 li-bullet-0"><span className="c1">{t('p20')}</span></li>
      </ul>
      <ul className="c8 lst-kix_yv5niwzfnbbw-2 start">
         <li className="c3 c15 li-bullet-0"><span className="c1">{t('p21')}</span></li>
      </ul>
      <ul className="c8 lst-kix_yv5niwzfnbbw-0">
         <li className="c3 c18 c4 li-bullet-0"><span className="c1">LPs?</span></li>
      </ul>
      <ul className="c8 lst-kix_yv5niwzfnbbw-1 start">
         <li className="c3 c18 c34 li-bullet-0"><span className="c1">{t('p22')}</span></li>
      </ul>
      <ul className="c8 lst-kix_yv5niwzfnbbw-2 start">
         <li className="c3 c15 li-bullet-0"><span className="c1">{t('p23')}</span></li>
         <li className="c3 c15 li-bullet-0"><span className="c1">{t('p24')}</span></li>
      </ul>
      <ul className="c8 lst-kix_yv5niwzfnbbw-0">
         <li className="c3 c18 c4 li-bullet-0"><span className="c36 c69">{t('p25')}</span></li>
      </ul>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>

                <div>
                <img src={i9} alt="[------]" width="80%" height="50%" />
                
                </div>


      <p className="c3"><span className="c1">{t('p26')}</span></p>
               <div>
                <img src={i10} alt="[------]" width="80%" height="50%" />
                
                </div>
     
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c27 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <h3 className="c5" id="h.isho6t7rdpbo"><span className="c16">{t('p27')}</span></h3>
      <p className="c3"><span className="c2"><a className="c0" href="https://www.google.com/url?q=https://www.notion.so/Point-3-7208b3e97a6b4ebb97fdd86adfd87c59&amp;sa=D&amp;source=editors&amp;ust=1672936720986165&amp;usg=AOvVaw014DJVP1pRwSzL4Tn0ve1U">Notion Link</a></span></p>
      <p className="c3"><span className="c1">{t('p28')}</span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <ul className="c8 lst-kix_zgbhx0qv5gh4-0 start">
         <li className="c3 c18 c4 li-bullet-0"><span className="c1">{t('p29')}</span></li>
      </ul>
      <ul className="c8 lst-kix_zgbhx0qv5gh4-1 start">
         <li className="c3 c18 c34 li-bullet-0"><span className="c1">{t('p30')}</span></li>
      </ul>
      <ul className="c8 lst-kix_zgbhx0qv5gh4-2 start">
         <li className="c3 c15 li-bullet-0"><span>{t('p31')} </span></li>
      </ul>
      <ul className="c8 lst-kix_zgbhx0qv5gh4-3 start">
         <li className="c3 c18 c21 li-bullet-0"><span className="c1">{t('p32')}</span></li>
         <li className="c3 c18 c21 li-bullet-0"><span className="c1">{t('p33')}</span></li>
      </ul>
      <ul className="c8 lst-kix_zgbhx0qv5gh4-1">
         <li className="c3 c18 c34 li-bullet-0"><span className="c1">{t('p34')}</span></li>
      </ul>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3"><span>{t('p35')}</span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <h3 className="c5" id="h.v2o1sfuyzvg3"><span className="c16">{t('p36')} </span></h3>
      <p className="c3"><span className="c1">{t('p37')} </span></p>
      <p className="c3"><span className="c1">{t('p38')} </span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <h3 className="c5" id="h.kg5hm31s9d25"><span className="c16">{t('p39')}</span></h3>
      <p className="c3"><span className="c1">&ldquo;{t('p40')}&rdquo;</span></p>
      <p className="c3"><span className="c1">Emphasize accountability</span></p>
      <p className="c3"><span className="c1">Measure your debts better</span></p>
      <p className="c3"><span className="c1">Built in benchmarks - common things that companies at your stage could do</span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3"><span className="c1">Originally, Gang Wang built a single source of truth for accounting</span></p>
      <p className="c3"><span className="c1">Single source of truth but it was based on a lie</span></p>
      <p className="c3"><span className="c1">Our alternative: use certified/software that can be independently verified for rendering the single source of truth/real time state of company&rsquo;s finances </span></p>
      <p className="c3"><span className="c1">Use checksum to confirm software hasn&rsquo;t been tampered with</span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <h3 className="c5" id="h.m9ncxc1vmoot"><span className="c16">Point 2</span></h3>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3"><span>Cap tables</span><span className="c1">&nbsp;+ balance sheets = killed cash infusions</span></p>
      <p className="c3"><span className="c1">Used own token as collateral. They did this because they got greedy and kept trying to fix it. </span></p>
      <p className="c3"><span className="c1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transparency argument</span></p>
      <p className="c3"><span className="c1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Don&#39;t want to be transparent with whole world</span></p>
      <p className="c3 c34"><span className="c1">Different layers to transparency. Give founders control over access to information. At base, all employees have access to data.</span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3"><span className="c1">Layers of transparency. </span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3"><span className="c1">How did they lose so much money to begin with? Hype </span></p>
      <p className="c3"><span className="c1">Emphasis on evidence-based startups. Fuck marketing. Platform = foundation for evidence.</span></p>
      <ul className="c8 lst-kix_yrafyccfrxos-0 start">
         <li className="c3 c18 c4 li-bullet-0"><span className="c1">Checks and balances</span></li>
      </ul>
      <ul className="c8 lst-kix_yrafyccfrxos-1 start">
         <li className="c3 c18 c34 li-bullet-0"><span className="c1">Internal </span></li>
         <li className="c3 c18 c34 li-bullet-0"><span className="c1">Access to information enables employees + investors to raise flags when things are off, etc. </span></li>
         <li className="c3 c18 c34 li-bullet-0"><span className="c1">Once you fuck up in one area and attempt to correct it, everything is fucked. </span></li>
      </ul>
      <ul className="c8 lst-kix_yrafyccfrxos-2 start">
         <li className="c3 c15 li-bullet-0"><span className="c1">E.g. pumping own money into ftx and attempting to hide or delude public from knowledge </span></li>
      </ul>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3"><span className="c1">FK transparency enables accountability</span></p>
      <p className="c3 c6 c4"><span className="c1"></span></p>
      <p className="c3 c4"><span className="c51">FTX&rsquo;s balance sheet dated Nov. 10, 2022 was published by the Financial Times, </span><span className="c22">showing $9 billion in liabilities and just $900 million in assets that could be easily sold.</span><span className="c19">&nbsp;It had a mess of entries including a &ldquo;hidden, poorly internally labeled &lsquo;fiat@&rsquo; account&rdquo; with a balance of negative $8 billion.</span></p>
      <p className="c3 c6 c4"><span className="c19"></span></p>
      <p className="c3"><span className="c1">SEC investigating mishandling of customer funds = their pinpoint of how FTX fucked up</span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3"><span className="c1">US regulators are investigating whether beleaguered crypto-exchange FTX.com mishandled customer funds, and they&rsquo;re looking into the firm&rsquo;s relationships with other parts of Sam Bankman-Fried&rsquo;s crypto empire.</span></p>
      <p className="c3"><span className="c1">The inquiries by the Securities and Exchange Commission and the Commodity Futures Trading Commission relate to the liquidity crisis that has pushed FTX to the brink, according to three people familiar with the matter. The SEC&rsquo;s scrutiny started months ago as a probe into FTX US and its crypto-lending activities, said two of the people, who who weren&rsquo;t authorized to speak publicly on the matter.</span></p>
      <p className="c3"><span>FTX&rsquo;s turmoil led to a tentative rescue offer by rival exchange Binance Holdings Ltd., which </span><span className="c2"><a className="c0" href="https://www.google.com/url?q=https://www.bloomberg.com/news/articles/2022-11-09/binance-seen-likely-to-balk-at-ftx-deal-after-spotting-deep-hole&amp;sa=D&amp;source=editors&amp;ust=1672936720990589&amp;usg=AOvVaw3km8no6EetZlBV8WamSUYY">now may balk</a></span><span className="c1">&nbsp;as the scope of FTX&rsquo;s distress becomes more apparent. American regulators are also looking into the platform&rsquo;s relationship with its American counterpart FTX US and Bankman-Fried&rsquo;s trading house Alameda Research, two of the people said. &nbsp;</span></p>
      <p className="c3"><span className="c1">[...]</span></p>
      <p className="c3"><span className="c1">The CFTC&rsquo;s jurisdiction over crypto is generally limited to derivatives, but the agency can take enforcement action if it believes there&rsquo;s fraud or manipulation in the underlying market. The SEC claims oversight over digital coins that qualify as securities under its rules. Both regulators also oversee investment firms. </span></p>
      <p className="c3"><span className="c1">In recent days, the regulators have asked for details about the ownership structure of FTX US and FTX.com, which caters to non-American clients, according to two of the people. Regulators are interested in any overlap between management and board structures, and the financial relationship between the two entities. The agencies have also asked for details on whether customer accounts were properly segregated and the composition of the investor base at FTX.com, said one of the people.</span></p>
      <p className="c3"><span className="c1">SEC Chair Gary Gensler has repeatedly warned about risks associated with digital-asset exchanges. He has said that many platforms may be violating securities laws by offering unregistered securities to Americans, improperly providing loans, or even front-running their clients&rsquo; trades. Gensler has also raised concerns that firms may be engaged in conflicting lines of business and suggested that they should potentially split up the different functions.</span></p>
      <p className="c3"><span className="c1">Top CFTC officials have expressed concerns about the risk of crypto platforms mishandling customer assets. &ldquo;There is not enough awareness or attention on this critical area where customer protections dovetail with financial stability risks,&rdquo; Democratic CFTC Commissioner Christy Goldsmith Romero said in a speech last month without mentioning any firms by name. </span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3"><span className="c1">&nbsp;</span></p>
      <p className="c3 c6 c34"><span className="c1"></span></p>
      <p className="c3"><span className="c1">Create classNamees of shares and control who votes on what. </span></p>
      <p className="c3"><span className="c1">Ftx no board of directors. No regulatory oversight (internal). &nbsp;= later</span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <h3 className="c5" id="h.tny37644kphu"><span className="c16">Point 2</span></h3>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3"><span className="c1">Stop doing pointless shit</span></p>
      <ul className="c8 lst-kix_inonthvl91d7-0 start">
         <li className="c3 c18 c4 li-bullet-0"><span className="c1">Superbowl ads</span></li>
         <li className="c3 c18 c4 li-bullet-0"><span className="c1">Apartment shaped like F..T..X&hellip;</span></li>
         <li className="c3 c18 c4 li-bullet-0"><span className="c1">Too many M&amp;A&rsquo;s</span></li>
      </ul>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3"><span className="c1">FTX&rsquo;s bookkeeping comes under the spotlight in the report, and sources describe how Sam Bankman-Fried may have attempted to obfuscate what was happening between FTX and Alameda Research. </span></p>
      <ul className="c8 lst-kix_40gx2zv349wl-0">
         <li className="c3 c18 c4 li-bullet-0"><span className="c1">&ldquo;[Gary] Wang, [FTX co-founder and] a former Google software developer, built a backdoor in FTX&#39;s book-keeping software,&rdquo; Reuters reports, citing anonymous sources. That backdoor apparently &ldquo;enabled Bankman-Fried to hide the transfer of customer money from FTX to Alameda.&rdquo;</span></li>
         <li className="c3 c18 c4 li-bullet-0"><span className="c1">SBF apparently told employees that this accounting software was &quot;the ultimate source of truth&quot; about FTX&rsquo;s accounts.</span></li>
         <li className="c3 c18 c4 li-bullet-0"><span>One of Bankman-Fried&#39;s close aides tweaked FTX&#39;s accounting software. This enabled Bankman-Fried to hide the transfer of customer money from FTX to Alameda. A screenshot of FTX&#39;s book-keeping system showed that even after the massive customer withdrawals, some $10 billion in deposits remained, plus a surplus of $1.5 billion.</span><span className="c1">&nbsp;This led employees to believe wrongly that FTX was on a solid financial footing.</span></li>
      </ul>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <h3 className="c5" id="h.m78gwgduygjs"><span className="c16">Point 3</span></h3>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3"><span className="c1">What feature of ours would be able to detect this issue and prevent that</span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <ul className="c8 lst-kix_ns73mbidn0i6-0 start">
         <li className="c3 c18 c4 li-bullet-0"><span className="c1">Automate a lot of processes</span></li>
         <li className="c3 c18 c4 li-bullet-0"><span className="c1">Segregation Composition of customer accounts</span></li>
      </ul>
      <p className="c3 c6 c4"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <h3 className="c5" id="h.7fxa8efrzscp">
         <span>Conclusion</span>
         
      </h3>
      <h3 className="c5" id="h.bwuztxsnf7nu"><span className="c16">References</span></h3>
      <p className="c3 c6"><span className="c1"></span></p>
      <ol className="c8 lst-kix_6lbrnw3ny1sd-0 start" start="1">
         <li className="c3 c18 c4 li-bullet-0"><span>&ldquo;FTX&rsquo;s </span><span className="c2"><a className="c0" href="https://www.google.com/url?q=https://www.nytimes.com/2022/11/11/technology/ftx-investors-venture-capital.html?smid%3Dtw-dealbook%26smtyp%3Dcur&amp;sa=D&amp;source=editors&amp;ust=1672936720992693&amp;usg=AOvVaw1XVOEOodxdvYsqLjoUMd3O">list of investors</a></span><span>&nbsp;spans powerful and well-known investment firms: NEA, IVP, Iconiq Capital, Third Point Ventures, Tiger Global, Altimeter Capital Management, Lux Capital, Mayfield, Insight Partners, Sequoia Capital, SoftBank, Lightspeed Venture Partners, Ribbit Capital, Temasek Holdings, BlackRock and Thoma Bravo.&rdquo; I suppose FTX is a failure of venture capitalist due diligence, but it&rsquo;s an odd kind. The usual VC due diligence failure is, like, you back an entrepreneur who promises a futuristic product, and the product doesn&rsquo;t work. FTX worked fine: People liked its technology, and it seems to have made money. </span><span className="c1">The problem was in its balance sheet, which was full of snakes, and its governance, which put all the snakes there. Ideally the venture capitalists would have spotted that in due diligence, but the typical VC company has a very simple balance sheet and terrible governance, so it is sort of understandable that they sailed right by those problems.</span></li>

               <div>
                <img src={i11} alt="[------]" width="80%" height="50%" />
                
                </div>

      </ol>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c46 c6"><span className="c1"></span></p>
     
      <p className="c6 c46"><span className="c1"></span></p>
      <h3 className="c32 c18 c52" id="h.k29o05epkmte"><span className="c25">FTX&rsquo;s Liabilities and Largely Illiquid Assets</span></h3>
      <p className="c23 c18"><span className="c22">In the final days before declaring bankruptcy, FTX CEO </span><span className="c22 c47"><a className="c0" href="https://www.google.com/url?q=https://www.visualcapitalist.com/biggest-donors-2022-midterm-elections/&amp;sa=D&amp;source=editors&amp;ust=1672936720993262&amp;usg=AOvVaw2CLzV47dn1DEmULGSZCcac">Sam Bankman-Fried</a></span><span className="c19">&nbsp;attempted a final fundraising in order restore stability while billions in user funds were being withdrawn from his exchange. </span></p>
      <p className="c23 c18"><span className="c22">The balance sheet he sent around to prospective investors was </span><span className="c47 c22"><a className="c0" href="https://www.google.com/url?q=https://www.ft.com/content/0c2a55b6-d34c-4685-8a8d-3c9628f1f185&amp;sa=D&amp;source=editors&amp;ust=1672936720993505&amp;usg=AOvVaw1xZySoqb_JQD3ZfC6UfRKF">leaked</a></span><span className="c19">&nbsp;by the Financial Times, and reveals the exchange had nearly $9 billion in liabilities while only having just over $1 billion in liquid assets. Alongside the liquid assets were $5.4 billion in assets labeled as &ldquo;less liquid&rdquo; and $3.2 billion labeled as &ldquo;illiquid&rdquo;. </span></p>
      <p className="c23 c18"><span className="c19">When examining the assets listed, FTX&rsquo;s accounting appears to be poorly done at best, and fraudulently deceptive at worst. </span></p>
      <p className="c18 c23"><span className="c19">Of those &ldquo;less liquid&rdquo; assets, many of the largest sums were in assets like FTX&rsquo;s own exchange token and cryptocurrencies of the Solana ecosystem, which were heavily supported by FTX and Sam Bankman-Fried. On top of this, for many of these coins the liquidity simply wouldn&rsquo;t have been there if FTX had attempted to redeem these cryptocurrencies for U.S. dollars or stablecoin equivalents. </span></p>
      <p className="c23 c18"><span className="c19">While the liquid and less liquid assets on the balance sheet amounted to $6.3 billion (still not enough to equal the $8.9 billion in liabilities), many of these &ldquo;less liquid&rdquo; assets may as well have been completely illiquid.</span></p>
      <p className="c23 c18"><span className="c2 c22 c58"><a className="c0" href="https://www.google.com/url?q=https://archive.ph/RyG1D&amp;sa=D&amp;source=editors&amp;ust=1672936720993883&amp;usg=AOvVaw0hXFtxmI_64z0-xfZvmh36">https://archive.ph/RyG1D</a></span><span className="c22 c58 c71">&nbsp;</span></p>
      <p className="c3"><span>Some are already asking what lessons should be learnt. </span><span className="c2"><a className="c0" href="https://www.google.com/url?q=https://archive.ph/o/ZZv62/https://www.ft.com/content/c79673b6-8475-4761-bae5-e5bc4e4d8b83&amp;sa=D&amp;source=editors&amp;ust=1672936720994107&amp;usg=AOvVaw3KHHHkliOS86UUnRelcIc3">More regulation</a></span><span>&nbsp;is needed, do proper </span><span className="c2"><a className="c0" href="https://www.google.com/url?q=https://archive.ph/o/ZZv62/https://www.bloomberg.com/opinion/articles/2022-11-13/ftx-is-an-object-lesson-in-how-to-spot-red-flags-in-a-financial-report?srnd%3Dopinion&amp;sa=D&amp;source=editors&amp;ust=1672936720994335&amp;usg=AOvVaw2brEJucrzv5gcvA7IrZw9n">due diligence</a></span><span>, no high returns </span><span className="c2"><a className="c0" href="https://www.google.com/url?q=https://archive.ph/o/ZZv62/https://www.bloomberg.com/opinion/articles/2022-11-11/burned-by-crypto-don-t-learn-the-wrong-lesson?fromMostRead%3Dtrue&amp;sa=D&amp;source=editors&amp;ust=1672936720994578&amp;usg=AOvVaw1tpI5IJD6-AqVjYj1m2g9D">without high risk</a></span><span className="c1">, and so on. </span></p>
      <p className="c3"><span>We&rsquo;d suggest another: expect unexpected blow-ups when interest rates are shooting up. What is the connection between higher rates and FTX&rsquo;s collapse? We quoted this </span><span className="c2"><a className="c0" href="https://www.google.com/url?q=https://archive.ph/o/ZZv62/https://www.reuters.com/technology/exclusive-behind-ftxs-fall-battling-billionaires-failed-bid-save-crypto-2022-11-10/&amp;sa=D&amp;source=editors&amp;ust=1672936720994888&amp;usg=AOvVaw3AryhcMH_nk-Mt0j7u_aER">Reuters</a></span><span>&nbsp;</span><span className="c1">story last week:</span></p>
      <p className="c3 c4"><span className="c1">This May and June, [former FTX CEO Sam] Bankman-Fried&rsquo;s trading firm, Alameda Research, suffered a series of losses from deals, according to three people familiar with its operations.</span></p>
      <p className="c3 c4"><span className="c1">These included a $500-million loan agreement with failed crypto lender Voyager Digital, two of the people said. Voyager filed for bankruptcy protection the following month, with FTX&rsquo;s US arm paying $1.4 billion for its assets in a September auction.</span></p>
      <p className="c3"><span>Voyager filed for bankruptcy because of exposure to Three Arrows Capital, a hedge fund whose investing strategy was going levered long on crypto. 3AC&rsquo;s supercycle thesis, projecting bitcoin prices rising </span><span className="c2"><a className="c0" href="https://www.google.com/url?q=https://archive.ph/o/ZZv62/https://youtu.be/A-U7JWz8dR4?t%3D5467&amp;sa=D&amp;source=editors&amp;ust=1672936720995219&amp;usg=AOvVaw1lpsfUnJOo0UsV_Z3pXVsF">into the millions</a></span><span className="c1">, relied on prices going only ever up. But bitcoin fell 60 per cent between April and mid-June as the 10-year Treasury yield rose from 2.3 per cent to 3.4 per cent. 3AC was left facing margin calls it couldn&rsquo;t meet. That spilled over to Voyager, which hit Alameda, and thus FTX.</span></p>
      <p className="c3"><span>Now, $500mn in loan losses inflicted by Voyager doesn&rsquo;t explain the $8bn hole in FTX&rsquo;s balance sheet. But it is suggestive of a larger issue. The entire FTX-Alameda empire included $5.4bn spread across venture investments in nearly 500 crypto companies and VC funds, the FT reported </span><span className="c2"><a className="c0" href="https://www.google.com/url?q=https://archive.ph/o/ZZv62/https://www.ft.com/content/db415ae9-938d-45bd-a8b7-510ce2edc943&amp;sa=D&amp;source=editors&amp;ust=1672936720995468&amp;usg=AOvVaw2_PXCf1tZNR-PPXjyVdgzW">Friday</a></span><span>. The Journal had this on </span><span className="c53 c2"><a className="c0" href="https://www.google.com/url?q=https://archive.ph/o/ZZv62/https://www.wsj.com/articles/alameda-ftx-executives-are-said-to-have-known-ftx-was-using-customer-funds-11668264238&amp;sa=D&amp;source=editors&amp;ust=1672936720995662&amp;usg=AOvVaw17qSJ5uvx03E4tmn_fSjbI">Saturday</a></span></p>
      <p className="c3"><span className="c53 c2"><a className="c0" href="https://www.google.com/url?q=https://archive.ph/o/ZZv62/https://www.wsj.com/articles/alameda-ftx-executives-are-said-to-have-known-ftx-was-using-customer-funds-11668264238&amp;sa=D&amp;source=editors&amp;ust=1672936720995890&amp;usg=AOvVaw2L8otnH9sQgwDNOInz84g7">(opens a new window)</a></span></p>
      <p className="c3"><span className="c1">:</span></p>
      <p className="c3 c4"><span className="c1">Alameda faced a barrage of demands from lenders after crypto hedge fund Three Arrows Capital collapsed in June, creating losses for crypto brokers such as Voyager Digital . . . </span></p>
      <p className="c3 c4"><span className="c1">[Alameda CEO Caroline] Ellison said on the call that FTX used customer money to help Alameda meet its liabilities, [people familiar with the matter] said.</span></p>
      <p className="c3 c4"><span className="c1">Alameda had taken out loans to fund illiquid venture investments, the people said.</span></p>
      <p className="c3"><span className="c1">Of course, low rates alone aren&rsquo;t responsible for Alameda&rsquo;s recklessness. It takes hubris to make venture investments with borrowed money, secured (presumably) against junk collateral. You can imagine a more conservative FTX, making money just from fee revenue, surviving a higher-rates world. But when money is loose, someone out there is going to run hog wild; and when money tightens, they will start to squeal. </span></p>
      <p className="c3"><span>The </span><span className="c2 c53"><a className="c0" href="https://www.google.com/url?q=https://archive.ph/o/ZZv62/https://www.coindesk.com/business/2022/11/10/bankman-frieds-cabal-of-roommates-in-the-bahamas-ran-his-crypto-empire-and-dated-other-employees-have-lots-of-questions/&amp;sa=D&amp;source=editors&amp;ust=1672936720996355&amp;usg=AOvVaw0D2YfYSK9hhTipu1dG6En9">shambolic</a></span></p>
      <p className="c3"><span className="c53 c2"><a className="c0" href="https://www.google.com/url?q=https://archive.ph/o/ZZv62/https://www.coindesk.com/business/2022/11/10/bankman-frieds-cabal-of-roommates-in-the-bahamas-ran-his-crypto-empire-and-dated-other-employees-have-lots-of-questions/&amp;sa=D&amp;source=editors&amp;ust=1672936720996617&amp;usg=AOvVaw2utYqjw_sN3uxyvQyMOPvg">(opens a new window)</a></span></p>
      <p className="c3"><span className="c1">&nbsp;details of the crypto crisis shouldn&rsquo;t distract us from the fact that this is monetary tightening working as intended. </span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c23 c18"><span className="c22">It gets worse: </span><span className="c2 c22"><a className="c0" href="https://www.google.com/url?q=https://www.reuters.com/markets/currencies/exclusive-least-1-billion-client-funds-missing-failed-crypto-firm-ftx-sources-2022-11-12/&amp;sa=D&amp;source=editors&amp;ust=1672936720996945&amp;usg=AOvVaw2sIFumWl_5DyW163IBZaKj">https://www.reuters.com/markets/currencies/exclusive-least-1-billion-client-funds-missing-failed-crypto-firm-ftx-sources-2022-11-12/</a></span><span className="c19">&nbsp;</span></p>
      <p className="c46 c6"><span className="c1"></span></p>
      <p className="c46"><span className="c1">links as ref. = </span></p>
      <p className="c46 c6"><span className="c1"></span></p>
      <h3 className="c10 c20" id="h.vz6yebo98aj7"><span className="c57 c64">Orderbook liquidity references:</span></h3>
      <ul className="c8 lst-kix_ua1l8i1jcjaj-0 start">
         <li className="c18 c4 c66 li-bullet-0"><span className="c1">General sources (finance high-level)</span></li>
      </ul>
      <ul className="c8 lst-kix_ua1l8i1jcjaj-1 start">
         <li className="c29 c18 li-bullet-0"><span className="c2"><a className="c0" href="https://www.google.com/url?q=https://www.investopedia.com/terms/o/order-book.asp&amp;sa=D&amp;source=editors&amp;ust=1672936720997429&amp;usg=AOvVaw12awHTTsbZ1Fd5WY7U-C_5">https://www.investopedia.com/terms/o/order-book.asp</a></span></li>
         <li className="c29 c18 li-bullet-0"><span className="c2"><a className="c0" href="https://www.google.com/url?q=https://www.5minutefinance.org/concepts/the-limit-order-book&amp;sa=D&amp;source=editors&amp;ust=1672936720997677&amp;usg=AOvVaw1SgxyRCwUWD6DUpTKEj5T8">https://www.5minutefinance.org/concepts/the-limit-order-book</a></span></li>
      </ul>
      <ul className="c8 lst-kix_ua1l8i1jcjaj-0">
         <li className="c18 c4 c56 li-bullet-0"><span>Crypto-specific = </span></li>
      </ul>
      <ul className="c8 lst-kix_ua1l8i1jcjaj-1 start">
         <li className="c18 c29 li-bullet-0"><span className="c2"><a className="c0" href="https://www.google.com/url?q=https://medium.com/coinmonks/liquidity-and-order-book-distribution-908e4ebd9173&amp;sa=D&amp;source=editors&amp;ust=1672936720997971&amp;usg=AOvVaw1slQH01JmB-aTa_xYVLeOY">https://medium.com/coinmonks/liquidity-and-order-book-distribution-908e4ebd9173</a></span></li>
         <li className="c29 c18 li-bullet-0"><span className="c2"><a className="c0" href="https://www.google.com/url?q=https://learn.bybit.com/trading/order-book-explained-for-beginners/&amp;sa=D&amp;source=editors&amp;ust=1672936720998170&amp;usg=AOvVaw2e8gBX9dsaQoEDSxKrFRD4">https://learn.bybit.com/trading/order-book-explained-for-beginners/</a></span></li>
         <li className="c29 c18 li-bullet-0"><span className="c2"><a className="c0" href="https://www.google.com/url?q=https://www.coinbase.com/institutional/research-insights/research/trading-insights/market-impact-order-book-liquidity&amp;sa=D&amp;source=editors&amp;ust=1672936720998398&amp;usg=AOvVaw0HTvyeaCve_jWe8aNbuyr9">https://www.coinbase.com/institutional/research-insights/research/trading-insights/market-impact-order-book-liquidity</a></span></li>
      </ul>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3"><span className="c1">Let&rsquo;s categorize readers in 2 categories</span></p>
      <ul className="c8 lst-kix_goq8t3mmuhkh-0 start">
         <li className="c3 c18 c4 li-bullet-0"><span className="c1">Those that have startups that are public - either token or equity</span></li>
         <li className="c3 c18 c4 li-bullet-0"><span className="c1">Those that aren&rsquo;t yet public, but a fiasco could cause their value in the private equity market to drop</span></li>
      </ul>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3"><span className="c1">3rd message = illustrates reader is interested in product</span></p>
      <p className="c10"><span className="c1">Lead magnets = freebie for readers</span></p>
      <ul className="c8 lst-kix_1uympytqavi3-0 start">
         <li className="c3 c18 c4 li-bullet-0"><span className="c2"><a className="c0" href="https://www.google.com/url?q=https://blog.hubspot.com/marketing/creating-lead-generation-offers-from-blogs&amp;sa=D&amp;source=editors&amp;ust=1672936720998906&amp;usg=AOvVaw3Pd4vSSv0aObHhGK74O1l7">https://blog.hubspot.com/marketing/creating-lead-generation-offers-from-blogs</a></span></li>
      </ul>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3"><span className="c1">Notes from call w/ jesse</span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3"><span className="c1">Multiple intro messages in beginning as A/B testing &ndash; which one generates most replies</span></p>
      <p className="c3"><span className="c1">3-4 short messages for lead magnets </span></p>
      <p className="c3"><span className="c1">See who replies back &ndash; illustrates they have interest in second message</span></p>
      <p className="c3"><span className="c1">How long ftx relevant = another month </span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3"><span className="c1">450 peeps stealth mode startups ceos </span></p>
      <p className="c3"><span className="c1">Expected results =</span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3"><span className="c1">Depends on first intro message</span></p>
      <p className="c3"><span className="c1">3 or 4 diff intro messages. Trying to get reply back. </span></p>
      <p className="c3"><span className="c1">150 150 150</span></p>
      <p className="c3"><span className="c1">1st message - ftx</span></p>
      <p className="c3"><span className="c1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How many out of 150 &ndash; how many will respond? At least 5% (def. Less than 10%)</span></p>
      <p className="c3"><span className="c1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23 customers</span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3"><span className="c1">2nd = consulting message</span></p>
      <p className="c3"><span className="c1">3rd = later</span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3"><span>Robinhood SEC records: </span><span className="c2"><a className="c0" href="https://www.google.com/url?q=https://www.sec.gov/Archives/edgar/data/1783879/000114036122018827/brhc10037465_sc13d.htm&amp;sa=D&amp;source=editors&amp;ust=1672936720999949&amp;usg=AOvVaw1-JXq9ups6hczUdsBSkEaF">https://www.sec.gov/Archives/edgar/data/1783879/000114036122018827/brhc10037465_sc13d.htm</a></span><span className="c1">&nbsp;</span></p>
      <p className="c3 c6"><span className="c1"></span></p>
     
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3"><span className="c1">What could ftx done better so this wouldn&rsquo;t have occurred </span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <ul className="c8 lst-kix_yc4n6awjncmm-0 start">
         <li className="c3 c18 c4 li-bullet-0"><span className="c1">Mapping out who owns what shares</span></li>
      </ul>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c18 c32"><span className="c33">FTX:</span></p>
      <p className="c32 c3 c18"><span className="c61">This was where we spent most of our time. Ben plans to write a note about the situation and wanted to breakdown the crisis. It&rsquo;s complex, but not complicated. </span><span className="c61">Actually it&rsquo;s similar to the UK pension funds we&rsquo;ve talked about before. </span><span className="c33">Ben led us through a series of slides to illustrate all the players and moving parts. As someone with limited experience with crypto, having a visual depiction really helps me understand what&rsquo;s going on. Let us know if you&rsquo;d like to see some of the slides put up on the ET Forum.</span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
      <p className="c3 c6"><span className="c1"></span></p>
     
      <p className="c7 c3 c6"><span className="c1"></span></p>
    
      <h3 className="c7 c3 c20 c50" id="h.t0clcmklagy3"><span className="c16"></span></h3>
      <p className="c7 c3"><span className="c2"><a className="c0" href="https://www.google.com/url?q=https://twitter.com/EpsilonTheory/status/1593027618399719424&amp;sa=D&amp;source=editors&amp;ust=1672936721001174&amp;usg=AOvVaw3um3qZ7Mw0sv49usZUVJNa">https://twitter.com/EpsilonTheory/status/1593027618399719424</a></span></p>
      
      <h3 className="c7 c3 c20 c50" id="h.licwztqoxcpc"><span className="c16"></span></h3>
      <h3 className="c7 c3 c20" id="h.43ay6if3r2gn"><span className="c16">Bloomberg article</span></h3>
      <p className="c7 c3"><span>Source = </span><span className="c2"><a className="c0" href="https://www.google.com/url?q=https://www.bloomberg.com/news/features/2022-11-16/sam-bankman-fried-s-ftx-collapse-could-ve-been-much-worse-for-wall-street?sref%3DVmONyy7Q&amp;sa=D&amp;source=editors&amp;ust=1672936721001837&amp;usg=AOvVaw3ELHbV_gW8AbVvI7bLVevq">https://www.bloomberg.com/news/features/2022-11-16/sam-bankman-fried-s-ftx-collapse-could-ve-been-much-worse-for-wall-street?sref=VmONyy7Q</a></span></p>
      <h3 className="c7 c54" id="h.hdd5uxfnaw0c"><span className="c51 c55">FTX Came Dangerously Close to Upending Futures Markets</span></h3>
      <p className="c7 c63"><span className="c22 c67">Sam Bankman-Fried&rsquo;s firm had a radical proposal to shake up futures markets that would have consolidated power &mdash; and money &mdash; at his now-bankrupt exchange.</span></p>
      <p className="c7 c3"><span className="c17">By</span><span className="c17"><a className="c0" href="https://www.google.com/url?q=https://www.bloomberg.com/authors/ASG_9wXCX2Y/annie-massa&amp;sa=D&amp;source=editors&amp;ust=1672936721002428&amp;usg=AOvVaw2zIa6sDOnlfX3CNJR6F9B7">Annie Massa</a></span><span className="c17">,</span><span className="c17"><a className="c0" href="https://www.google.com/url?q=https://www.bloomberg.com/authors/AS_Gz5yh3FM/katherine-doherty&amp;sa=D&amp;source=editors&amp;ust=1672936721002664&amp;usg=AOvVaw0ZY1X-f7Rp1QPU3NgBFOub">&nbsp;Katherine Doherty</a></span><span className="c17">, and</span><span className="c17"><a className="c0" href="https://www.google.com/url?q=https://www.bloomberg.com/authors/AQUS59a2qxc/isis-almeida&amp;sa=D&amp;source=editors&amp;ust=1672936721002881&amp;usg=AOvVaw0IaG3DgzT8jpuHSQAmx-f6">&nbsp;Isis Almeida</a></span></p>
      <p className="c7 c3"><span className="c17">November 16, 2022 at 12:01 AM EST</span><span className="c36 c17">Updated onNovember 16, 2022 at 10:23 AM EST</span></p>
      <h3 className="c7 c39" id="h.wx46nrwhb9bo"><span className="c51 c70">Share this article</span></h3>
      <p className="c7 c30"><span className="c11">Everywhere you looked, there it was, the ghostly outline of three letters: FTX.</span></p>
      <p className="c7 c30"><span className="c17">The confab in Chicago this week was supposed to be another celebration for the golden boy of market structure, Sam Bankman-Fried. His FTX flexed its platinum status at an earlier Futures Industry Association conference in Boca Raton, Florida, hosting a late-night cocktail party by the beach, holding a </span><span className="c17"><a className="c0" href="https://www.google.com/url?q=https://www.bloomberg.com/news/articles/2022-03-17/a-rod-says-blockchain-can-bring-sports-team-ownership-to-masses&amp;sa=D&amp;source=editors&amp;ust=1672936721003581&amp;usg=AOvVaw1i19h-hwhbduLHYn0KDP_r">fireside chat</a></span><span className="c11">&nbsp;with A-Rod and handing out branded swag from its tricked-out mega-booth in the exhibition hall.</span></p>
      <p className="c7 c30"><span className="c17">The 30-year-old brought pizzazz to an industry that lacks </span><span className="c17"><a className="c0" href="https://www.google.com/url?q=https://www.bloomberg.com/news/articles/2022-08-05/lambo-dealers-are-keeping-warm-despite-crypto-winter&amp;sa=D&amp;source=editors&amp;ust=1672936721003999&amp;usg=AOvVaw21HclfMudCwnzpsX__WHec">fleets of Lamborghinis</a></span><span className="c11">&nbsp;and is filled with job descriptions like exchange operators, risk managers and commodities regulators that make the eyes glaze over.</span></p>
      <p className="c7 c3"><span className="c17">He and his band of twentysomethings integrated themselves with finance&rsquo;s old guard, who, like everyone from US regulators to </span><span className="c17"><a className="c0" href="https://www.google.com/url?q=https://www.bloomberg.com/news/articles/2022-11-08/ftx-crypto-bros-clashing-politics-meet-cz-chaos-on-election-day&amp;sa=D&amp;source=editors&amp;ust=1672936721004367&amp;usg=AOvVaw3UcVg2HLqM8iNBXq_lH6EQ">politicians</a></span><span className="c11">&nbsp;to Tom Brady, were willing to listen because they were throwing money around &mdash; the go-to strategy in the Bankman-Fried playbook.</span></p>
      <p className="c7 c3"><span className="c11">As became strikingly clear last week, FTX ran its business quite differently than everyone else in the room.</span></p>
      <p className="c7 c3"><span className="c11">While many of the details around FTX&rsquo;s remarkable collapse will only be revealed as it progresses through bankruptcy, interviews with FIA conference-goers this week show they&rsquo;re facing a reckoning of their own. The group&rsquo;s staff may have papered over the FTX name on banners across the lobby, but they can&rsquo;t fully erase the fact that many sophisticated finance pros were duped by Bankman-Fried&rsquo;s wacky charm.</span></p>
      <p className="c7 c3"><span className="c11">And, had things gone a bit differently, he could have radically altered not just the crypto ecosystem, but, many longtime industry professionals feared, also the critical futures market that touches all corners of finance. FTX&rsquo;s ambitions were grandiose: It wanted to carry out every aspect of customers&rsquo; crypto derivatives needs on its own, using algorithms rather than brokers to help clear trades.</span></p>
      <p className="c7 c3"><span className="c11">&ldquo;There are a few people in the industry that need to think hard about how someone can appear from nowhere and become the primary sponsor when others have been around for twenty-plus years,&rdquo; Trading Technologies Chief Executive Officer Keith Todd said. &ldquo;This is a wake up call. The adults need to run this industry. We need innovators, but also adults.&rdquo;</span></p>
      <p className="c7 c3"><span className="c17">Bankman-Fried didn&#39;t respond to requests for comment for this article. He spent part of his day Tuesday adding to a cryptic series of Twitter posts, noting that he&rsquo;s been </span><span className="c17"><a className="c0" href="https://www.google.com/url?q=https://twitter.com/SBF_FTX/status/1592604699693580289&amp;sa=D&amp;source=editors&amp;ust=1672936721005071&amp;usg=AOvVaw0bufR2Anrd8o3NgPHY-oAZ">meeting in-person</a></span><span className="c11">&nbsp;with regulators and working to see what he can do for FTX&rsquo;s customers.</span></p>
      <p className="c7 c3"><span className="c17">On Wednesday, the pain spread across the crypto world. Crypto brokerage Genesis </span><span className="c17"><a className="c0" href="https://www.google.com/url?q=https://www.bloomberg.com/news/articles/2022-11-16/crypto-brokerage-genesis-suspends-withdrawals-and-originations-at-lending-arm&amp;sa=D&amp;source=editors&amp;ust=1672936721005456&amp;usg=AOvVaw3J9qtAmOaDHsLWSZI0uh4S">suspended</a></span><span className="c17">&nbsp;redemptions at its lending business after what it described as &ldquo;abnormal&rdquo; requests to pull money in the wake of FTX&rsquo;s collapse. One of its biggest lenders, Gemini Trust Co., the cryptocurrency platform run by the billionaire Winklevoss twins, also </span><span className="c17"><a className="c0" href="https://www.google.com/url?q=https://www.bloomberg.com/news/articles/2022-11-16/winklevoss-s-gemini-pauses-withdrawals-on-lending-program&amp;sa=D&amp;source=editors&amp;ust=1672936721005731&amp;usg=AOvVaw3_9u6M4bY0Cuym0RumEQWX">halted</a></span><span className="c11">&nbsp;withdrawals on its lending program.</span></p>
      <h3 className="c7 c30" id="h.8zafd4d73pce"><span className="c37">Not Satisfied</span></h3>
      <p className="c7 c3"><span className="c11">Just weeks ago, Bankman-Fried helmed the world&rsquo;s second-largest crypto exchange, which was an offshoot of his trading firm Alameda Research.</span></p>
      <p className="c7 c3"><span className="c11">He was surrounded in the Bahamas by his inner circle of similarly youthful disciples of effective altruism, a philanthropic and philosophic movement that tries to have the greatest impact by carefully spending money to solve problems. The cast included Caroline Ellison, Alameda&rsquo;s CEO and Bankman-Fried&rsquo;s occasional dating partner; Gary Wang, FTX&rsquo;s chief technology officer; Nishad Singh, the exchange&rsquo;s director of engineering; and Ramnik Arora, the head of product.</span></p>
      <p className="c7 c3"><span className="c11">That save-the-world mentality was, in many ways, what drove Bankman-Fried and his acolytes. Though they got rich quickly through crypto, they weren&rsquo;t just satisfied being power players in the nascent digital-asset world. The group of effective altruists understood money could solve almost anything.</span></p>
      <p className="c7 c3"><span className="c11">Bankman-Fried worked behind the scenes to permeate traditional finance and change aspects of modern market infrastructure to his advantage. His FTX greased the palms of trading-world mainstays and quickly became a fixture in a staid industry, offering insight into just what kind of dominance he was working toward before it all went wrong.</span></p>
      <p className="c7 c3"><span className="c11">FTX&rsquo;s US arm, among the 130-plus entities that went bust, was striving to upend the way trading works for futures of all kinds. The derivatives, which are contracts that allow traders to lock in a set price for an asset at a future date, are a pivotal tool not just for financiers, but also for any business that might need large amounts of oil &mdash; think airlines &mdash; and for farmers, who are up against the caprices of weather and pests.</span></p>
      <p className="c7 c3"><span className="c11">In crypto, by contrast, futures are a highly speculative instrument, allowing traders to bypass direct ownership of Bitcoin, Ether or Dogecoin and just wager on whether prices will go up or down.</span></p>
      <p className="c7 c3"><span className="c11">Bankman-Fried was pushing to take out the middlemen in crypto futures trading &mdash; who are specifically tasked with offsetting risks.</span></p>
      <p className="c7 c3 c6"><span className="c1"></span></p>
      <h3 className="c7 c30" id="h.irifu3ahx09c"><span className="c37">Consolidating Power</span></h3>
      <p className="c7 c3"><span className="c11">After buying a derivatives exchange in the US called LedgerX in 2021, FTX.US asked the Commodity Futures Trading Commission for permission to do something unusual: It wanted to execute all elements of Bitcoin and Ether futures trades, thus bypassing other exchanges, banks and other financial intermediaries.</span></p>
      <p className="c7 c3"><span className="c17">At the heart of the </span><span className="c17"><a className="c0" href="https://www.google.com/url?q=https://www.bloomberg.com/news/articles/2022-03-10/ftx-seeks-u-s-blessing-for-clearing-margin-based-retail-trades&amp;sa=D&amp;source=editors&amp;ust=1672936721007138&amp;usg=AOvVaw0dTnn15t1XXyqoFJcH0YK3">proposal</a></span><span className="c11">&nbsp;was margin &mdash; a favorite tool of the exchange&rsquo;s users. FTX.US said it would post $250 million of its own money to shore up losses if buyers or sellers couldn&rsquo;t uphold their end of a deal. The approach would consolidate power in the hands of FTX and the supposed sophisticated technological surveillance tools it had in place.</span></p>
      <p className="c7 c3"><span className="c11">It was vastly different from the system used elsewhere in derivatives markets, requiring that members pitch money into a communal fund to cover defaults.</span></p>
      <p className="c7 c3"><span className="c11">It won praise from a venerable group of financial industry titans. Fidelity Investments, Fortress Investment Group, Susquehanna International Group and Virtu Financial were among the hundreds who penned letters to the CFTC in support of Bankman-Fried&#39;s vision.</span></p>
      <p className="c7 c3"><span className="c11">The old guard of the derivatives industry, including heavyweights CME Group Inc. and Intercontinental Exchange Inc., and the FIA itself, were aghast at FTX&rsquo;s brazen pitch and stunned at the public outpouring of praise.</span></p>
      <p className="c7 c3"><span className="c17">The two exchange operators had their own motivations, of course: it could be a threat to their bottom lines, since keeping all those stabilizing intermediaries in place adds costs. But more urgently, as the two companies stressed to regulators in strident </span><span className="c17"><a className="c0" href="https://www.google.com/url?q=https://comments.cftc.gov/PublicComments/CommentList.aspx?id%3D7254&amp;sa=D&amp;source=editors&amp;ust=1672936721007775&amp;usg=AOvVaw0uwkOW4cGujgBRRa_ABsvY">comment letters</a></span><span className="c11">, it could also introduce undue risk into the whole marketplace.</span></p>
      <p className="c7 c3"><span className="c11">Their comments, which are looking more prescient by the day, raised alarms about the ties between FTX and Alameda. The links between the exchange and the proprietary trading firm were just one way the proposed system could pose conflicts, they argued at the time.</span></p>
      <p className="c7 c3"><span className="c11">US and Bahamian authorities are just beginning to untangle the extent of those connections and whether they harmed customers, as they hunt for clues to explain the ultimate source of FTX&rsquo;s multibillion-dollar collapse. The Wall Street Journal has reported that Alameda took user funds to make loan payments as the crypto market crashed earlier this year.</span></p>
      <p className="c7 c3"><span className="c17">FTX.US quickly </span><span className="c17"><a className="c0" href="https://www.google.com/url?q=https://www.bloomberg.com/news/articles/2022-11-11/ftx-withdraws-us-derivatives-clearing-plan-from-cftc&amp;sa=D&amp;source=editors&amp;ust=1672936721008310&amp;usg=AOvVaw35o4ErB35uY_SnbGR56gX6">yanked its application</a></span><span className="c11">&nbsp;from the CFTC as Bankman-Fried&rsquo;s empire descended into chaos.</span></p>
      <h3 className="c7 c30" id="h.lf4ki74zjlwj"><span className="c37">Cornering Wonks</span></h3>
      <p className="c7 c3"><span className="c11">Until Bankman-Fried&rsquo;s rival Changpeng &ldquo;CZ&rdquo; Zhao brought about FTX&rsquo;s demise with a fire sale of the exchange&rsquo;s native token, FTT, the curly-haired, video game-playing Massachusetts Institute of Technology grad was flying close to the sun.</span></p>
      <p className="c7 c3"><span className="c11">In Boca Raton eight months ago, Bankman-Fried wandered the white halls of the resort in his khaki shorts and FTX T-shirt. Guests gawked and fawned over him. One attendee remembers angling for a handshake, only to be admonished by a handler, who said the crypto visionary didn&rsquo;t like touching. Still, his affable, open-book attitude was out in full force. He happily answered questions on the sidelines as he bounced to and from meetings and panels.</span></p>
      <p className="c7 c3"><span className="c11">Sponsoring FIA conferences was a way for FTX to corner the wonks in one place, familiarize them with FTX over a drink or two, and even get a chance to influence the content. Platinum sponsorship costs roughly $25,000 to $30,000, according to FIA&rsquo;s website, and, depending on the event, it can reach north of $50,000 &mdash; still chump change by crypto standards.</span></p>
      <p className="c7 c3"><span className="c11">The events offered a way to come off as an approachable and legitimate player in derivatives, rather than an unknown platform throwing off cash from a penthouse in the Caribbean.</span></p>
      <p className="c7 c3"><span className="c11">Unlike crypto, it&rsquo;s a tough industry to crack. ICE&rsquo;s origin story begins in 1997. CME&rsquo;s roots extend all the way back to 19th century grain markets in Chicago. FIA conference attendees are fine print-readers whose jobs rely on predicting worst-case scenarios, including how market blow-ups happen. Regulators know their names and care about their opinions.</span></p>
      <p className="c7 c3"><span className="c11">Walt Lukken, FIA&rsquo;s president, said he hadn&rsquo;t heard of Bankman-Fried until last year. When the crypto hero made the cover of Forbes and bought LedgerX, he said he started to pay attention.</span></p>
      <p className="c7 c3"><span className="c11">&ldquo;There are no regrets &mdash; we always are looking for innovators, people who are coming into our space to bring new ideas,&rdquo; Lukken said during an interview in Chicago. &ldquo;It&#39;s just incredibly disappointing if it turns out to be true that there is fraud coming out of this.&rdquo;</span></p>
      <p className="c7 c3"><span className="c17">To gain a stronger foothold, FTX.US strengthened ties with other disruptors. It invested in IEX Group Inc., the stock exchange that Michael Lewis detailed in Flash Boys. The two firms </span><span className="c17"><a className="c0" href="https://www.google.com/url?q=https://www.sec.gov/comments/s7-25-20/s72520-20127575-288804.pdf&amp;sa=D&amp;source=editors&amp;ust=1672936721009484&amp;usg=AOvVaw0pLB6iEKWDmzhaswRKbzZI">visited</a></span><span className="c11">&nbsp;Securities and Exchange Commission Chair Gary Gensler together in March.</span></p>
      <p className="c7 c3"><span className="c11">Though their partnership was based on crypto market structure, it offered an enticing pairing with an exchange that had challenged the mainstream and earned clout with regulators in Washington &mdash; a growing battleground for Bankman-Fried and his associates that may have ultimately sowed the seeds of his demise at the hands of Zhao.</span></p>
      <p className="c7 c3"><span className="c11">Bankman-Fried&rsquo;s schlubby look and disregard for norms irked more than a few people, including longtime CME CEO Terry Duffy. The two clashed in an heated discussion at the Boca Raton event that lasted more than an hour, Bloomberg previously reported.</span></p>
      <p className="c7 c3"><span className="c11">It was largely brushed off back then. &ldquo;All change creates tension,&rdquo; said David Weisberger, who earlier in his career built trading systems for Morgan Stanley and Two Sigma and now runs crypto company CoinRoutes. Mark Wetjen, a former CFTC commissioner who was head of policy and regulatory strategy for FTX&rsquo;s US arm at the time, mused that it&#39;s &ldquo;just a natural human behavior to respond a certain way when something seems new or novel.&rdquo;</span></p>
      <h3 className="c7 c30" id="h.o2ys5j96jyge"><span className="c37">Plumbing Purchases</span></h3>
      <p className="c7 c3"><span className="c11">Bankman-Fried&rsquo;s efforts to expand FTX into the depths of financial market plumbing only grew stronger after Boca Raton.</span></p>
      <p className="c7 c3"><span className="c17">As part of FTX&rsquo;s buying spree when crypto markets were plunging in the spring, it </span><span className="c17"><a className="c0" href="https://www.google.com/url?q=https://www.bloomberg.com/news/terminal/RDTW8RGFWR28&amp;sa=D&amp;source=editors&amp;ust=1672936721010312&amp;usg=AOvVaw1AykP2__JsdZwsHZ7_P8nY">bought</a></span><span className="c11">&nbsp;a young clearing firm called Embed. Clearing firms are yet another piece of market structure that exist to keep trading risks in check, but that few pay attention to until there&rsquo;s a reason.</span></p>
      <p className="c7 c3"><span className="c17">One example of such a crisis: Robinhood Markets Inc.&rsquo;s liquidity crunch during the runaway rally in GameStop Corp., which led to a Congressional </span><span className="c17"><a className="c0" href="https://www.google.com/url?q=https://financialservices.house.gov/events/eventsingle.aspx?EventID%3D407107&amp;sa=D&amp;source=editors&amp;ust=1672936721010652&amp;usg=AOvVaw1rPRKLBhdQDwXe3Bf6nHZJ">hearing</a></span><span className="c11">&nbsp;about what happened during the meme stock mania.</span></p>
      <p className="c7 c3"><span className="c17">Bankman-Fried in May </span><span className="c17"><a className="c0" href="https://www.google.com/url?q=https://www.bloomberg.com/news/articles/2022-05-13/billionaire-bankman-fried-triggers-surge-in-robinhood-stock&amp;sa=D&amp;source=editors&amp;ust=1672936721010903&amp;usg=AOvVaw0EQ58hL7EtqsxzSHsNGYps">acquired</a></span><span className="c17">&nbsp;a 7% stake in Robinhood. He spoke to people in his orbit about </span><span className="c17"><a className="c0" href="https://www.google.com/url?q=https://www.bloomberg.com/news/articles/2022-06-27/bankman-fried-s-ftx-said-to-be-seeking-path-for-robinhood-deal&amp;sa=D&amp;source=editors&amp;ust=1672936721011097&amp;usg=AOvVaw1EcRvpP2b94VNj-qz4xIq2">wanting to buy</a></span><span className="c11">&nbsp;the whole company one day.</span></p>
      <p className="c3 c7"><span className="c11">The fate of that Robinhood position is now in limbo. Bankman-Fried acquired it through an entity called Emergent Fidelity Technologies, which isn&#39;t listed in FTX&#39;s bankruptcy filings, though it was listed as an asset on FTX&rsquo;s balance sheet. Still worth more than $500 million, it&#39;s likely to come up as FTX&#39;s more than 1 million customers look to recover some of their missing money.</span></p>
      <h3 className="c7 c30" id="h.os1mlh8lzk98"><span className="c37">Uneasy Relief</span></h3>
      <p className="c7 c3"><span className="c11">In the ground level exhibition hall at the Sheraton Grand Chicago Riverwalk, participants this week still can&rsquo;t quite believe that they were so close to having Bankman-Fried again strolling through the hallways and once again stealing the show.</span></p>
      <p className="c7 c3"><span className="c11">Instead, Bankman-Fried is facing a possible trip to the US for questioning &mdash; American and Bahamian authorities have been discussing bringing him stateside, with conversations between law-enforcement officials in the two countries intensifying in recent days as they probe his role in FTX&rsquo;s implosion.</span></p>
      <p className="c7 c3"><span className="c11">At the conference, Gerry Corcoran described a feeling of relief. Corcoran is the CEO of R.J. O&rsquo;Brien &amp; Associates, one of the futures market intermediaries that FTX.US was trying to skirt around.</span></p>
      <p className="c7 c3"><span className="c11">&ldquo;The current system in place for the futures industry is safe, robust, and proved over time,&rdquo; Corcoran said in an interview.</span></p>
      <p className="c7 c3"><span className="c11">Others noted FTX&rsquo;s implosion is forcing people to look more closely at areas of the finance industry that are typically afterthoughts. </span></p>
      <p className="c7 c3"><span className="c11">&ldquo;When an issue like this happens, it really shines a light,&rdquo; said Alicia Crighton, a partner at Goldman Sachs Group Inc.</span></p>
      <p className="c7 c3"><span className="c11">Near the short rib macaroni and cheese congealing in a chafing dish at the after-hours drinks reception, attendees wondered aloud what consequences Bankman-Fried and his associates, including Ellison, will face.</span></p>
      <p className="c7 c3"><span className="c11">Despite the conference organizers&rsquo; best efforts, some of FTX&rsquo;s fingerprints remained.</span></p>
      <p className="c7 c3"><span className="c11">There&rsquo;d been no time to reprint the programs. FTX appeared alongside CME and Barclays Plc on the back cover.</span></p>
      <p className="c7 c3 c6"><span className="c11"></span></p>


























              
            </div>
          </div>

        </div>



      </Modal>
    </div>
  );
}

export default App;
