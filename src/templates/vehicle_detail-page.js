import React from "react";
import Layout from "../components/Layout";
import { getImage, StaticImage } from "gatsby-plugin-image";
import FullWidthImage from "../components/FullWidthImage";
import { graphql } from "gatsby";

export const VehicleDetailTemplate = ({ image, title, subheading }) => {
  const heroImage = getImage(image) || image;
  const hino10tDump = "../img/hino-10tdump.jpg";
  const imageHeight = 300;
  return (
    <div>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">

                <div className="content">
                    <h3 className="title is-3">日野 10tダンプ</h3>
                    <div className="columns">
                        <div className="column">
                            <StaticImage src={hino10tDump} height={imageHeight}/>
                        </div>
                        <div className="column">
                            <table className="table is-hoverable has-text-lefted is-striped">
                                <tbody>
                                    <tr>
                                        <th>乗車定員</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>最大積載量</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>車両総重量</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>長さ</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>幅</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>高さ</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>総排気量</th>
                                        <td></td>
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

const vehicleDetailPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <VehicleDetailTemplate
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        subheading={post.frontmatter.subheading}
      />
    </Layout>
  );
};

export default vehicleDetailPage;

export const vehicleDetailQuery = graphql`
  query vehicleDetailPage($id: String!) {
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
