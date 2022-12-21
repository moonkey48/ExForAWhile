import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import {fetchExList } from '../api/fetchEx';
import ExItem from  '../components/exItem/ExItem';
import { ExItemT } from '../types/ExType';

const ExDetailPage = () => {
    const params = useParams()
    const [item, setItem] = useState<ExItemT>()
    const {data} = useQuery(['id', params.id],fetchExList, {
        onSuccess: (data) => {
            data.forEach((exitem:ExItemT) => {
                if(exitem._id === params.id){
                    setItem(exitem)
                }
            })
        }
    })

    return (
        <>
        {item && <ExItem item={item} /> }
        </>
    )
}

export default ExDetailPage;