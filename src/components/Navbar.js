import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo_02.png";
import logoName from "../img/logo_company_name.png"

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
        style={{height: "5em"}}
      >
        <div className="container ">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              {/* <img src={logo} alt="Kaldi" style={{ width: "88px" , height:}} /> */}
              <img src={logo} alt="logo img" />
              <img src={logoName} alt="Company Name" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                会社情報
              </Link>
              <Link className="navbar-item" to="/products">
                事業案内
              </Link>
              <Link className="navbar-item" to="/blog">
                お取引先の方へ
              </Link>
              <Link className="navbar-item" to="/contact">
                採用情報
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                お問い合わせ
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <div class="navbar-item">
                <div class="field has-addons">
                  <div class="control">
                    <input class="input" type="text" name="search" placeholder="keyword search" />
                  </div>
                  <div class="control">
                    <a class="button is-info"><i class="fa fa-search"></i>検索</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
