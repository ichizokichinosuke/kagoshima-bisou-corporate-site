import React from "react";
// import Proptypes from "prop-types";
import { graphql, Link } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import FullWidthImage from "../components/FullWidthImage";

export const CertPageTemplate = ({
  image,
  title,
  subheading,
  // content,
  // contentComponent,
  // syobunkyokaImage,
}) => {
  const heroImage = getImage(image) || image;
  // const syobunImage = getImage(syobunkyokaImage) || syobunkyokaImage;
  // const PageContent = contentComponent || Content;
  const certSyobunImage = "../img/処分許可証.png";
  const certSyuunImage = "../img/県収集運搬.png";
  const certResycleImage = "../img/certi_resycle.jpeg";
  const vehicleImage = "../img/vehicle-another-angle.jpg";
  const facilityImage = "../img/facility.jpg";
  const processBLocksImage = "../img/process-blocks.jpg";

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
                {/* <h1 className="title is-2">許可証</h1> */}
                {/* <div className="block"></div> */}
                <h2 className="title is-2">産業廃棄物処分業許可</h2>
                <h3 className="title is-4">施設概要</h3>
                <div className="columns">
                  <div className="column">
                    <div className="content">
                      <table className="table is-hoverable is-bordered has-text-lefted">
                        <thead>
                          <tr>
                            <th>破砕施設</th>
                            <th>処理能力</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <th>1. 木くず</th>
                            <td>3.5t/日</td>
                          </tr>
                          <tr>
                            <th>2. 廃プラスチック類</th>
                            <td>0.79t/日</td>
                          </tr>
                          <tr>
                            <th>3. ガラス、コンクリート、陶磁器、紙くず</th>
                            <td>4.8t/日</td>
                          </tr>
                          <tr>
                            <th>4. がれき類、ガラス、コンクリート、陶磁器くず</th>
                            <td>288t/日</td>
                          </tr>
                          <tr>
                            <th>5. 金属（蛍光灯等）、ガラス、コンクリート、陶磁器くず</th>
                            <td>3.1t/日</td>
                          </tr>
                        </tbody>
                      </table>
                      {/* <p>詳細</p> */}
                      <Link to="./facility_detail">詳細</Link>
                    </div>
                  </div>
                  <div className="column is-3">
                    <Link to="https://drive.google.com/file/d/1pFQ_YPM5B3ueBeegPp_7lsgtvHaihYDt/view?usp=sharing">
                      <StaticImage src={certSyobunImage} height={imageHeight} />
                    </Link>
                  </div>
                </div>

                <h2 className="title is-3">産業廃棄物収集運搬業許可</h2>
                <h3 className="title is-4">保有車両</h3>
                <div className="columns">
                  <div className="column">
                    <div className="content">
                      <StaticImage
                        src={vehicleImage}
                        aspectRatio={3 / 2}
                        objectPosition={"center"}
                        layout="fullWidth"
                        style={{
                          gridArea: "1/1",
                          maxHeight: 400,
                        }}
                      />
                    </div>
                  </div>
                  <div className="column is-3">
                    <Link to="https://drive.google.com/file/d/1pFQ_YPM5B3ueBeegPp_7lsgtvHaihYDt/view?usp=sharing">
                      <StaticImage src={certSyuunImage} height={imageHeight} />
                    </Link>
                  </div>
                </div>
                <h2 className="title is-3">かごしま認定リサイクル製品認定証</h2>
                <h3 className="title is-4">設備</h3>
                <div className="columns">
                  <div className="column">
                    <div className="content">
                      <StaticImage
                        src={processBLocksImage}
                        aspectRatio={3 / 2}
                        objectPosition={"center"}
                        layout="fullWidth"
                        style={{
                          gridArea: "1/1",
                          maxHeight: 400,
                        }}
                      />
                    </div>
                  </div>
                  <div className="column is-3">
                    {/* <Link to="/"> */}
                    <StaticImage src={certResycleImage} height={imageHeight} />
                    {/* </Link> */}
                  </div>
                </div>
                <h1 className="title is-2">
                  電子マニフェスト（JW NET、e-reverse）
                </h1>
                <h2 className="title is-3">産業廃棄物処分業</h2>
                <table className="table is-hoverable is-bordered has-text-centered">
                  <tbody>
                    <tr>
                      <th>加入者番号</th>
                      <td>3017062</td>
                    </tr>
                    <tr>
                      <th>公開確認番号</th>
                      <td>708015</td>
                    </tr>
                  </tbody>
                </table>
                <h2 className="title is-3">産業廃棄物収集運搬業</h2>
                <table className="table is-hoverable is-bordered has-text-centered">
                  <tbody>
                    <tr>
                      <th>加入者番号</th>
                      <td>2028277</td>
                    </tr>
                    <tr>
                      <th>公開確認番号</th>
                      <td>766204</td>
                    </tr>
                  </tbody>
                </table>
                {/* <PageContent className="content" content={content} /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const CertPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <CertPageTemplate
        contentComponent={HTMLContent}
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        subheading={post.frontmatter.subheading}
        content={post.html}
        syobunkyokaImage={post.frontmatter.syobunkyokaImage}
      />
    </Layout>
  );
};

export default CertPage;

export const certPageQuery = graphql`
  query CertPage($id: String!) {
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
