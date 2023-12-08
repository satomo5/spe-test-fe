import Table from "@/components/Table";
import Terminal from "@/components/Terminal";

export default async function Home() {
  const options = {
    method: "GET",
    headers: new Headers({
      "content-type": "application/json",
      Authorization: "Bearer o7Ytbt9XQLI3PgtebJfKSXKEf0XHU74Y",
    }),
  };

  const response = await fetch(
    "https://spe-academy.spesolution.com/api/recruitment",
    options
  );
  const data = await response.json();

  return (
    <>
      <Terminal />
      <Table data={data} />
    </>
  );
}
