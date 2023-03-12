import { Wrapper } from "../layout";
import SEO from "../components/seo";
import PortfolioThreeMain from "../components/portfolios/portfolio-3";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function index() {
  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <SEO pageTitle={"Encuentra tu tatuaje"} />
        <PortfolioThreeMain />
      </Wrapper>
    </QueryClientProvider>
  );
}
