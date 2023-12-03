import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { webApp } from '../config';
import styled from 'styled-components';
import { theme, mixins, media, Section } from '../styles';
const { colors_option_b, fontSizes, fonts } = theme;

const HeroContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`;
const Hi = styled.h1`
  color: ${colors_option_b.white};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.medium};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.small};`};
  ${media.tablet`font-size: ${fontSizes.smallish};`};
`;
const Name = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const Subtitle = styled.h3`
  font-size: 48px;
  line-height: 1.1;
  color: ${colors_option_b.vanillaSlate};
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const ContactText = styled.div`
  font-size: 20px;
  color: ${colors_option_b.white};
`;
const Blurb = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  a {
    ${mixins.inlineLink};
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  padding-block: 40px;
`;
const Content = styled.div`
  h1 {
    font-size: 36px;
    margin-block: 0px;
  }
  h2 {
    font-size: 36px;
    font-weight: 300;
    margin-block: 0px;
  }
`;
const ImageContainer = styled.div``;
class Hero extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  state = {
    isMounted: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }), 1000);
  }

  componentWillUnmount() {
    this.setState({ isMounted: false });
  }

  render() {
    const { data } = this.props;
    const { isMounted } = this.state;
    const { frontmatter, html } = data[0].node;

    const one = () => <Hi style={{ transitionDelay: '50ms' }}>{frontmatter.title}</Hi>;
    const two = () => <Name style={{ transitionDelay: '100ms' }}>{frontmatter.name}</Name>;
    const three = () => (
      <Subtitle style={{ transitionDelay: '150ms' }}>{frontmatter.subtitle}</Subtitle>
    );
    const four = () => (
      <ContactText style={{ transitionDelay: '150ms' }}>{frontmatter.contactText}</ContactText>
    );
    const five = () => (
      <ContentContainer style={{ transitionDelay: '200ms' }}>
        <Content>
          <h1>{frontmatter.contentTitle}</h1>
          <h2>{frontmatter.contentText1}</h2>
          <h2>{frontmatter.contentText2}</h2>
          <Blurb dangerouslySetInnerHTML={{ __html: html }} />
        </Content>
        <ImageContainer>
          <img src={frontmatter.img} alt="hero" />
        </ImageContainer>
      </ContentContainer>
    );
    const items = [one, two, three, four, five];

    return (
      <HeroContainer>
        <TransitionGroup>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={3000}>
                {item}
              </CSSTransition>
            ))}
        </TransitionGroup>
      </HeroContainer>
    );
  }
}

export default Hero;
