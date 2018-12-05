/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const CookieConsentContainer = require('./cookie-consent-container');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    let references = this.props.config.footerLinks.map(
      (column, index) => {
        let renderedLinks = column.links.map(
          (link,index)=>{
            let href = (link.href.startsWith('http')||link.href.startsWith('//'))?
              link.href:
              this.docUrl(link.href, this.props.language);
            return <a href={href} key={'reference_'+index}>{link.name}</a>;
          });

        return (<div key={'reference_'+index}>
          <h3>{column.name}</h3>
          {renderedLinks}
        </div>);
      });

    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div className="subscribleForm">
            <h3>IoTeX Updates & Newsletter</h3>
            <span>Stay updated with our latest progress, news, events and community reward programs!</span>
            <form
              action='//network.us16.list-manage.com/subscribe/post?u=2f676e23e08fa3633f66ebc89&amp;id=b7930ab8b9'
              method='post'
              id='mc-embedded-subscribe-form'
              name='mc-embedded-subscribe-form'
              className='validate'
              target='_blank'
              noValidate={false}
            >
              <input
                type='email'
                aria-label='Email'
                id='mce-EMAIL'
                name='EMAIL'
                placeholder='email@example.com'
                required={true}
              />
              <input type='hidden' name='b_2f676e23e08fa3633f66ebc89_b7930ab8b9' tabIndex='-1' value=''/>
              <button>SUBSCRIBE</button>
            </form>
          </div>
          {references}
        </section>
        <section className='copyright'>Icons made by <a className='copyright' target='_blank' href='https://www.flaticon.com/authors/smalllikeart' rel='noopener noreferrer'>smalllikeart</a> from www.flaticon.com</section>
        <section className="copyright">{this.props.config.copyright}</section>
        <CookieConsentContainer />
      </footer>
    );
  }
}

module.exports = Footer;
