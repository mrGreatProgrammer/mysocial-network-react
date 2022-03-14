import ScrollerToTop from '../../components/ScrollerToTop/ScrollerToTop';
import AllPostsContainer from './AllPosts/AllPostsContainer';
import './HomePage.css'

function HomePage() {
    return (
        <div className="home__page">
            home page
            <AllPostsContainer />
            <ScrollerToTop />
        </div>
    )
}

export default HomePage;