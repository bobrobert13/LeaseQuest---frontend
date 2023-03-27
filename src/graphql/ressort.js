import { gql } from "graphql-tag";

const apartamentSchema = `
apartaments{
  _id
  name
    photo
    description
    disponible
    recomendado
    bathrooms
    rooms
    salas
    suite
    costo
    plans {
      byDay
      byMonth
      byWeek
    }
    points
    recomendadoBy {
      fullName
      foto
      email
    }
    gallery{
      photo
      url
    }
    numberApt
    calidad
    inFav {
      fullName
      email
    }
    cocinas
    muebleria
    servicios{
      name
      status
    }
    status
    booking{
      start
      end
    }
}

`;

export const GET_RESSORTS = gql`
  query getRessorts {
    getAllRessorts {
      nombre
      _id
      status
      rif
      tlt
      puntuacion
      ${apartamentSchema}
    }
  }
`;
