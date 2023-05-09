import { Wrapper } from '../../layout';
import SEO from '../../components/seo';
import { QueryClient, QueryClientProvider } from 'react-query';
import ArtistMain from '../../components/artists/artist';

const queryClient = new QueryClient();

export default function index() {
  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <SEO pageTitle={'Encuentra tu artista'} />
        <ArtistMain />
      </Wrapper>
    </QueryClientProvider>
  );
}
