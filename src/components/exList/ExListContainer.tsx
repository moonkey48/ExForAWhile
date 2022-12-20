import { Image } from 'antd';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchExList } from '../../api/fetchEx';
import { ExList } from '../../types/ExType';
import { exItemFallback } from '../fallback/exFallback';

const ExListContainer = () => {
    const [exlist, setExlist] = useState<ExList>([])
    const {data, isLoading} = useQuery(['exList'], fetchExList, {
        refetchOnWindowFocus:false,
        refetchOnMount: false,
        onSuccess(data: ExList) {
            console.log('data loaded')
            setExlist(data)
        },
    })

    return (
        <>
        {isLoading && <h1>loading...</h1>}
        {exlist &&  <ul>{
            exlist.map(exItem => {
                return <li key={exItem._id}>
                    {exItem.name}
                    <Image src={exItem.picture} width="200px" height="200px"
                    fallback={exItemFallback} />
                </li>
            })
            }</ul> }
        </>
    )
}

export default ExListContainer;