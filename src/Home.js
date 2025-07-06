import Feed from './Feed';
import { useStoreState } from 'easy-peasy';

const Home = () => {
  const searchResults = useStoreState((state) => state.searchResults);
  const isLoading = useStoreState((state) => state.isLoading);
  const fetchError = useStoreState((state) => state.fetchError);

  return (
    <main className="Home">
      {isLoading && !fetchError && <p className="statusMsg">Loading posts...</p>}
      {fetchError && <p className="statusMsg" style={{ color: 'red' }}>{fetchError}</p>}
      {!isLoading && !fetchError && (
        searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p className="statusMsg">No posts to display</p>
        )
      )}
    </main>
  );
};

export default Home;