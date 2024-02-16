import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RepositoryList = () => {
  const navigate = useNavigate();
  const [repositories, setRepositories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10; // Number of repositories per page
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Fetch repositories based on the current page
    fetch(`https://api.github.com/users/mojombo/repos?page=${currentPage}&per_page=${perPage}`)
      .then(response => response.json())
      .then(data => {
        setRepositories(data);
        // GitHub API doesn't provide a total count for user repositories, so setting total to a large value for simplicity
        setTotal(1000);
      });
  }, [currentPage]);

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  return (
    <div className='py-5'>
      <button onClick={() => navigate(`/`)} className='px-5 py-1 font-medium mx-1 my-4 bg-red-600 rounded text-gray-200'>
        Back
      </button>
      <div className="container mx-auto my-8">
        {/* Display repositories in cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repositories.map(repo => (
            <div key={repo.id} className="bg-slate-800 p-4 rounded-md shadow-md">
              <h2 className="text-xl font-semibold text-white hover:underline hover:text-red-600">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </h2>
              <p className="text-slate-400">{repo.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-gray-600 p-2 bg-red-300  border rounded-lg">Stars: {repo.stargazers_count}</span>
                <span className="text-gray-600 p-2 bg-red-300  border rounded-lg">Forks: {repo.forks_count}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-between mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Previous Page
          </button>
          <span className="text-lg font-bold">{`Page ${currentPage}`}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage * perPage >= total}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default RepositoryList;
