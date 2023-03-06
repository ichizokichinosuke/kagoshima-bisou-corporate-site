import React from 'react'
import Layout from '../components/Layout'
import { getImage, StaticImage } from 'gatsby-plugin-image'
import FullWidthImage from '../components/FullWidthImage'
import { graphql } from 'gatsby'

const VehicleTable = ({
  capacity,
  maxLoad,
  totalHeavy,
  length,
  width,
  height,
  displacement,
}) => {
  return (
    <table className="table is-hoverable has-text-lefted is-striped">
      <tbody>
        <tr>
          <th>乗車定員</th>
          <td>{capacity}人</td>
        </tr>
        <tr>
          <th>最大積載量</th>
          <td>{maxLoad}kg</td>
        </tr>
        <tr>
          <th>車両総重量</th>
          <td>{totalHeavy}kg</td>
        </tr>
        <tr>
          <th>長さ</th>
          <td>{length}cm</td>
        </tr>
        <tr>
          <th>幅</th>
          <td>{width}cm</td>
        </tr>
        <tr>
          <th>高さ</th>
          <td>{height}cm</td>
        </tr>
        <tr>
          <th>総排気量</th>
          <td>{displacement}L</td>
        </tr>
      </tbody>
    </table>
  )
}

const VehicleDetailTemplate = ({ image, title, subheading }) => {
  const heroImage = getImage(image) || image
  const hino10tDump = '../img/hino-10tdump.jpg'
  const hino4tArm = '../img/hino-4tarmroll.jpg'
  const hino4tUnic = '../img/hino-4tunic.jpg'
  const isuzu4tPacker = '../img/isuzu-4tpacker.jpg'
  const huso2tBody = '../img/huso-2tbody.jpg'

  const imageHeight = 300
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
                      <StaticImage src={hino10tDump} height={imageHeight} />
                    </div>
                    <div className="column">
                      <VehicleTable
                        capacity="2"
                        maxLoad="8800"
                        totalHeavy="19920"
                        length="770"
                        width="290"
                        height="376"
                        displacement="8.86"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="content">
                  <h3 className="title is-3">日野 4tユニック</h3>
                  <div className="columns">
                    <div className="column is-narrow">
                      <StaticImage src={hino4tUnic} height={imageHeight} />
                    </div>
                    <div className="column">
                      <VehicleTable
                        capacity="2"
                        maxLoad="1650"
                        totalHeavy="7960"
                        length="844"
                        width="232"
                        height="304"
                        displacement="5.12"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="content">
                  <h3 className="title is-3">ふそう 2t平ボディ</h3>
                  <div className="columns">
                    <div className="column is-narrow">
                      <StaticImage src={huso2tBody} height={imageHeight} />
                    </div>
                    <div className="column">
                      <VehicleTable
                        capacity="3"
                        maxLoad="2000"
                        totalHeavy="4605"
                        length="469"
                        width="169"
                        height="195"
                        displacement="4.89"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="content">
                  <h3 className="title is-3">いすゞ 4t塵芥車</h3>
                  <div className="columns">
                    <div className="column is-narrow">
                      <StaticImage src={isuzu4tPacker} height={imageHeight} />
                    </div>
                    <div className="column">
                      <VehicleTable
                        capacity="3"
                        maxLoad="3050"
                        totalHeavy="7725"
                        length="579"
                        width="209"
                        height="227"
                        displacement="5.19"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="content">
                  <h3 className="title is-3">日野 4tアームロール</h3>
                  <div className="columns">
                    <div className="column is-narrow">
                      <StaticImage src={hino4tArm} height={imageHeight} />
                    </div>
                    <div className="column">
                      <VehicleTable
                        capacity="2"
                        maxLoad="3500"
                        totalHeavy="7960"
                        length="620"
                        width="219"
                        height="240"
                        displacement="5.12"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const vehicleDetailPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <VehicleDetailTemplate
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        subheading={post.frontmatter.subheading}
      />
    </Layout>
  )
}

export default vehicleDetailPage

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
`
