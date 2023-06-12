import { Wrapper } from '../layout';
import SEO from '../components/seo';
import AdvisorMain from '../components/advisor';

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={'Advisor'} />
      <AdvisorMain />
    </Wrapper>
  );
}
