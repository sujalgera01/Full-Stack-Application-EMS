import React from 'react'

const ListEmployee = () => {


    const employee = [
        {
            "id": 1,
            "firstName": "sujal",
            "lastname": "gera",
            "email": "sgera01@gmail.com"
        },
        {
            "id": 2,
            "firstName": "anmol",
            "lastname": "gera",
            "email": "agera01@gmail.com"
        },
        {
            "id": 3,
            "firstName": "ram",
            "lastname": "ji",
            "email": "ramji01@gmail.com"
        },
        {
            "id": 4,
            "firstName": "sham",
            "lastname": "ji",
            "email": "shamji01@gmail.com"
        }
    ]

  return (
    <div className='container'>
        <h2 className='text-center'>List Of Employees</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>EmployeeId</th>
                    <th>Employee FirstName</th>
                    <th>Employee LastName</th>
                    <th>Employee Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    employee.map(e => 
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.firstName}</td>
                            <td> {e.lastname}</td>
                            <td>{e.email}</td>
                        </tr>
                        )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployee