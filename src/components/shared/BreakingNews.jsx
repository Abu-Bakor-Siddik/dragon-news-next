import Marquee from "react-fast-marquee";

const news = [
  {
    "id": 1,
    "title": "Tech Companies Announce New AI Innovations"
  },
  {
    "id": 2,
    "title": "Global Markets Show Strong Recovery This Week"
  },
  {
    "id": 3,
    "title": "Scientists Discover Breakthrough in Renewable Energy"
  },
  {
    "id": 4,
    "title": "National Football Team Wins Championship Final"
  },
  {
    "id": 5,
    "title": "New Smartphone Model Released With Advanced Features"
  },
  {
    "id": 6,
    "title": "Heavy Rainfall Causes Flooding in Coastal Areas"
  },
  {
    "id": 7,
    "title": "University Introduces Modern Computer Science Curriculum"
  },
  {
    "id": 8,
    "title": "Space Agency Plans Next Moon Mission"
  }
];

const BreakingNews = () => {
    return (
        <div className="flex justify-between gap-4 items-center bg-gray-200 py-4 px-4 container mx-auto">
            <button className="btn bg-red-500 text-white">Latest News</button>
            <Marquee pauseOnHover={true} speed={150}> 
                {
                    news.map((n) => <span key={n.id} className="mr-50" >{n.title}</span>)
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;