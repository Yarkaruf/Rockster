import { withLayoult } from '../layout/Layout';
import { Htag, TagP, EcommerceNav, Button, EcommerceSearch, NavItem, Search, Table, Loader } from '../components';
import { useEffect, useState } from 'react';

function Home(): JSX.Element {
  //Данные таблицы
  const [data, setData] = useState([]);
  //Сортировка таблицы через поиск
  const [poisk, setSearch] = useState([]);
  //Анимация загрузки
  const [isLoading, setIsLoading] = useState(true);
  //Сортировка таблицы по клику
  const [sort, setSort] = useState(true);
  //Данные из input
  const [value, setValue] = useState('');

  useEffect(() => {
    setIsLoading(true)
    fetch('http://localhost:3001/table')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
        setSearch(data)
        setSort(!sort)
      })
  }, [])
  const filter = (reg: any, data: any) => {
    const regExp = new RegExp(reg, 'i');
    return regExp.test(data.Name) || regExp.test(data.Number) || regExp.test(data.Category) || regExp.test(data.Price) || regExp.test(data.Date) || regExp.test(data.Status);
  }
  const searchTable = (e: any) => {
    const search = data.filter((data: { Name: string; Number: number; Category: string; Price: number; Date: string; Status: string; }) => filter(e.target.value, data));
    setValue(e.target.value)
    setSearch(search)
    console.log(value)
  }
  const sortData = (params: any) => {
    const copyData = poisk.concat();
    let sortData;
    console.log(copyData)
    if (sort) {
      sortData = copyData.sort(
        (a, b) => { return a[params] > b[params] ? 1 : -1 }
      )
    }
    else {
      sortData = copyData.sort(
        (a, b) => { return a[params] < b[params] ? 1 : -1 }
      )
    }
    setSearch(sortData)
    setSort(!sort)
  }
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
        <EcommerceSearch searchTable={searchTable} value={value} setValue={setValue} data={data} />
        <Button appearance='ghost' size='mid' arrow='right'>Active</Button>
        <Button appearance='primary' size='min' plus='true' />
      </Search>
      {isLoading ? <Loader /> : <Table sortData={sortData} poisk={poisk} mark={'disabled'} />}
    </>
  )
}
export default withLayoult(Home);

