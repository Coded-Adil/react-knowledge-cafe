import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className='md:w-1/3 mt-8'>
            <h2 className='text-3xl rounded-lg font-semibold text-center py-4 px-5 bg-purple-300 border-2 border-purple-800 my-6'>Spent time on read: {readingTime} min</h2>
            <div className="bg-gray-200 rounded-lg">
                <h2 className="text-2xl text-center font-semibold px-5 py-4">Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}


export default Bookmarks;