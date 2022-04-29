import { withLayoult } from '../layout/Layout';
import { Htag, TagP, EcommerceNav, Button, EcommerceSearch, NavItem } from '../components';

function Home(): JSX.Element {
  return (
    <EcommerceNav>
      <>
        <NavItem stat='primary'>PRODUCT</NavItem>
        <NavItem stat='ghost'>ORDERS</NavItem>
        <NavItem stat='ghost'>CUSTOMERS</NavItem>
      </>
    </EcommerceNav>
  )
}
export default withLayoult(Home);

