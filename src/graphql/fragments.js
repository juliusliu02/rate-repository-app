import { gql } from '@apollo/client'

export const REPO_DETAILS = gql`
  fragment RepositoryDetails on Repository {
      fullName
      description
      language
      forksCount
      ratingAverage
      reviewCount
      stargazersCount
      ownerAvatarUrl
  }
`