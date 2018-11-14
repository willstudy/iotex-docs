/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const HeaderNav = require('./nav/HeaderNav.js');
const Subscribe = require('./Subscribe.js');

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

    return <div className={'overwriteHeader'}>
      <HeaderNav
        config={this.props.config}
        baseUrl={this.props.config.baseUrl}
        title={this.props.config.title}
        language={this.props.language}
        version={this.props.config.version}
        current={this.props.metadata}
      />
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <Subscribe header={'IoTeX Updates & Newsletter'} />
          {references}
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    </div>;
  }
}

module.exports = Footer;
