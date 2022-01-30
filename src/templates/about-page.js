import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const AboutPageTemplate = ({
  image,
  title,
  subheading,
  // content,
  contentComponent
}) => {
  const heroImage = getImage(image) || image;
  // const PageContent = contentComponent || Content;

  const containerStyle = {
    width: "100vh",
    height: "50vh",
  }

  const positionCompany = {
    lat: 31.604830736123052,
    lng: 130.5064537850215,
  };

  const markerLabelCompany = {
    color: "white",
    fontFamily: "sans-serif",
    fontSize: "15px",
    fontWeight: "100",
    // text: "鹿児島美掃",
  };


  return (
    <div>
      <FullWidthImage img={heroImage} title={title} subheading={subheading}/>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h3 className="title">会社概要</h3>
                {/* <article className="message is-large is-info">
                  <div className="message-header">
                    <p>会社概要</p>
                  </div>
                  <div className="message-body is-black">
                    <p>社名: 鹿児島美掃</p>
                    <p>所在地: 〒890-0022 鹿児島県鹿児島市小野町3263番地</p>
                  </div>
                </article> */}
                {/* <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2> */}
                {/* <PageContent className="content" content={content} /> */}
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
                            <td></td>
                          </tr>
                          <tr>
                            <th>所在地</th>
                            <td>〒890-0022 鹿児島県鹿児島市小野町3263番地</td>
                          </tr>
                          <tr>
                            <th>設立</th>
                            <td></td>
                          </tr>
                          <tr>
                            <th>資本金</th>
                            <td></td>
                          </tr>
                          <tr>
                            <th rowSpan={3}>主な事業内容</th>
                            <td><span style={{margin: "0 5em 0 0 "}}>産業廃棄物中間処理場</span>鹿児島市長 第8224168330号</td>
                          </tr>
                          <tr>
                            <td><span style={{margin: "0 5em 0 0 "}}>産業廃棄物収集運搬業</span>鹿児島県知事 第4609168330号</td>
                          </tr>
                          <tr>
                            <td>再生骨材販売</td>
                          </tr>
                          <tr>
                            <th>取引銀行</th>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <h3 className="title">アクセスアップ</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54369.05701784793!2d130.47149757910157!3d31.604649499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353e5e9ba77af365%3A0xd06b46970b11da10!2z77yI5qCq77yJ6bm_5YWQ5bO2576O5o6D!5e0!3m2!1sja!2sjp!4v1643469837469!5m2!1sja!2sjp" width="1000" height="500" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
              </div>
            </div>
            {/* <div className="column is-10 is-offset-1"> */}

            {/* </div> */}
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
