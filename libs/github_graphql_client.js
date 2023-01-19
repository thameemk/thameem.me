/*******************************************************************************
 * Project : thameem.me
 * Filename : github_graphql_client.js
 * Author : thameem
 * Modified time : Thu, 19 Jan 2023 at 8:59 pm India Standard Time
 ******************************************************************************/


const {graphql} = require('@octokit/graphql')

const GITHUB_TOKEN = process.env.TOKEN
const REPOSITORY_OWNER = process.env.REPOSITORY_OWNER
const REPOSITORY_NAME = process.env.REPOSITORY_NAME

const request = graphql.defaults({
    headers: {
        authorization: `token ${GITHUB_TOKEN}`,
    },
})

export const getPosts = () => request(`{
    repository(name: ${REPOSITORY_NAME}, owner: ${REPOSITORY_OWNER}) {
      issues(first: 50,labels:"blog") {
        nodes {
          title
          number
          createdAt
          bodyHTML
        }
      }
    }
  }
`).then((data) => data.repository.issues.nodes)

export const getPost = (number) => {
    return request(`query getPost($number: Int!){
      repository(name: ${REPOSITORY_NAME}, owner: ${REPOSITORY_OWNER}) {
        issue(number: $number,labels:"blog") {
            title
            number
            createdAt
            bodyHTML
        }
      }
  }
`, {
        number: Number(number),
    }).then((data) => data.repository.issue)
}
