import React from "react";
import Proptypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import FullWidthImage from "../components/FullWidthImage";


export const CertPageTemplate = ({
    image,
    title,
    subheading,
    content,
    contentComponent
}) => {
    const heroImage = getImage(image) || image;
    const PageContent = contentComponent || Content;

    return (
        <div>
            <FullWidthImage img={heroImage} title={title} subheading={subheading} />
            <section className="section section--gradient">
                <div className="container">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="section">
                                <PageContent className="content" content={content} />
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