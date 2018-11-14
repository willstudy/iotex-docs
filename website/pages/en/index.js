/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Button = require(`${process.cwd()}/core/Button.js`);
const Subscribe = require(`${process.cwd()}/core/Subscribe.js`);

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

function externalUrl(page, language) {
  return page + (language ? `?locale=${language}` : '');
}

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="youtubePlayerButton"><img src={imgUrl('ic_play.jpg')} id={'youtubePlayer'}></img></div>
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Modal = ({ show, children }) => {
  const showHideClassName = show ? 'toggle-sibling modal display-block' : 'modal display-none';

  return (
    <div id={'youtubePlayerContainer'} className={showHideClassName}>
      <section className='modal-main'>
        {children}
      </section>
    </div>
  );
};

const YouTube = () => (
  <div className="container">
    <iframe id="youtube_player"
            width="640"
            height="390"
            src={siteConfig.youtubeUrl+'?enablejsapi=1&rel=0'}
            frameBorder="0"
            allowFullScreen
            allowscriptaccess="always" >
    </iframe>
  </div>
);

const Logo = props => (
  <div >
    <img style={{height: '80px'}} src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
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



class HomeSection extends React.Component {

  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={externalUrl(siteConfig.references.roadmap.href, language)}>{siteConfig.references.roadmap.name}</Button>
            <Button href={externalUrl(siteConfig.references.whitePaper.href, language)}>{siteConfig.references.whitePaper.name}</Button>
          </PromoSection>
          <Subscribe title={'Start the journey with us'}
                     hint={'your email address'}
          />
        </div>
        <Modal show={false} >
          <YouTube />
        </Modal>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            var toggleYoutube = function() {
              const stepSibling = document.getElementById('youtubePlayerContainer');
              const klass = 'display-none';
              console.log("youtube clicked");
              if (stepSibling.classList.contains(klass)) {
                stepSibling.classList.remove(klass);
                stepSibling.classList.add('display-block');
              } else {
                stepSibling.classList.remove('display-block');
                stepSibling.classList.add(klass);
                document.getElementById('youtube_player').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
              }
            };
            document.getElementById('youtubePlayerContainer').addEventListener('click', toggleYoutube);
            document.getElementById('youtubePlayer').addEventListener('click', toggleYoutube);`,
          }}
        />
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    className={props.className}
    background={props.background}>
    <h1 className={"sectionHeader"}>{props.sectionHeader}</h1>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const ImageBlock = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    className={props.className}
    background={props.background}>
    <h1 className={"sectionHeader"}>{props.sectionHeader}</h1>
    <div className="blockElement alignCenter">
      <div className="blockImage ImageBlock">
        <img src={props.image}/>
      </div>
    </div>
  </Container>
);

const Features = () => (
  <Block layout="fourColumn">
    {[
      {
        content: 'This is the content of my feature',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Feature One',
      },
      {
        content: 'The content of my second feature',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Feature Two',
      },
    ]}
  </Block>
);

const FeatureCallout = () => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Feature Callout</h2>
    <MarkdownBlock>These are features of this project</MarkdownBlock>
  </div>
);

const LearnHow = () => (
  <Block className="LearnHow ContentSection" sectionHeader={'Connection the Physical World Block by Block'}>
    {[
      {
        content: 'Despite its rapid evolution,' +
        'IoT is still far from reaching mass adoption and lacks ' +
        '“killer applications” that would draw new users to the ecosystem due to issues such as low scalability,' +
        ' high operating cost, privacy concerns and lack of functional values.\n' +
        '</br></br>' +
        'IoTeX is tackling this problem by introducing token economy into IoT spaces as we strongly believe that crypto ' +
        'incentives as well as the community effort are the two key forces to propel innovations in IoT space. ' +
        'In short, IoTeX is the next generation IoT-oriented blockchain platform with strong scalability, privacy, ' +
        'isolatability and developability for incubating new IoT applications and ecosystems.',
        image: imgUrl('about-iotex.png'),
        imageAlign: 'right',
        title: 'Powered by a Privacy-Centric Blockchain',
      },
    ]}
  </Block>
);

const Innovations = () => (
  <ImageBlock className="Innovations ContentSection" sectionHeader={'IoTeX.Innovations\n'} image={imgUrl('our-inno.png')} />
);

const Architecture = () => (
  <ImageBlock className="Architecture ContentSection" sectionHeader={'IoTeX.Architecture\n'} image={imgUrl('arch.png')} />
);

const Roadmap = () => (
  <ImageBlock className="Roadmap ContentSection" sectionHeader={'IoTeX.Roadmap\n'} image={imgUrl('roadmap1.png')} />
);

const Invest = () => (
  <Container
    id={siteConfig.references.invest.elementId}
    padding={['bottom', 'top']}
    className="Invest ContentSection">
    <h1 className={"sectionHeader"}>IoTeX.Invest</h1>
    <div className="blockElement alignCenter">
      <div className="blockImage ImageBlock">
        <a href={siteConfig.references.binance.href}
          target="_blank">
          <img className="iconSection" src={imgUrl('binance.jpg')}/>
        </a>
        <a href={siteConfig.references.gate_io.href}
           target="_blank">
          <img className="iconSection" src={imgUrl('gateio.jpg')}/>
        </a>
        <a href={siteConfig.references.kucoin.href}
           target="_blank">
          <img className="iconSection" src={imgUrl('kucoin.jpg')}/>
        </a>
      </div>
    </div>
  </Container>
);

const SubscribeSection = () => (
  <Container
    padding={['bottom', 'top']}
    className="SubscribeSection ContentSection">
    <div className="blockElement alignCenter">
      <Subscribe
        header={'STAY UPDATED'}
        title={'With our latest progress and events.'}
      />
    </div>
  </Container>
);


const TryOut = () => (
  <Block id="try">
    {[
      {
        content: 'Talk about trying this out',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'left',
        title: 'Try it Out',
      },
    ]}
  </Block>
);

const Description = () => (
  <Block background="dark">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.users.filter(user => user.pinned).map(user => (
    <a href={user.infoLink} key={user.infoLink}>
      <img src={user.image} alt={user.caption} title={user.caption} />
    </a>
  ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who is Using This?</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
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
        <HomeSection language={language}/>
        <div>
          <LearnHow />
          <Innovations />
          <Architecture />
          <Roadmap />
          <Invest />
          <SubscribeSection />
        </div>
      </div>
    );
  }
}

module.exports = Index;
