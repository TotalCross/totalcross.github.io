import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/organizational/layout"
import SEO from "../components/seo"
import HeroCenter from "../components/organizational/hero-center"

const BlogContainer = styled.div`
width: 85%;
max-width: 680px;
margin: 50px auto 0;
min-height: 68vh;
@media only screen and (max-width: 600px) {
  width: 95%;
}
` 

const BlogPost = styled.li`
padding: 20px 40px 40px;
border-radius: 10px;
box-shadow: 0 0 5px #8f8f8f;
`

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout>
        <SEO title="TotalCross Blog" description="Everything about embedded systems development"/>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title="TotalCross Blog" description="Everything about embedded systems development" />
        <HeroCenter 
            title="TotalCross Blog"
            titleColor="#efefef"
            tagline="Everything about embedded systems development"
            taglineColor="#efefef"
            bgImg={data.bg.childImageSharp.fluid}/>
      <BlogContainer>
        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <BlogPost key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline" style={{ color: "#c62f2e" }}>{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.author}</small>
                    <br/>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.subtitle || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </BlogPost>
            )
          })}
        </ol>
      </BlogContainer>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          author
          subtitle
        }
      }
    }
    bg: file(name: { eq: "bg_wavesdark" }, extension: { eq: "png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
