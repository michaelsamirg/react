import React from 'react';

import NewsListItem from './news-list-item';

const NewsList = (props) => 
{
   
    return (
      <>
        {props.children}
        {
          
          props.news.map((item, i) => (
            <NewsListItem item={item} key={i}/>
          ))
        }
      </>
    )
}

export default NewsList;