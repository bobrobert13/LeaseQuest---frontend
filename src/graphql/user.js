import { gql } from "graphql-tag";

const userSchema = `
  _id
  fullName
  email
  foto
  password
  active
  phone
  social{
    facebook
    instagram
  }
  notifications{
    active
    username
    phone
  }
  seguridad{
    pin
    status
  }
  role
  address{
    referencia
    entityID
  }

`;

export const REGISTRO_USUARIO = gql`
  mutation addNewUser($data: userInput) {
    newUser(data: $data){
      ${userSchema}
    }
  }
`;

export const LOGIN = gql`
  query login($data: loginInput) {
    login(data: $data) {
      token {
        code
        expire
        user {
          _id
          role
          fullName
          email
        }
      }
    }
  }
`;
