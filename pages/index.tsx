import { withLayoult } from '../layout/Layout';
import { Htag, TagP, EcommerceNav, Button, EcommerceSearch, NavItem, Search, Table, Loader } from '../components';
import { useEffect, useState } from 'react';

function Home(): JSX.Element {
  //Данные таблицы
  const [data, setData] = useState([]);
  //Сортировка таблицы через поиск
  const [search, setSearch] = useState([]);
  //Анимация загрузки
  const [isLoading, setIsLoading] = useState(true);
  //Сортировка таблицы по клику
  const [sort, setSort] = useState(true);
  //Данные из input
  const [value, setValue] = useState('');
  //Пагинация таблицы
  const [countRows, setCountRows] = useState(10);
  const [countPage, setCountPage] = useState(Number);
  const [currentPage, setCurrentPage] = useState(1);
  const ActivePage = (page) => {
    setCurrentPage(page);
  }
  let pages = [];
  for (let i = 1; i <= countPage; i++) {
    pages.push(i)
  }
  const lastPageRow = currentPage * countRows;
  const firstPageRow = lastPageRow - countRows;
  const paginationPage = search.slice(firstPageRow, lastPageRow);
  useEffect(() => {
    setIsLoading(true)
    fetch('http://localhost:3001/table')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setSearch(data)
        const getCountPage = data.length / countRows;
        setIsLoading(false)
        setCountPage(getCountPage)
        setSort(!sort)
      })
  }, [])
  const filter = (reg: any, data: any) => {
    const regExp = new RegExp(reg, 'i');
    return regExp.test(data.Name) || regExp.test(data.Number) || regExp.test(data.Category) || regExp.test(data.Price) || regExp.test(data.Date) || regExp.test(data.Status);
  }
  const searchTable = (e: any) => {
    const dataFilter = data.filter((data: { Name: string; Number: number; Category: string; Price: number; Date: string; Status: string; }) => filter(e.target.value, data));
    setCurrentPage(1)
    setValue(e.target.value)
    setSearch(dataFilter)
    setCountPage(Math.ceil(dataFilter.length / countRows))
  }
  const sortData = (params: any) => {
    const copyData = search.concat();
    let sortData;
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
        <EcommerceSearch searchTable={searchTable} value={value} setValue={setValue} />
        <Button appearance='ghost' size='mid' arrow='right'>Active</Button>
        <Button appearance='primary' size='min' plus='true' />
      </Search>
      {isLoading ? <Loader /> : <Table ActivePage={ActivePage} countRows={countRows} currentPage={currentPage} pages={pages} sortData={sortData} search={search.length} paginationPage={paginationPage} mark={'disabled'} />}
    </>
  )
}
export default withLayoult(Home);
