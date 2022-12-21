import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchExList } from '../../api/fetchEx';
import { ExList } from '../../types/ExType';
import ExItem from '../exItem/ExItem';


const ExListContainer = () => {
    const [exlist, setExlist] = useState<ExList>([])
    const {data, isLoading} = useQuery(['exList'], fetchExList, {
        refetchOnWindowFocus:false,
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
                return  <ExItem key={exItem._id} item={exItem} />
            })
            }</ul> }
        </>
    )
}

export default ExListContainer;