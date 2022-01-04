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
                                <div className="columns">
                                    <div className="column">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </div>
                                    <div className="column is-4">
                                        {/* test */}
                                        {/* {syobunkyokaImageVar} */}
                                        {/* <FullWidthImage img={syobunkyokaImageVar} /> */}
                                        <StaticImage src={syobunImage} height={imageHeight}/>
                                        {/* <img src={syobunImage} /> */}
                                    </div>
                                </div>
                                <h2 className="title is-3">産業廃棄物収集運搬業許可</h2>
                                <div className="columns">
                                    <div className="column">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </div>
                                    <div className="column is-4">
                                        {/* test */}
                                        {/* {syobunkyokaImageVar} */}
                                        {/* <FullWidthImage img={syobunkyokaImageVar} /> */}
                                        <StaticImage src={syuunImage} height={imageHeight}/>
                                        {/* <img src={syobunImage} /> */}
                                    </div>
                                </div>
                                <h2 className="title is-3">かごしま認定リサイクル製品認定証</h2>
                                <div className="columns">
                                    <div className="column">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </div>
                                    <div className="column is-4">
                                        {/* test */}
                                        {/* {syobunkyokaImageVar} */}
                                        {/* <FullWidthImage img={syobunkyokaImageVar} /> */}
                                        <StaticImage src={syuunImage} height={imageHeight}/>
                                        {/* <img src={syobunImage} /> */}
                                    </div>
                                </div>
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