import React from 'react'
import './blog.css'
import Article from '../../components/article/article'
import blog01 from '../../assets/blog01.png'
import blog02 from '../../assets/blog02.png'
import blog03 from '../../assets/blog03.png'
import blog04 from '../../assets/blog04.png'
import blog05 from '../../assets/blog05.png'

const Blog = () => {
  return (
    <div className='blog section_padding' id="blog">
      <div className='blog_heading'>
        <h1 className='gradient_text'>A Lot is happening , We are blogging about it</h1>
      </div>
      <div className='blog_container'>
        <div className='blog_container_groupa'>
          <Article imageurl={blog01} date="sep 26, 2021" title="GPT4 and Open AI is the future. Let us explore how it is"/>
        </div>
        <div className='blog_container_groupb'>
          <Article imageurl={blog02} date="sep 26, 2022" title="GPT4 and Open AI is the future. Let us explore how it is"/>
          <Article imageurl={blog03} date="sep 26, 2023" title="GPT4 and Open AI is the future. Let us explore how it is"/>
          <Article imageurl={blog04} date="sep 25, 2021" title="GPT4 and Open AI is the future. Let us explore how it is"/>
          <Article imageurl={blog05} date="sep 25, 2022" title="GPT4 and Open AI is the future. Let us explore how it is"/>
        </div>

      </div>
    </div>
  )
}

export default Blog