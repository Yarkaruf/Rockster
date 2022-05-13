import { withLayoult } from '../layout/Layout';
import { Htag, TagP, EcommerceNav, Button, EcommerceSearch, NavItem, Search, Table, Loader } from '../components';
import { useEffect, useState } from 'react';

function Home(): JSX.Element {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true)
    fetch('http://localhost:3001/table')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
  }, [])
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
      {isLoading ? <Loader /> : <Table data={data} mark={'disabled'} />}
    </>
  )
}
export default withLayoult(Home);

