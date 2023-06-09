import { Wrapper } from '../../layout';
import SEO from '../../components/seo';
import { QueryClient, QueryClientProvider } from 'react-query';
import StudiesMain from '../../components/studies/studie';

const queryClient = new QueryClient();

export default function index() {
  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <SEO pageTitle={'Encuentra tu estudio'} />
        <StudiesMain />
      </Wrapper>
    </QueryClientProvider>
  );
}
