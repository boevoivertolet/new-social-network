import React from 'react';


type PostButtonType = {
    title: string
}


export const PostButton = (props: PostButtonType) => {
    return <div><button>{props.title}</button></div>
}