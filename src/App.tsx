interface EmployeeProps {
  name: string;
  age: number;
  country: string;
}

function Employee({name, age, country}: EmployeeProps) {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{country}</h2>
    </div>
  );
}

export default function App() {
  const obj = {name: 'Alice', age: 29, country: 'Austria'};

  return (
    <div>
      <Employee {...obj} />
    </div>
  );
}
