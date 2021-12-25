import * as React from "react";
import { Link } from "gatsby";

// import facebook from "../img/social/facebook.svg";
// import instagram from "../img/social/instagram.svg";
// import twitter from "../img/social/twitter.svg";
// import vimeo from "../img/social/vimeo.svg";
// import logo from "../img/logo_transparent.png";
import logo from "../img/logo_concat_3.png";
// import logoName from "../img/logo_company_name_transparent.png";



const Footer = class extends React.Component {
  render() {
    return (
      // <footer className="footer has-background-primary has-text-white-ter">
      <footer className="footer has-background-success-light">
        <div className="content has-text-centered has-text-black-ter">
          <div className="columns is-vcentered">
            <div className="column is-one-fifths is-offset-one-fifth">
              {/* <h3>お見積り・お問い合わせ</h3>
              <p>廃棄物処理・リサイクル品の集荷・営業などを行なっています。</p>
              <p>お気軽にお問い合わせください！</p> */}
              <img
                src={logo}
                alt="logo"
                style={{ width: "auto", height: "5rem" }}
              />
            </div>
            {/* <div className="column is-one-fifths is-offset-second-fifth">
              <img
                src={logoName}
                alt="logo company name"
                // style={{ width: "auto", height: "rem" }}
              />
            </div> */}

            <div className="column is-half">
              <div className="content">
                <p>〒890-0022 鹿児島県鹿児島市小野町3263番地</p>
                <p>TEL: XXXX-XX-XXXX</p>
                <p>FAX: XXXX-YY-YYYY</p>
              </div>
              <Link to="/contact/examples">
                <button className="button is-outlined is-rounded is-large">お問い合わせ</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="content has-background-black has-text-white-ter has-text-centered">
            <div className="columns">
              <div className="column">
                Copyright 2022 ©  鹿児島美掃
              </div>
              <div className="column">
                <Link to="/">
                  プライバシーポリシー
                </Link>
              </div>
            </div>
        </div>
        {/* <div className="content has-text-centered has-background-success-light has-text-black-ter">
          <div className="container">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        会社情報
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        事業案内
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        お取引先の方へ
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        お問い合わせ
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </footer>
    );
  }
};

export default Footer;
