import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from 'recharts';

interface Group {
  name: string;
  value: number;
}
const DATA: Group[] = [
  { name: 'Group A', value: 1000 },
  { name: 'Group B', value: 3000 },
  { name: 'Group C', value: 500 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 3000 },
];

const COLORS = ['#55f', '#733', '#755', '#5cc', '#777'];

const SimplePieCharts = () => {
  return (
    <div style={{ width: '100%', height: 500 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey='value'
            data={DATA}
            innerRadius={20}
            outerRadius={150}
            fill='#55f'
          >
            {DATA.map((group: Group, index: number) => (
              <Cell key={`${group.name} ${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimplePieCharts;
