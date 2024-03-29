import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { getImage, StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import FullWidthImage from '../components/FullWidthImage'

// eslint-disable-next-line
export const BusinessPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  description,
  fullImageInterimProcess,
  pricing,
}) => {
  const heroImage = getImage(image) || image
  const fwiInterimProcess = getImage(fullImageInterimProcess) || fullImageInterimProcess

  const concreteStoreImage = '../img/concrete-store.jpg'
  const plasticStoreImage = '../img/plastic-store.jpg'
  const gypsumStoreImage = '../img/gypsum-store.jpg'
  const redContainerImage = '../img/red-container.jpg'
  const whiteContainerImage = '../img/white-container.jpg'
  const excavatorCarsImage = '../img/excavator-cars.jpg'
  const bulldozersImage = '../img/bulldozers.jpg'
  const vehicleImage = '../img/vehicle.jpg'
  const blueCarImage = '../img/car.jpg'
  const vacuumCarImage = '../img/vacuum-car.jpg'
  const breakMachineImage1 = '../img/break-machine-1.jpg'
  const breakMachineImage2 = '../img/break-machine-2.jpg'

  const IMAGE_HEIGHT = 400

  return (
    <div>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <div className='content'>
        <section className='section section--gradient'>
          <div className='container'>
            <div className='section'>
              <div className='columns'>
                <div className='column is-10 is-offset-1'>
                  <h3 className='has-text-weight-semibold is-size-2'>{heading}</h3>
                  <p className='is-size-5'>{description}</p>
                </div>
              </div>
              <div className='content has-text-centered'>
                <Link to='/certification/facility_detail'>
                  <h3 className='is-3'>砕石プラント</h3>
                  <FullWidthImage img={fwiInterimProcess} brightness={100} />
                </Link>
              </div>
              <div className='section'>
                <div className='columns has-text-centered'>
                  <div className='column'>
                    <h3>破砕施設（前）</h3>
                    <StaticImage src={breakMachineImage2} height={IMAGE_HEIGHT} />
                  </div>
                  <div className='column'>
                    <h3>破砕施設（横）</h3>
                    <StaticImage src={breakMachineImage1} height={IMAGE_HEIGHT} />
                  </div>
                </div>
              </div>
              <div className='section'>
                <div className='columns has-text-centered is-vcentered mb-0 pb-0'>
                  <div className='column'>
                    <h3 className='is-3'>コンクリート殻保管場所</h3>
                  </div>
                  <div className='column'>
                    <h3 className='is-3'>
                      廃プラ・がれき等
                      <br />
                      分別ピット
                    </h3>
                  </div>
                  <div className='column'>
                    <div className='content'>
                      <h3 className='is-3'>廃石膏ボード保管場所</h3>
                    </div>
                  </div>
                </div>
                <div className='columns mt-0 pt-0'>
                  <div className='column'>
                    <StaticImage src={concreteStoreImage} height={IMAGE_HEIGHT} />
                  </div>
                  <div className='column'>
                    <StaticImage src={plasticStoreImage} height={IMAGE_HEIGHT} />
                  </div>
                  <div className='column'>
                    <StaticImage src={gypsumStoreImage} height={IMAGE_HEIGHT} />
                  </div>
                </div>
              </div>
              <div className='section'>
                <div className='columns has-text-centered'>
                  <div className='column'>
                    <h3>4tアームロールコンテナ</h3>
                    <StaticImage src={whiteContainerImage} height={IMAGE_HEIGHT} />
                  </div>
                  <div className='column'>
                    <h3>コンテナ</h3>
                    <StaticImage src={redContainerImage} height={IMAGE_HEIGHT} />
                  </div>
                </div>
                <div className='columns has-text-centered'>
                  <div className='column'>
                    <h3>バックホウ</h3>
                    <StaticImage src={excavatorCarsImage} height={IMAGE_HEIGHT} />
                  </div>
                  <div className='column'>
                    <h3>タイヤショベル, フォークリフト</h3>
                    <StaticImage src={bulldozersImage} height={IMAGE_HEIGHT} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section section--gradient pt-0'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <h3 className='has-text-weight-semibold is-size-2'>{pricing.heading}</h3>
                <p className='is-size-5'>{pricing.description}</p>
                <p className='is-size-5'>
                  各車両詳細は<Link to='./vehicle_detail'>コチラ</Link>。
                </p>
              </div>
            </div>
            <div className='columns has-text-centered'>
              <div className='column'>
                <h3>収集運搬車両</h3>
                <StaticImage src={vehicleImage} height={IMAGE_HEIGHT} />
              </div>
              <div className='column'>
                <h3>塵芥車</h3>
                <StaticImage src={blueCarImage} height={IMAGE_HEIGHT} />
              </div>
            </div>
            <div className='content has-text-centered'>
              <h3>バキューム車</h3>
              <StaticImage src={vacuumCarImage} height={IMAGE_HEIGHT} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

BusinessPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  fullImageInterimProcess: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
}

const BusinessPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <BusinessPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        fullImageInterimProcess={frontmatter.full_image_interim_process}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

BusinessPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default BusinessPage

export const businessPageQuery = graphql`
  query ($id: String!) {
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
`
