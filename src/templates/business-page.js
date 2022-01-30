import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
// import Features from "../components/Features";
// import Testimonials from "../components/Testimonials";
// import Pricing from "../components/Pricing";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const BusinessPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  description,
  fullImageInterimProcess,
  // intro,
  // main,
  // testimonials,
  fullImage,
  pricing,
}) => {
  const heroImage = getImage(image) || image;
  const fwiInterimProcess = getImage(fullImageInterimProcess) || fullImageInterimProcess;
  const fullWidthImage = getImage(fullImage) || fullImage;
  const fwiCar = getImage(pricing.image) || pricing.image;

  const facilityImage = "../img/facility.jpg";
  const redContainerImage = "../img/red-container.jpg";
  const processBLocksImage = "../img/process-blocks.jpg";
  const excavatorCarsImage = "../img/excavator-cars.jpg";
  const bulldozersImage = "../img/bulldozers.jpg";
  const vehicleImage = "../img/vehicle.jpg";
  const blueCarImage = "../img/car.jpg";
  const imageHeight = 400;
  // const imageWidth = 500*3;

  return (
    <div className="content">
      <FullWidthImage img={heroImage} title={title} subheading={subheading}/>
      <section className="section section--gradient pb-0">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <h3 className="has-text-weight-semibold is-size-2">
                  {heading}
                </h3>
                <p className="is-size-5">{description}</p>
              </div>
            </div>
            <div className="content has-text-centered">
              <FullWidthImage img={fwiInterimProcess} brightness={100} />
              <h3>処理設備</h3>
            {/* <StaticImage src={facilityImage} height={imageHeight} /> */}
            </div>
            <div className="columns has-text-centered">
              {/* <div className="column"> */}
                {/* <FullWidthImage img={fwiInterimProcess} brightness={100}/> */}
              {/* </div> */}
              <div className="column">
                <StaticImage src={processBLocksImage} height={imageHeight} />
                <h3>砕石</h3>
              </div>
              <div className="column">
                <StaticImage src={redContainerImage} height={imageHeight} />
                <h3>コンテナ</h3>
              </div>
            </div>
            <div className="columns has-text-centered">
              <div className="column">
                <StaticImage src={excavatorCarsImage} height={imageHeight} />
                <h3>ショベルカー</h3>
              </div>
              <div className="column">
                <StaticImage src={bulldozersImage} height={imageHeight} />
                <h3>ブルドーザー等</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <FullWidthImage img={fullWidthImage} imgPosition={"bottom"} /> */}
      <section className="section section--gradient pt-0">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <h3 className="has-text-weight-semibold is-size-2">
                  {pricing.heading}
                </h3>
                <p className="is-size-5">{pricing.description}</p>
                {/* <Pricing data={pricing.plans} /> */}
              </div>
            </div>
            <div className="columns has-text-centered">
              <div className="column">
                <StaticImage src={vehicleImage} height={imageHeight}/>
                <h3>運搬車両</h3>
              </div>
              <div className="column">
                <StaticImage src={blueCarImage} height={imageHeight}/>
                <h3>青車両</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

BusinessPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  fullImageInterimProcess: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    // plans: PropTypes.array,
  }),
};

const BusinessPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <BusinessPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        fullImageInterimProcess={frontmatter.full_image_interim_process}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  );
};

BusinessPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default BusinessPage;

export const businessPageQuery = graphql`
  query  ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        description
        full_image_interim_process {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(quality: 72, layout: FULL_WIDTH)
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        pricing {
          heading
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          description
        }
      }
    }
  }
`;
