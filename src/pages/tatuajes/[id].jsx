import { Wrapper } from "../../layout";
import SEO from "../../components/seo";
import { QueryClient, QueryClientProvider } from "react-query";
import TattooMain from "../../components/tattoos/tattoo";

const queryClient = new QueryClient();

export default function index() {
  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <SEO pageTitle={"Encuentra tu tatuaje"} />
        <TattooMain />
      </Wrapper>
    </QueryClientProvider>
  );
}
