import { Navbar } from '../components/Navbar'
import { Cards } from '../components/Cards'
import { Table } from '../components/Table';

export function Dashboard() {
  return (
    <div>
      <Navbar />
      <Cards />
      <Table />
    </div>
    
  );
}