import React from 'react';
import { useQuery } from 'react-query';
import { fetchExList } from '../../api/fetchEx';

const ExListContainer = () => {
    const {data, isLoading} = useQuery(['exList'], fetchExList)

    return (
        <>
        {isLoading && <h1>loading...</h1> }
        {data && <h1>data loaded</h1> }
        </>
    )
}

export default ExListContainer;