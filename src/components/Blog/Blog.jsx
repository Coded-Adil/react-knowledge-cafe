import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div>
            <img src={cover} alt="" />
            <div className='flex justify-between'>
                <div className="flex">
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a>#{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;