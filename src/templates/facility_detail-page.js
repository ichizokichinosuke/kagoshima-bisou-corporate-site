import React from "react";
import Layout from "../components/Layout";
import { getImage, StaticImage } from "gatsby-plugin-image";
import FullWidthImage from "../components/FullWidthImage";
import { graphql } from "gatsby";

const FacilityDetailTemplate = ({ image, title, subheading }) => {
  const heroImage = getImage(image) || image;
  return (
    <div>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h1 className="title is-2">破砕施設</h1>
                <div className="content">
                  <table className="table is-hoverable is-bordered has-text-lefted">
                    <thead>
                      <tr>
                        <th>処理可能ごみ</th>
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
                </div>
                <h1 className="title is-2">圧縮施設</h1>
                <div className="content">
                    <table className="table is-hoverable is-bordered has-text-lefted">
                        <thead>
                            <tr>
                                <th>処理可能ごみ</th>
                                <th>処理能力</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>廃プラスチック類</th>
                                <td>13.2t/日</td>
                            </tr>
                            <tr>
                                <th>ゴムくず</th>
                                <td>19.7t/日</td>
                            </tr>
                            <tr>
                                <th>金属くず</th>
                                <td>42.7t/日</td>
                            </tr>
                            <tr>
                                <th>紙くず</th>
                                <td>11.3t/日</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h1 className="title is-2">選別施設</h1>
                <div className="content">
                    <table className="table is-hoverable is-bordered has-text-lefted">
                        <thead>
                            <tr>
                                <th>処理可能ごみ</th>
                                <th>処理能力</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>ガラス、コンクリート、陶磁器、がれき類、金属、ゴムくず</th>
                                <td>222t/日</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h1 className="title is-2">焼却施設</h1>
                <div className="content">
                    <table className="table is-hoverable is-bordered has-text-lefted">
                        <thead>
                            <tr>
                                <th>処理可能ごみ</th>
                                <th>処理能力</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>紙くず</th>
                                <td>236.80kg/日</td>
                            </tr>
                            <tr>
                                <th>木くず</th>
                                <td>222.96kg/日</td>
                            </tr>
                            <tr>
                                <th>繊維くず</th>
                                <td>197.28kg/日</td>
                            </tr>
                            <tr>
                                <th>ゴムくず</th>
                                <td>89.84kg/日</td>
                            </tr>
                            <tr>
                                <th>廃プラスチック類</th>
                                <td>89.20kg/日</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const facilityDetailPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <FacilityDetailTemplate
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        subheading={post.frontmatter.subheading}
      />
    </Layout>
  );
};

export default facilityDetailPage;

export const facilityDetailQuery = graphql`
  query facilityDetailPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
