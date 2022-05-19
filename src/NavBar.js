import React from 'react';

export class NavBar extends React.Component {
  render() {
    const pages = ['početna','ai_def','ai_primjena'];
    const navLinks = pages.map(page => {
      return (
        <a style={{padding: 10+'px'}} href={'#' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}