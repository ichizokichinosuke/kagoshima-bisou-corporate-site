import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const AboutPageTemplate = ({
  image,
  title,
  subheading,
  content,
  contentComponent
}) => {
  const heroImage = getImage(image) || image;
  const PageContent = contentComponent || Content;

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
                {/* <h3 className="title">会社概要</h3> */}
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
                <PageContent className="content" content={content} />
                <LoadScript googleMapsApiKey="AIzaSyBW4uuvOUlsazFLqdoShtn4-w6e6xwGc_g">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={positionCompany}
                  zoom={17}
                >
                  <Marker position={positionCompany} label={markerLabelCompany}/>
                </GoogleMap>
              </LoadScript>
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
