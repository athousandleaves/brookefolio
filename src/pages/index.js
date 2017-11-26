import React from 'react'
import Link from 'gatsby-link'
import Script from 'react-load-script'

export default class IndexPage extends React.Component {
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
  
  render () {
    return (
      <div>
      <Script
        url="https://identity.netlify.com/v1/netlify-identity-widget.js" 
        onLoad={this.handleScriptLoad.bind(this)} />
        <h1>Brooke Snellings</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <script>
          if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
              if (!user) {
                window.netlifyIdentity.on("login", () => {
                  document.location.href = "/admin/";
                });
              }
            })
          }
        </script>
      </div>
    )
  }
}