import axios from "axios";

const GetDetails = async () => {
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;
};

export default async function Home() {
  let a = await GetDetails();
  return (
    <div className=" flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          {" "}
          <div>{a.name}</div>
          {a.email}5
        </div>
      </div>
    </div>
  );
}
