import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h2>404</h2>
      <p>Page not found</p>
      <p>
        Please go back to the<Link>HOME PAGE</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
