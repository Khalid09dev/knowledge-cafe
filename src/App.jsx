import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [reading_Time, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (time) => {
    const timeToInt = parseInt(time);
    const newReadingTime = reading_Time + timeToInt;
    setReadingTime(newReadingTime);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
          <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks bookmarks={bookmarks} reading_Time={reading_Time}></Bookmarks>
      </div>
    </>
  )
}

export default App
