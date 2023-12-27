import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '../styles';
import { srConfig } from '../config';
const { colors_option_b, fontSizes, fonts } = theme;

const ProductContainer = styled(Section)`
  position: relative;

  .video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* Aspect ratio (16:9) for responsive scaling */
    overflow: hidden;
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .callToAction {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const TabsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  ${media.thone`display: block;`};
`;
const Tabs = styled.div`
  display: block;
  position: relative;
  width: max-content;
  z-index: 3;
  ${media.thone`
    display: flex;
    margin-bottom: 30px;
    width: 100%;
    overflow-x: scroll;
  `};
`;
const Tab = styled.button`
  ${mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  height: ${theme.tabHeight}px;
  padding: 0 20px 2px;
  margin-left: 20px;
  margin-right: 20px;
  transition: ${theme.transition};
  border-left: 2px solid ${colors_option_b.darkGrey};
  text-align: left;
  white-space: nowrap;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smallish};
  color: ${props => (props.isActive ? colors_option_b.green : colors_option_b.lightGrey)};
  ${media.tablet`padding: 0 15px 2px;`};
  ${media.thone`
    ${mixins.flexCenter};
    padding: 0 15px;
    text-align: center;
    border-left: 0;
    border-bottom: 2px solid ${colors_option_b.darkGrey};
    min-width: 120px;
  `};
  &:hover,
  &:focus {
    background-color: ${colors_option_b.shadowNavy};
  }
`;
const Highlighter = styled.span`
  display: block;
  background: ${colors_option_b.red};
  width: 2px;
  height: ${theme.tabHeight}px;
  border-radius: ${theme.borderRadius};
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 20px;
  margin-right: 20px;
  transition: ${theme.transition};
  transition-delay: 0.1s;
  z-index: 10;
  transform: translateY(
    ${props => (props.activeTabId > 0 ? props.activeTabId * theme.tabHeight : 0)}px
  );
  ${media.thone`
    width: 100%;
    max-width: ${theme.tabWidth}px;
    height: 2px;
    top: auto;
    bottom: 0;
    text-align: center;
    transform: translateX(
      ${props => (props.activeTabId > 0 ? props.activeTabId * (theme.tabWidth + 40) : 0)}px
    );
  `};
`;
const ContentContainer = styled.div`
  position: relative;
  padding-top: 12px;
  padding-left: 30px;
  flex-grow: 1;
  ${media.tablet`padding-left: 20px;`};
  ${media.thone`padding-left: 0;`};
`;
const TabContent = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  opacity: ${props => (props.isActive ? 1 : 0)};
  z-index: ${props => (props.isActive ? 2 : -1)};
  position: ${props => (props.isActive ? 'relative' : 'absolute')};
  visibility: ${props => (props.isActive ? 'visible' : 'hidden')};
  transition: ${theme.transition};
  transition-duration: ${props => (props.isActive ? '0.25s' : '0s')};
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: ${fontSizes.large};
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${colors_option_b.red};
        line-height: ${fontSizes.xlarge};
      }
    }
  }
  a {
    ${mixins.inlineLink};
  }
`;
const JobTitle = styled.h4`
  color: ${colors_option_b.white};
  font-size: ${fontSizes.xxlarge};
  font-weight: 500;
  margin-bottom: 5px;
`;
const Company = styled.span`
  color: ${colors_option_b.green};
`;
const JobDetails = styled.h5`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smallish};
  font-weight: normal;
  letter-spacing: 0.5px;
  color: ${colors_option_b.lightSlate};
  margin-bottom: 30px;
  svg {
    width: 15px;
  }
`;

const EmailLink = styled.a`
  padding-top: 300px;
  ${mixins.bigButton};
  font-size: ${fontSizes.smallish};
  margin-top: 50px;
`;

class Product extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  state = {
    activeTabId: 0,
  };

  componentDidMount() {
    import('scrollreveal').then(({ default: ScrollReveal }) => {
      ScrollReveal().reveal(this.product, srConfig());
    });
  }

  isActive = id => this.state.activeTabId === id;

  setActiveTab = activeTabId => this.setState({ activeTabId });

  render() {
    const { activeTabId } = this.state;
    const { data } = this.props;

    return (
      <ProductContainer id="product" ref={el => (this.product = el)}>
        <Heading>Frequently Asked Questions</Heading>
        <h3>How does Lucia's Attribution product work?</h3>
        <div>Watch the video below now to see a demo</div>
        <div className="video-container">
          <iframe
            width="1024"
            height="768"
            src="https://www.youtube.com/embed/EjAL8xNaGXQ?si=3F-Ng6PSero0mbi0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        <br />
        <br />
        <h2> Additional Questions </h2>
        <TabsContainer>
          <Tabs role="tablist">
            {data &&
              data.map(({ node }, i) => {
                const { url } = node.frontmatter;
                return (
                  <Tab
                    key={i}
                    isActive={this.isActive(i)}
                    onClick={e => this.setActiveTab(i, e)}
                    role="tab"
                    aria-selected={this.isActive(i) ? 'true' : 'false'}
                    aria-controls={`tab${i}`}
                    id={`tab${i}`}
                    tabIndex={this.isActive(i) ? '0' : '-1'}>
                    <span>{url}</span>
                  </Tab>
                );
              })}
            <Highlighter activeTabId={activeTabId} />
          </Tabs>
          <ContentContainer>
            {data &&
              data.map(({ node }, i) => {
                const { frontmatter, html } = node;
                const { title, url, company, range } = frontmatter;
                return (
                  <TabContent
                    key={i}
                    isActive={this.isActive(i)}
                    id={`job${i}`}
                    role="tabpanel"
                    tabIndex="0"
                    aria-labelledby={`job${i}`}
                    aria-hidden={!this.isActive(i)}>
                    <JobTitle>
                      <span>{title}</span>
                      <Company>
                        &nbsp;&nbsp;
                        <a href={url} target="_blank" rel="nofollow noopener noreferrer">
                          {company}
                        </a>
                      </Company>
                    </JobTitle>
                    <JobDetails>
                      <span>{range}</span>
                    </JobDetails>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                  </TabContent>
                );
              })}
          </ContentContainer>
        </TabsContainer>
        <br />
        <br />
        <div className="callToAction">
          <strong>Want to ask anything specific or want to register?</strong>
          <br />
          <br />
        </div>
        <div className="callToAction">
          <EmailLink href={`https://calendly.com/lingqingmeng`}>Book a Call</EmailLink>
        </div>
        <br />
        <br />
        <br />
        <br />
        <hr />
        <h2> Full FAQ below</h2>
        <h3>What's the difference between Lucia Attribution and Lucia Protocol?</h3>
        <div>Lucia Attribution Product is a B2B tool for tech businesses</div>
        <div>
          Read{' '}
          <b>
            <a href="https://vivid-lightning-e40.notion.site/Difference-between-Lucia-Attribution-and-Lucia-s-Lending-and-Borrowing-Protocol-2e4fc38cb2e548eab91a8fe07180e3ed?pvs=4">
              this article
            </a>
          </b>{' '}
          to understand what the difference is between our attribution product and our borrowing and
          lending protocol
        </div>

        <h3>How affordable is your attribution product?</h3>
        <div>
          {' '}
          Pricing is based on total numbers of end users attributed. But if you are a business
          owner, you should consider the cost of not doing this. Lets say you have a working product
          with paying customers. By purchasing this product you immediately get more revenue into
          your business, and you lower cost of user acquisition. This opens up your company to
          additional marketing efforts because now you are sure you'll have a positive ROI from
          ads/nonpaid organic content.{' '}
        </div>
        <h3>Why do I need this when I can get other marketing tools? </h3>
        <div>
          Reddit uses Branch. Tony Robins uses Hyros. Tons of companies use an attribution product,
          and we are the best suited for Blockchain companies{' '}
        </div>

        <h3>What happens if someone borrows from the protocol doesn't pay the protocol back</h3>
        <div>
          This question is for our B2C product. We enter a legal relationship with our users. Our
          protocol requires KYC so users are eventually obligated to pay loan back in full
        </div>
      </ProductContainer>
    );
  }
}

export default Product;
