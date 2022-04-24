import { withLayoult } from '../layout/Layout';
import { Htag, TagP, EcommerceNav } from '../components';

function Home(): JSX.Element {
  return (
    <>
      <EcommerceNav />
    </>
  )
}
export default withLayoult(Home);