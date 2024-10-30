import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3 mt-8 bg-gray-300">
            <h2 className="text-2xl bg-purple-200 text-center font-semibold px-5 py-4 border-2 border-purple-800">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}


export default Bookmarks;