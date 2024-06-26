import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, reading_Time}) => {

    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2">
            <div>
                <h3 className="text-3xl text-center">Reading Time: {reading_Time} Munites</h3>
            </div>
            <h2 className="text-3xl text-center ">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;