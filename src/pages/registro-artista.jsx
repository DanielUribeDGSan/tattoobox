import { Wrapper } from "../layout";
import SEO from "../components/seo";
import RegisterMain from "../components/register/artist";

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Registro artista"} />
      <RegisterMain />
    </Wrapper>
  );
}
