import { gql } from "graphql-tag";

const userSchema = `
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
