import React from "react";
// import Proptypes from "prop-types";
import { graphql, Link } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import FullWidthImage from "../components/FullWidthImage";

const RecruitPageTemplate = ({
  image,
  title,
  subheading,
}) => {
  const heroImage = getImage(image) || image;

  const imageHeight = 250;
  // const imageWidth = "2rem";

  return (
    <div>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <div className="content">
                    <blockquote>
                        <h4>事業拡大のため、共に働く仲間を随時募集しています!</h4>
                        <h4>持続可能な社会づくりに一緒に取り組みましょう!</h4>
                    </blockquote>
                </div>
                <h2 className="title is-2">解体土木作業員</h2>
                <div className="columns">
                  <div className="column">
                    <div className="content">
                      <table className="table is-hoverable is-striped has-text-lefted">
                        <tbody>
                          <tr>
                            <th>募集職種</th>
                            <td>解体土木作業員</td>
                          </tr>
                          <tr>
                            <th>募集人員</th>
                            <td>随時募集</td>
                          </tr>
                          <tr>
                            <th>仕事内容</th>
                            <td></td>
                          </tr>
                          <tr>
                            <th>年齢</th>
                            <td>不問</td>
                          </tr>
                          <tr>
                            <th>給与</th>
                            <td></td>
                          </tr>
                          <tr>
                            <th>昇給</th>
                            <td>年1回（原則）</td>
                          </tr>
                          <tr>
                            <th>賞与</th>
                            <td>年2回（業績に応じて支給）</td>
                          </tr>
                          <tr>
                            <th>休日</th>
                            <td>日曜、当社の定める日(年間休日カレンダーによる)</td>
                          </tr>
                          <tr>
                            <th>勤務時間</th>
                            <td>8:00 〜 17:00(時間外勤務有)</td>
                          </tr>
                          <tr>
                            <th>福利厚生</th>
                            <td></td>
                          </tr>
                          <tr>
                            <th>応募資格</th>
                            <td>学歴不問／業種・職種未経験者、第二新卒歓迎<br />
                                ・要普通自動車免許(AT限定可)<br />
                                ・Word、Excel、Powerpointの基本的な操作スキルをお持ちの方<br />
                                ・英語力を活かしたい方<br />
                                ※環境ビジネスに関わったことがある方は歓迎します。<br />
                                ※建設・電気業界の知識のある方は経験を活かせます。<br />
                                ※女性の活躍を積極的に支援するため、ポジティブアクションを適用しています。
                            </td>
                          </tr>
                          <tr>
                            <th>雇用形態</th>
                            <td>
                                正社員<br />
                                ※契約期間の定め無し<br />
                                ※3ヶ月の試用期間あり
                            </td>
                          </tr>
                          <tr>
                            <th>その他</th>
                            <td></td>
                          </tr>
                          <tr>
                            <th>選考方法</th>
                            <td>
                                面接<br />
                                ・<Link to="/contact">お問い合わせフォーム</Link>またはお電話でご連絡ください。
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        </div>
        </div>
      </section>
    </div>
  );
};

const RecruitPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <RecruitPageTemplate
        contentComponent={HTMLContent}
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        subheading={post.frontmatter.subheading}
      />
    </Layout>
  );
};

export default RecruitPage;

export const recruitPageQuery = graphql`
  query RecruitPage($id: String!) {
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
