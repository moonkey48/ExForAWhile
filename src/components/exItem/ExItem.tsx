import { Image } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';
import { ExItemT } from '../../types/ExType';
import { exItemFallback } from '../fallback/exFallback';

type ExItemProps = {
    item:ExItemT
}
const ExItem = ({item}:ExItemProps) => {
    const navigate = useNavigate()
    const handleNavigate = () =>{
        navigate(`/exlist/${item._id}`)
    }

    return <li onClick={handleNavigate}>
    {item.name}
    <Image src={item.picture} width="200px" height="200px"
    fallback={exItemFallback} preview={false}/>
</li>
}

export default ExItem;