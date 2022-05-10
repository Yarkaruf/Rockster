import { withLayoult } from '../layout/Layout';
import { Htag, TagP, EcommerceNav, Button, EcommerceSearch, NavItem, Search, Table } from '../components';

function Home(): JSX.Element {
  return (
    <>
      <EcommerceNav>
        <>
          <NavItem stat='primary'>PRODUCT</NavItem>
          <NavItem stat='ghost'>ORDERS</NavItem>
          <NavItem stat='ghost'>CUSTOMERS</NavItem>
        </>
      </EcommerceNav>
      <Search>
        <EcommerceSearch />
        <Button appearance='ghost' size='mid' arrow='right'>Active</Button>
        <Button appearance='primary' size='min' plus='true' />
      </Search>
      <Table />
    </>
  )
}
export default withLayoult(Home);

