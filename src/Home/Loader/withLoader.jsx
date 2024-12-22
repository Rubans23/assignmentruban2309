import { useState, useEffect } from 'react';
import Loader from './Loader';

const withLoader = (WrappedComponent) => {
  return function WithLoaderComponent(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 3000); // Simulate a 3-second loading delay
      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return <Loader />;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withLoader;
//hi