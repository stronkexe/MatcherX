import axios from "axios";
import { useEffect, useState } from "react"

export const Home = () => {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(`http://localhost:8080/api/users`, { withCredentials: true })
      setUsers(res.data)
      //   fetch('http://localhost:8080/api/users', {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     credentials: 'include',
    //   })
    //     .then(response => response.json())
    //     .then(data => setUsers(data))
    //     .catch(error => console.error('Error:', error));
    };

    getUsers();
  }, []);
  
  console.log('Users: ', users)
  return (
    <div className='Home'>
      Home
    </div>
  )
}
