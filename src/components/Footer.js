import React from 'react';

export default function Footer() {
  return (
    <div>
      <div className="footer-images">
        <a href="http://www.refugees-say.com/" target="_blank">
          <img src={require(`../images/refugeesSay.png`)} alt="" />
        </a>
        <a href="http://www.ox.ac.uk/" target="_blank">
          <img src={require(`../images/oxweb-logo.png`)} alt="" />
        </a>
        <a href="https://codeyourfuture.co/" target="_blank">
          <img src={require(`../images/cyf-logo.png`)} alt="" />
        </a>
      </div>
      <p>© All rights reserved</p>
    </div>
  );
}
