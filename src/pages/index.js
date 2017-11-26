import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
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

export default IndexPage
