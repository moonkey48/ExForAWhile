import { Image } from 'antd';
import React from 'react';
import { ExItemT } from '../../types/ExType';
import { exItemFallback } from '../fallback/exFallback';

type ExItemProps = {
    item:ExItemT
}
const ExItem = ({item}:ExItemProps) => {
    return <li>
    {item.name}
    <Image src={item.picture} width="200px" height="200px"
    fallback={exItemFallback} />
</li>
}

export default ExItem;