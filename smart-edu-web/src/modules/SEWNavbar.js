import React, { PureComponent } from 'react';

export default class SEWNavbar extends PureComponent {

  render() {
    return (
      <nav className="uk-navbar-container uk-margin" uk-navbar="mode: hover">
          <div className="uk-navbar-right">

              <ul className="uk-navbar-nav">
                  <li><a href="#">Active</a></li>
                  <li>
                      <a href="#">Parent</a>
                      <div className="uk-navbar-dropdown">
                          <ul className="uk-nav uk-navbar-dropdown-nav">
                              <li className="uk-active"><a href="#">Active</a></li>
                              <li><a href="#">Item</a></li>
                              <li><a href="#">Item</a></li>
                          </ul>
                      </div>
                  </li>

                  <li><a href="#">Item</a></li>
              </ul>

          </div>
      </nav>
    );
  }

}
