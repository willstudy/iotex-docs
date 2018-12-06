const React = require('react');

class CookieConsentContainer extends React.Component {

  render() {
    let {content, accept} = this.props;
    content = content || 'We use cookies to offer you a better browsing experience, analyse\n' +
      '              site traffic, personalise content. By using our site, you consent to our use of cookies.';
    accept = accept || 'Accept Cookies';

    return (
      <div>
        <div id={'cookie-consent'}
             className={'CookieConsentFlexStyle'} >
          <div className={'CookieConsentContentStyle'} >
            <div >
              <div className={'ConsentTextStyle'} > {content} </div>
            </div>
            <div className={'AcceptButtonWrapStyle'} >
              <button
                className={'SampleButtonStyle'}
                width='100%'>
                {accept}
              </button>
            </div>
          </div>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        var cookieConsent = document.getElementById("cookie-consent");
        cookieConsent.addEventListener("click", function(event) {
          cookieConsent.style.display = "none";
          if (window.localStorage) window.localStorage.setItem('closeCookieConsent', true);
        });
        document.addEventListener("DOMContentLoaded", function(event) {
          const closed = window.localStorage ? window.localStorage.getItem('closeCookieConsent') : false;
          if(!closed) cookieConsent.style.display = "block";
        });
      `,
          }}
        />
      </div>
    );
  }
}
module.exports = CookieConsentContainer;
