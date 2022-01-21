import { FC, useState, ChangeEvent } from "react";

export enum HairColor {
  Blonde = "your hair is blonde",
  Pink = "your hair is pink",
  Red = "your hair is red",
}
interface Props {
  name: string;
  age: number;
  email: string;
  hairColor : HairColor
}

const Person: FC<Props> = ({ name, age, email , hairColor }) => {
  const [country, setCountry] = useState<string | null>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
      <input type="text" onChange={handleChange} />

      <div>{country}</div>
      {hairColor}
    </div>
  );
};

export default Person;
