import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
function UserList() {
  const [listOfUSer, setListOfUSer] = useState([]);
  useEffect(() => {axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
  setListOfUSer(response.data)
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })},[])
  return (
    <div>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
      {listOfUSer.map(user=><tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
        </tr>
      )}
      </tbody>
    </Table>
    </div>
  )
}

export default UserList