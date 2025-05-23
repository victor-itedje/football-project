import React, { useState } from 'react';

const newsArticles = [
  {
    title: 'Cristiano Ronaldo Sets New Scoring Record',
    summary: 'Cristiano Ronaldo breaks another all-time scoring record in European competitions.',
    imageUrl: 'https://assets.goal.com/images/v3/blt2f81617ac7f9e045/Cristiano%20Ronaldo%20Al%20Nassr%202025%20(3).jpg?auto=webp&format=pjpg&width=3840&quality=60',
    date: 'May 18, 2025',
    link: '#',
  },
  {
    title: 'Messi Leads Inter Miami to Victory',
    summary: 'Lionel Messi scores twice in a thrilling win over their rivals.',
    imageUrl: 'https://www.newsday.com/_next/image?url=https%3A%2F%2Fcdn.newsday.com%2Fimage-service%2Fversion%2Fc%3AMmZhNzY1MzYtZDIzZi00%3AOGFiMjFkYjMtMWMyYi00%2Fmls-inter-miami-crew-soccer.jpeg%3Ff%3DLandscape%2B16%253A9%26w%3D770%26q%3D1&w=1920&q=80',
    date: 'May 17, 2025',
    link: '#',
  },
  {
    title: 'Kylian Mbappé moves to madrid',
    summary: 'Mbappé has officially taking a huge step and moved to real madrid per sources all over the world',
    imageUrl: 'https://assets.goal.com/images/v3/bltb893481a9f66b6e1/crop/MM5DCNZUGQ5DSOBRHJXG653FHIYTAMR2GIYQ====/mbappe%20(1).jpg',
    date: 'May 16, 2025',
    link: '#',
  },
];

const LatestNews = () => {
  const [comments, setComments] = useState([
    'Ronaldo never stops! Legend.',
    'Messi is still carrying teams at his age. Incredible!',
    'Madrid finally got Mbappé — it’s about time!',
  ]);
  const [input, setInput] = useState('');

  const handlePost = () => {
    if (input.trim() === '') return;
    setComments(prev => [...prev, input.trim()]);
    setInput('');
  };

  return (
    <div className="mt-[100px] p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Latest News Updates</h2>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* News Section */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 flex-1">
          {newsArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full object-cover h-48"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{article.summary}</p>
                <div className="text-xs text-gray-400 mb-2">{article.date}</div>
                <a
                  href={article.link}
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Comment Sidebar */}
        <div className="w-full lg:w-[25%] bg-white border border-gray-200 rounded-lg p-4 shadow h-fit">
          <h3 className="text-lg font-semibold mb-4">Fan Comments</h3>
          <div className="space-y-2 mb-4 max-h-[250px] overflow-y-auto pr-1">
            {comments.length === 0 ? (
              <p className="text-sm text-gray-400 italic">No comments yet.</p>
            ) : (
              comments.map((comment, idx) => (
                <div key={idx} className="text-sm bg-gray-100 p-2 rounded">
                  {comment}
                </div>
              ))
            )}
          </div>
          <textarea
            className="w-full p-2 border rounded text-sm mb-2"
            rows={3}
            placeholder="Share your football thoughts..."
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button
            className="bg-black text-white px-3 py-1 text-sm rounded hover:bg-blue-700 transition"
            onClick={handlePost}
          >
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
