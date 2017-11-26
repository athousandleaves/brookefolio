import React from 'react'
import Link from 'gatsby-link'
import Script from 'react-load-script'

export default class Admin extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      console.log("THIS");
      window.netlifyIdentity.on('init', user => {
        console.log("happened");
        if (!user) {
          console.log("blah");
          window.netlifyIdentity.on('login', () => {
            console.log("yo");
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
      </div>
    )
  }
}