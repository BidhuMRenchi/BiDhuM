import { gql } from "@apollo/client";

const PORTFOLIO_QUERY = gql`
  query PORTFOLIO {
    portfolioApis {
      id
      name
      tech
      description
    }
  }
`;

export default PORTFOLIO_QUERY;