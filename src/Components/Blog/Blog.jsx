
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {Title, Cover, Author, Author_Image, Posted_Date, Reading_Time, Hashtags} = blog;
    return (
        <div className="mb-20 space-y-4">
            <img className="w-full" src={Cover} alt="#" />
            <div className="flex justify-between mb-4 ">
                <div className="flex gap-4">
                    <img className="w-14" src={Author_Image} alt="#" />
                    <div>
                        <h3 className="text-2xl">{Author}</h3>
                        <p>{Posted_Date}</p>
                    </div> 
                </div>
                <div className="flex items-center gap-3">
                    <span>{Reading_Time} Munites Read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className="bg-red-400 px-2 text-white rounded-sm">Bookmark</button>
                </div>
            </div>
            <h2 className="text-4xl">{Title}</h2>
            <p>
                {
                    Hashtags.map((hash, idx) => <span key={idx}><a href="#">{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(Reading_Time)} className="text-purple-600 font-bold underline">Mark As Read</button>
        </div>
    );
};

export default Blog;