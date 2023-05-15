import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';

interface Person {
  name: string;
  age: number;
  weight: number;
}

const data: Person[] = [
  { name: 'Joaquín', age: 29, weight: 80 },
  { name: 'Paolo', age: 18, weight: 74 },
  { name: 'Vanessa', age: 29, weight: 65 },
  { name: 'Omar', age: 24, weight: 80 },
  { name: 'Claudia', age: 40, weight: 68 },
  { name: 'Mauro', age: 43, weight: 120 },
  { name: 'Facundo', age: 13, weight: 60 },
  { name: 'Agustina', age: 27, weight: 70 },
];

const SimpleBarCharts = () => {
  return (
    <>
      <div className='item_1'>
        <ResponsiveContainer width='100%' aspect={3}>
          <BarChart data={data} height={300}>
            <CartesianGrid strokeDasharray={'4 1 2'} />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='weight' fill='#55f' />
            <Bar dataKey='age' fill='#db3' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default SimpleBarCharts;
