import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-20 space-y-3'>
            <img className='md:w-full md:h-96 mb-8 rounded-xl' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className="flex mb-4">
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-xl'><CiBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl mb-6 font-bold">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span className='m-2' key={idx}><a>{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time, id)} className='text-purple-800 font-bold hover:underline'>Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;