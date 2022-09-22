import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa';
import PropTypes from 'prop-types';

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
      <div className="card-body">
        <h3 className="mb-2 text-md md:text-xl font-semibold">
          <a href={html_url}>
            <FaLink className="inline mr-1 " /> {name}
          </a>
        </h3>
        <p className="mb-3 text-sm md:text-md">{description}</p>
        <div>
          <div className="mr-2 badge badge-info badge-md md:badge-lg">
            <FaEye className="inline mr-1" /> {watchers_count}
          </div>
          <div className="mr-2 badge badge-success badge-md md:badge-lg">
            <FaStar className="inline mr-1" /> {stargazers_count}
          </div>
          <div className="mr-2 badge badge-error badge-md md:badge-lg">
            <FaInfo className="inline mr-1" /> {open_issues}
          </div>
          <div className="mr-2 badge badge-warning badge-md md:badge-lg">
            <FaUtensils className="inline mr-1" /> {forks}
          </div>
        </div>
      </div>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
