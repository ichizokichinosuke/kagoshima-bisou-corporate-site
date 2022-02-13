import React from "react";
import Layout from "../components/Layout";
import { getImage, StaticImage } from "gatsby-plugin-image";
import FullWidthImage from "../components/FullWidthImage";
import { graphql } from "gatsby";

const VehicleTable = ({ capacity, maxLoad, totalHeavy, length, width, height, displacement }) => {
  return (
    <table className="table is-hoverable has-text-lefted is-striped">
      <tbody>
          <tr>
              <th>乗車定員</th>
              <td>{capacity}</td>
          </tr>
          <tr>
              <th>最大積載量</th>
              <td>{maxLoad}</td>
          </tr>
          <tr>
              <th>車両総重量</th>
              <td>{totalHeavy}</td>
          </tr>
          <tr>
              <th>長さ</th>
              <td>{length}</td>
          </tr>
          <tr>
              <th>幅</th>
              <td>{width}</td>
          </tr>
          <tr>
              <th>高さ</th>
              <td>{height}</td>
          </tr>
          <tr>
              <th>総排気量</th>
              <td>{displacement}</td>
          </tr>
      </tbody>
    </table>
  )
}

const VehicleDetailTemplate = ({ image, title, subheading }) => {
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
                        <div className="column is-narrow">
                            <StaticImage src={hino10tDump} height={imageHeight}/>
                        </div>
                        <div className="column">
                         <VehicleTable capacity="20" maxLoad="400" totalHeavy="200" length="40" width="50" height="10" displacement="30" />
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
