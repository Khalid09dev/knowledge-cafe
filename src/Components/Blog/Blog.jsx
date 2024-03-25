
const Blog = ({blog}) => {
    const {Title, Cover, Author, Author_Image, Posted_Date, Reading_Time, Hashtags} = blog;
    return (
        <div>
            <img src={Cover} alt="#" />
            <div className="flex justify-between">
                <div>
                    <img className="w-14" src={Author_Image} alt="#" />
                    <div>
                        <h3 className="text-2xl">{Author}</h3>
                        <p>{Posted_Date}</p>
                    </div> 
                </div>
                <div>
                    <span>{Reading_Time} Read</span>
                </div>
            </div>
            <h2 className="text-4xl">{Title}</h2>
            {
                Hashtags.map((hash, idx) => <span key={idx}><a href="#">{hash}</a></span>)
            }
        </div>
    );
};

export default Blog;