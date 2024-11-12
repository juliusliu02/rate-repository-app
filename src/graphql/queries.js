import { gql } from '@apollo/client';
import { REPO_DETAILS } from "./fragments";

export const GET_REPOSITORIES = gql`
    query {
        repositories {
            edges {
                node {
                    ...RepositoryDetails
                }
            }
        }
    }
    ${REPO_DETAILS}
`;

export const ME = gql`
    query {
        me {
            id
            username
        }
    }
`
