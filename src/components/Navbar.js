import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo_concat_3.png";
import { getImage, StaticImage } from "gatsby-plugin-image";


const logoImg = "../img/logo_concat_3.png";
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
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
                <img className="image is-128x128px" src={logo} alt="logo img"/>
                {/* <StaticImage className="image is-128x128px" src={logoImg} alt="logo img"/> */}
                {/* <i className="fas fa-home fa-2x" style={{ height: "5em" ,width: "5em"}}></i> */}
                {/* <span />
                <span /> */}
                {/* <i className="fas fa-home" /> */}
            </Link>
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
                <Link className="navbar-item" to="/">
                  {/* <i className="fas fa-home" /> */}
                  ホーム
                </Link>
              <Link className="navbar-item" to="/about">
                会社情報
              </Link>
              <Link className="navbar-item" to="/business">
                事業案内
              </Link>
              <Link className="navbar-item" to="/certification">
                許可証
              </Link>
              <Link className="navbar-item" to="/recruit">
                採用情報
              </Link>
              <Link className="navbar-item" to="/contact">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
