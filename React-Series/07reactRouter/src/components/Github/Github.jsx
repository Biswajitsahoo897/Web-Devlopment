import { useLoaderData } from 'react-router-dom';

export default function Github() {
  const data=useLoaderData();


// i commented the code below because this is a little slow and not recommended to use in production, instead we can use useLoaderData hook to fetch data
// and it is a bit faster than the code below

  // const [data,setData]=useState([]);
  // try {
  //     useEffect(()=>{
  //       fetch('https://api.github.com/users/biswajitsahoo897')
  //       .then(res=> res.json())
  //       .then(data=>{
  //         console.log(data);
  //         setData(data)
  //       })
  //     },[])
  // } catch (err) {
  //   console.error("Error fetching data:", err);
  // }

  return (
    <div className='text-center p-4 rounded-lg shadow-md text-2xl font-bold bg-gray-700 text-white'>
       Github Followers: {data?.followers} {/*//'? is used to avoid error if data is not loaded yet then it wont throw any error' */}
      <img className='w-24 h-24 rounded-full mx-auto' src={data?.avatar_url} alt="Github_Avatar" />
    </div>
  )
}

export const githubInfoLoaded=async()=>{
  const response=await fetch('https://api.github.com/users/biswajitsahoo897')
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}