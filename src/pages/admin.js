import React, { Component } from "react";
import Helmet from "react-helmet";
import Script from 'react-load-script';

class AdminPage extends Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    return (
      <div className="admin">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js" 
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Content Manager</title>

          <link
            rel="stylesheet"
            href="https://unpkg.com/netlify-cms@~0.4/dist/cms.css"
          />
          <script src="https://unpkg.com/netlify-cms@~0.4/dist/cms.js" />
        </Helmet>
      </div>
    );
  }
}

export default AdminPage;