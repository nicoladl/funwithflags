import {gql} from "@apollo/client";

export const COUNTRIES = gql`
    {
        countries {
            code
            name
            emoji
        }
    }
`;

export const COUNTRIES_SELECT_OPTIONS = gql`
    {
        countries {
            name
            code
        }
    }
`;

export const COUNTRY = gql`
    query country ($code: ID!) {
        country (code: $code) {
            capital
            continent {
                name
            }
        }
    }
`;

export const COUNTRIES_CONTAIN = gql`
    query countries ($code: String) {
        countries(filter: { code: { regex: $code } }) {
            code
            name
        }
    }
`;