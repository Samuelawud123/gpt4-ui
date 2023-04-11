import React from 'react'
import './article.css'

const Article = ({imageurl, date, title}) => {
  return (
    <div className='blog_container_article'>
      <div className='blog_container_article_image'>
        <img src={imageurl} alt='blog Image'/   >
      </div>
      <div className='blog_container_article_content '>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read full article</p>
      </div>
    </div>
  )
}

export default Article