import React from 'react';
import Article from '../../components/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './Blogs.css';

const Blogs = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="Check out top CSS frameworks that can help developers and designers create top-notch websites." />
      </div>
      <div className="gpt3__blog-container_groupB">
        {/* <Article imgUrl={blog01} date="Aug 6, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" /> */}
        <Article imgUrl={blog02} date="Aug 6, 2023" text="React is one of the most popular and trending  framework right now." />
        <Article imgUrl={blog03} date="Aug 6, 2023" text="Let your web page come alive with JavaScript." />
        <Article imgUrl={blog04} date="Aug 6, 2023" text="GPT-3 and Open  AI is the future. Let us explore how it is?" />
        <Article imgUrl={blog05} date="Aug 6, 2023" text="You should name a variable using the same care with which you name a first-born child" />
      </div>
    </div>
  </div>
);

export default Blogs;
