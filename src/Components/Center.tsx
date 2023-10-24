import { gql, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'

const Get_CenterData = gql`
{
    medicalCenters {
      edges {
        node {
          medicalCenterId
          title
          petyarMedicalCenter {
            address
            number
            description
          }
        }
      }
    }
  }
`
 
interface CenterProps{
  ID : number
}

const Center:React.FC<CenterProps> = ({ID}) => {

console.log(ID);

    // const { loading, error, data } = useQuery(Get_CenterData);
    // const [selectedId, setSelectedId] = useState(ID);
    // const [selectedObject, setSelectedObject] = useState(null);

    // useEffect(() => {
    //     const foundObject = data.medicalCenters.edges.find((item: any) => item.id === selectedId);
    //     setSelectedObject(foundObject);
    //     console.log(foundObject);
    // }, [selectedId]);


    // if (error) return (<p>Error : {error.message}</p>);
    // if (loading) return (<p>Loading...</p>);

    return (
        <div>
            {/* {selectedObject && (
                <div>
                    <p>ID: {foundObject}</p>
                    <p>Name: {selectedObject.name}</p>
                </div>
            )} */}
        </div>
    )
}

export default Center