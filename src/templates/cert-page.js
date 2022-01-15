import React from "react";
import Proptypes from "prop-types";
import { graphql } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import FullWidthImage from "../components/FullWidthImage";
// import syobunImage from "../img/処分許可証.png";

export const CertPageTemplate = ({
    image,
    title,
    subheading,
    content,
    contentComponent,
    syobunkyokaImage,
}) => {
    const heroImage = getImage(image) || image;
    // const syobunImage = getImage(syobunkyokaImage) || syobunkyokaImage;
    const PageContent = contentComponent || Content;
    const syobunImage = "../img/処分許可証.png";
    const syuunImage = "../img/県収集運搬.png";
    const vehicleImage = "../img/vehicle.jpg";
    const facilityImage = "../img/facility.jpg";
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
                                <h1 className="title is-2">許可証</h1>
                                {/* <div className="block"></div> */}
                                <h2 className="title is-3">産業廃棄物処分業許可</h2>
                                <h3 className="title is-4">施設概要</h3>
                                <div className="columns">
                                    <div className="column">
                                        <div className="content">
                                        <table className="table is-hoverable is-bordered has-text-centered">
                                            <thead>
                                                <tr>
                                                    <th>破砕施設</th>
                                                    <th>処理能力</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <th>木くず</th>
                                                    <td>3.5t/日</td>
                                                </tr>
                                                <tr>
                                                    <th>廃プラスチック類</th>
                                                    <td>0.79t/日</td>
                                                </tr>
                                                <tr>
                                                    <th>ガラス、コンクリート、陶磁器、紙くず</th>
                                                    <td>4.8t/日</td>
                                                </tr>
                                                <tr>
                                                    <th>がれき類、ガラス、コンクリート、陶磁器くず</th>
                                                    <td>288t/日</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </div>
                                    </div>
                                    <div className="column is-3">
                                        {/* test */}
                                        {/* {syobunkyokaImageVar} */}
                                        {/* <FullWidthImage img={syobunkyokaImageVar} /> */}
                                        <StaticImage src={syobunImage} height={imageHeight}/>
                                        {/* <img src={syobunImage} /> */}
                                    </div>
                                </div>
                                <h2 className="title is-3">産業廃棄物収集運搬業許可</h2>
                                <h3 className="title is-4">保有車両</h3>
                                <div className="columns">
                                    <div className="column">
                                        <div className="content">
                                            <StaticImage
                                                src={vehicleImage}
                                                aspectRatio={3/2}
                                                objectPosition={"center"}
                                                layout="fullWidth"
                                                style={{
                                                    gridArea: "1/1",
                                                    maxHeight: 400,
                                                }}
                                                // transformOptions={{cropFocus: "attention"}}

                                            />
                                        </div>

                                    </div>
                                    <div className="column is-3">
                                        {/* test */}
                                        {/* {syobunkyokaImageVar} */}
                                        {/* <FullWidthImage img={syobunkyokaImageVar} /> */}
                                        <StaticImage src={syuunImage} height={imageHeight}/>
                                        {/* <img src={syobunImage} /> */}
                                    </div>
                                </div>
                                <h2 className="title is-3">かごしま認定リサイクル製品認定証</h2>
                                <h3 className="title is-4">設備</h3>
                                <div className="columns">
                                    <div className="column">
                                        <div className="content">
                                            <StaticImage
                                                src={facilityImage}
                                                aspectRatio={3/2}
                                                objectPosition={"center"}
                                                layout="fullWidth"
                                                style={{
                                                    gridArea: "1/1",
                                                    maxHeight: 400,
                                                }}
                                                // transformOptions={{cropFocus: "attention"}}
                                            />
                                        </div>

                                    </div>
                                    <div className="column is-3">
                                        {/* test */}
                                        {/* {syobunkyokaImageVar} */}
                                        {/* <FullWidthImage img={syobunkyokaImageVar} /> */}
                                        <StaticImage src={syuunImage} height={imageHeight}/>
                                        {/* <img src={syobunImage} /> */}
                                    </div>
                                </div>
                                <h1 className="title is-2">電子マニフェスト（JWネット、Eリバース）</h1>
                                <h2 className="title is-3">産業廃棄物処分業</h2>
                                <table className="table is-hoverable is-bordered has-text-centered">
                                    {/* <thead>
                                        <tr>
                                            <th>加入者番号</th>
                                            <th>公開確認番号</th>
                                        </tr>
                                    </thead> */}
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
                                    <thead>
                                        <tr>
                                            <th>加入者番号</th>
                                            <th>公開確認番号</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2028277</td>
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
    )
}

const CertPage = ({ data }) => {
    const {markdownRemark: post} = data;
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
    )
}

export default CertPage;

export const certPageQuery = graphql`
    query CertPage($id: String!) {
        markdownRemark(id: {eq: $id}) {
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
`