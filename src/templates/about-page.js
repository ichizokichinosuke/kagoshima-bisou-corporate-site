import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const AboutPageTemplate = ({
  image,
  title,
  subheading,
  // content,
  // contentComponent
}) => {
  const heroImage = getImage(image) || image;
  const kbImage = "../img/kb.jpg";
  const wholeImage = "../img/whole.jpeg";

  return (
    <div>
      <FullWidthImage img={heroImage} title={title} subheading={subheading}/>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-2">会社概要</h2>
                <div className="columns">
                  <div className="column">
                    <div className="content">
                      <table className="table is-hoverable has-text-lefted is-striped">
                        <tbody>
                          <tr>
                            <th>会社名</th>
                            <td>株式会社鹿児島美掃</td>
                          </tr>
                          <tr>
                            <th>代表取締役社長</th>
                            <td>小野陽子</td>
                          </tr>
                          <tr>
                            <th>所在地</th>
                            <td>〒890-0022 鹿児島県鹿児島市小野町3263番地</td>
                          </tr>
                          <tr>
                            <th>連絡先</th>
                            <td>
                              電話番号<span style={{margin: "0 4em 0 0 "}} />099-204-9893
                              <br />FAX<span style={{margin: "0 6.2em 0 0 "}} />099-204-9894
                              <br />メールアドレス<span style={{margin: "0 1.25em 0 0 "}} />kk_bisou@lime.ocn.ne.jp
                            </td>
                          </tr>
                          <tr>
                            <th>設立</th>
                            <td>平成24年5月22日</td>
                          </tr>
                          <tr>
                            <th>資本金</th>
                            <td>1000万円</td>
                          </tr>
                          <tr>
                            <th rowSpan={5}>主な事業内容</th>
                            <td>
                              <span style={{margin: "0 6em 0 0 "}}>産業廃棄物処分業</span>鹿児島市 第08224168330号
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span style={{margin: "0 4em 0 0 "}}>産業廃棄物収集運搬業</span>鹿児島県 第04609168330号
                              <br /><span style={{margin: "0 14em 0 0 "}}></span>福岡県 第04000168330号
                              <br /><span style={{margin: "0 14em 0 0 "}}></span>宮崎県 第04503168330号
                            </td>
                          </tr>
                          <tr>
                            <td><span style={{margin: "0 2em 0 0 "}}>産業廃棄物積替え又は保管</span>鹿児島市 第08211168330号</td>
                          </tr>
                          <tr>
                            <td>
                              <span style={{margin: "0 8em 0 0 "}}>再生骨材販売</span>鹿児島県 鹿リ認第30-8号(RC-30)
                              <br /><span style={{margin: "0 18.28em 0 0 "}}></span>鹿リ認第30-9号(RC-40)
                            </td>
                          </tr>
                          <tr>
                            <td><span style={{margin: "0 4em 0 0 "}}>一般貨物自動運送事業</span>九運貨物 第366号</td>
                          </tr>
                          <tr>
                            <th>取引銀行</th>
                            <td>
                              みずほ銀行、鹿児島銀行
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="content">
                  {/* <h2 className="title is-2">関連企業</h2> */}
                  <h2 className="title is-2">主要取引先</h2>
                  <h3 className="title is-3">KBパートナーズ株式会社</h3>
                  <div className="columns">
                  <div className="column">
                  <table className="table is-hoverable has-text-lefted is-striped">
                    <tbody>
                      <tr>
                        <th>代表取締役社長</th>
                        <td>小野凌雅</td>
                      </tr>
                      <tr>
                        <th>所在地</th>
                        <td>〒890-0022 鹿児島県鹿児島市小野町3282番地</td>
                      </tr>
                      <tr>
                        <th>連絡先</th>
                        <td>
                          電話番号<span style={{margin: "0 2em 0 0 "}} />099-204-9886
                          <br />FAX<span style={{margin: "0 4.2em 0 0 "}} />099-204-9894
                        </td>
                      </tr>

                      <tr>
                        <th>資本金</th>
                        <td>300万円</td>
                      </tr>
                      <tr>
                        {/* <th>設立</th> */}
                        <th>設立支援</th>
                        <td>令和2年5月</td>
                      </tr>
                      <tr>
                        <th>事業内容</th>
                        <td>土捨て場事業及び再生砕石販売</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                  <div className="column is-one-third">
                    <StaticImage src={kbImage} />
                  </div>
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="content">
                  <h2 className="title is-2">沿革</h2>
                  <table className="table is-hoverable has-text-lefted is-striped">
                    <tbody>
                      <tr>
                        <th>平成24年5月</th>
                        <td>鹿児島市吉野町にて開業</td>
                      </tr>
                      <tr>
                        <th>平成24年7月</th>
                        <td>一般廃棄物処理業 取得</td>
                      </tr>
                      <tr>
                        <th>平成24年9月</th>
                        <td>鹿児島市産業廃棄物収集運搬業 取得</td>
                      </tr>
                      <tr>
                        <th>平成24年10月</th>
                        <td>鹿児島県産業廃棄物収集運搬業 取得</td>
                      </tr>
                      <tr>
                        <th>平成26年5月</th>
                        <td>一般建設業 取得</td>
                      </tr>
                      <tr>
                        <th>平成27年12月</th>
                        <td>一般貨物自動車運送事業 取得</td>
                      </tr>
                      <tr>
                        <th>平成29年11月</th>
                        <td>中間処理事業拡張のため鹿児島市小野町へ移動</td>
                      </tr>
                      <tr>
                        <th>平成29年12月</th>
                        <td>産業廃棄物処分業 取得</td>
                      </tr>
                      <tr>
                        <th>平成30年9月</th>
                        <td>がれき類、ガラスくず、コンクリートくず及び陶磁器くずの中間処理（破砕）追加</td>
                      </tr>
                      <tr>
                        <th>平成31年2月</th>
                        <td>かごしま認定リサイクル製品 認定</td>
                      </tr>
                      <tr>
                        <th>令和元年7月</th>
                        <td>福岡県産業廃棄物収集運搬業 取得</td>
                      </tr>
                      <tr>
                        <th>令和元年8月</th>
                        <td>紙くず、木くず、繊維くず、ゴムくず、廃プラスチック類の中間処置（焼却）追加</td>
                      </tr>
                      <tr>
                        <th>令和2年5月</th>
                        <td>KBパートナーズ（株）設立（土捨て場事業、砕石販売事業）</td>
                      </tr>
                      <tr>
                        <th>令和3年3月</th>
                        <td>金属くず（水銀使用産業廃棄物を含む）、ガラスくず、コンクリートくず<br />及び陶磁器くず（水銀使用産業廃棄物を含む）の中間処理（破砕）追加</td>
                      </tr>
                      <tr>
                        <th>令和3年3月</th>
                        <td>宮崎県産業廃棄物収集運搬業 取得</td>
                      </tr>
                      <tr>
                        <th>令和3年9月</th>
                        <td>冷媒改修技術者 登録（従業員在籍）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="section">
                  <h2 className="title is-2">アクセスマップ</h2>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54369.05701784793!2d130.47149757910157!3d31.604649499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353e5e9ba77af365%3A0xd06b46970b11da10!2z77yI5qCq77yJ6bm_5YWQ5bO2576O5o6D!5e0!3m2!1sja!2sjp!4v1643469837469!5m2!1sja!2sjp" width="1000" height="500" style={{border:0}} allowfullscreen="" loading="lazy" title="Access Map"></iframe>
              </div>
              <div className="section">
                <h2 className="title is-2">場内案内</h2>
                <StaticImage src={wholeImage} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        subheading={post.frontmatter.subheading}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subheading
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
