/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div >
    <img style={{height: '80px'}} src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('logo.svg')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('guides.html', language)}>Overview</Button>
            <Button href={docUrl('sdk-account', language)}>Create an Account</Button>
            <Button href={docUrl('sdk-transfer', language)}>Transfer Tokens</Button>
            <Button href={docUrl('sdk-smart-contract', language)}>Run Smart Contracts</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top', 'left', 'right']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block background='light' layout="threeColumn">
    {[
      {
        title: 'Reference & SDKs',
        content: `
[JSON RPC API](/docs/json-rpc)

[JavaScript SDK iotex-client-js](/docs/iotex-client-js)
`,
        image: imgUrl('books.svg'),
        imageAlign: 'top',
      },
      {
        title: 'Guides',
        content: `
[Development Guides](/docs/guides)

[Open Testnet](/docs/open-testnet)
`,
        image: imgUrl('teacher.svg'),
        imageAlign: 'top',
      },
      {
        title: 'Software',
        content: `
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>

<a class="github-button" href="https://github.com/iotexproject/iotex-core" data-show-count="true" aria-label="Star iotexproject/iotex-core on GitHub">iotex-core</a>

<a class="github-button" href="https://github.com/iotexproject/iotex-explorer" data-show-count="true" aria-label="Star iotexproject/iotex-core on GitHub">iotex-explorer</a>

<a href="https://iotexscan.io" target="_blank">iotexscan.io <svg style="padding-top: 4px;" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="css-19vhmgv"><path fill="currentColor" d=" M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0, 0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z "></path><polygon fill="currentColor" points=" 45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8, 14.9 62.8,22.9 71.5,22.9 "></polygon></svg></a>

<a class="github-button" href="https://github.com/iotexproject/iotex-client-js" data-show-count="true" aria-label="Star iotexproject/iotex-client-js on GitHub">iotex-client-js</a>





`,
        image: imgUrl('elearning.svg'),
        imageAlign: 'top',
      },
    ]}
  </Block>
);

const Questions = props => {
  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Having Questions?</h2>
      <div className="logos">
        <img src={imgUrl('faq.svg')} />
      </div>
      <div className="more-users">
        <a className="button" href='https://gitter.im/iotex-dev-community/Lobby' target='_blank' rel='noreferrer noopener'>
          Ask in Gitter
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <Questions language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
