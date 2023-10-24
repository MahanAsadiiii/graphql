import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client'
import Center from './Center';
import { Link } from 'react-router-dom';

const Get_centersDATA = gql`
{
  medicalCenters {
    edges {
      node {
        medicalCenterId
        title
        slug
      }
    }
  }
}
`


function ShowCenters() {
    const { loading, error, data } = useQuery(Get_centersDATA)
    const [centerSelect, setCenterSelect] = useState(0)
    if (loading) return (<p>Loading...</p>);
    if (error) return (<p>Error : {error.message}</p>);


    function NavigatHandler(CenterID : number) {
        setCenterSelect(CenterID)
    }

    return (

        <div className="App">
            {data ?
                data.medicalCenters.edges.map((center: any, key: number) => {
                    return (
                        <div key={key} className="">
                            <Link to={`/center/${center.node.medicalCenterId}`} onClick={() => NavigatHandler(center.node.medicalCenterId)}>{center.node.title}</Link>
                            <h3>{center.node.medicalCenterId}</h3>
                        </div>
                    )
                })
                : null}
                {/* {centerSelect && <Center ID={centerSelect} />} */}
        </div>
    );
}

export default ShowCenters;
