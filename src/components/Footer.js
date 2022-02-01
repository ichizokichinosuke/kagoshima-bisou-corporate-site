import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo_concat_3.png";


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-success-light">
        <div className="content has-text-centered has-text-black-ter">
          <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-one-six is-offset-one-six">
            {/* <div className="column"> */}
              <img
                src={logo}
                alt="logo"
                style={{ width: "auto", height: "5rem" }}
              />
            </div>
            <div className="column is-half">
              <div className="content">
                <p>〒890-0022 鹿児島県鹿児島市小野町3263番地</p>
                <p>TEL: 099-204-9893</p>
                <p>FAX: 099-204-9894</p>
              </div>
              <Link to="/contact">
                <button className="button is-outlined is-rounded is-large">お問い合わせ</button>
              </Link>
            </div>
          </div>
        </div>
        </div>
        <div className="content has-background-black has-text-white-ter has-text-centered">
            <div className="columns">
              <div className="column">
                Copyright 2022 ©  鹿児島美掃
              </div>
              <div className="column">
                <Link to="/privacy_policy">
                  プライバシーポリシー
                </Link>
              </div>
            </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
