import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";

const IndexPageTemplate = ({
  image,
  title,
  subheading,
  mainpitch,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                      <h1 className="title">ごあいさつ</h1>
                      <p>
                        <strong>私たちは、廃棄物を取り扱う会社です。</strong>
                      </p>
                      <p>
                        廃棄物には、皆さまの日常生活で排出されるものや、企業等の事業活動で排出されるものなど、様々な種類があります。毎年、鹿児島県では約900万トンもの廃棄物が排出されていますが、多くの人々の不断の努力によってキレイで安全な街が維持されています。
                      </p>
                      <p>
                        私たちが目指すのも、その維持への貢献です。
                      </p>
                      <blockquote><strong>この素晴らしい街のため、そして子どもたちの未来のために、持続可能で住みよい社会を作り続ける。</strong></blockquote>
                       <p>
                        これの実現に向け、私たち鹿児島美掃はスタッフ一同、真正面から事業に取り組んでまいります。
                      </p>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      新着情報
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/information">
                        一覧
                      </Link>
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

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        subheading
        mainpitch {
          title
          description
        }
      }
    }
  }
`;
