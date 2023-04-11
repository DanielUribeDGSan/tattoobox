import { Wrapper } from "../layout";
import SEO from "../components/seo";
import RegisterMain from "../components/register/studio";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Registro estudio"} />
      <RegisterMain />
    </Wrapper>
  );
}
