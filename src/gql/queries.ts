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

export const COUNTRY_DETAILS = gql`
    query country ($code: ID!) {
        country (code: $code) {
            currency
            languages {
                name
            }
            native
            phone
            states {
                name
            }
        }
    }
`;