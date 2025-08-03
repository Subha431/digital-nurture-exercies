import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [section, setSection] = useState('books');

  let content;

  if (section === 'books') {
    content = <BookDetails />;
  } else if (section === 'blogs') {
    content = <BlogDetails />;
  } else if (section === 'courses') {
    content = <CourseDetails />;
  } else {
    content = <p>Please select a valid section.</p>;
  }

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Blogger App</h1>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:"0.5rem"}}>
        <button onClick={() => setSection('books')}>Show Books</button>
        <button onClick={() => setSection('blogs')}>Show Blogs</button>
        <button onClick={() => setSection('courses')}>Show Courses</button>
      </div>
    
      <div style={{marginTop: '20px'}}>
        {content}
      </div>
    </div>
  );
}

export default App;

