'use client';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ContractsTable = () => {
  const [contracts, setContracts] = useState([]);
  const router = useRouter();

  const fetchContracts = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const response = await fetch('/api/getContracts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`, // Add your token here if required
        },
      });

      if (response.ok) {
        const data = await response.json();
        setContracts(data);
      } else {
        console.error('Failed to fetch contracts');
      }
    } catch (error) {
      console.error('Error fetching contracts:', error);
    }
  };

  useEffect(() => {
    fetchContracts();
  }, []);

  const handleStatusClick = (status) => {
    if (status === 'Баталгаажуулах') {
      router.push('/user/signature');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Амжилттай':
        return 'text-success';
      case 'Амжилтгүй':
        return 'text-danger';
      case 'Баталгаажуулах':
        return 'text-primary';
      default:
        return '';
    }
  };

  const handleRowClick = (id) => {
    // router.push(`/contract/${id}`);
  };

  return (
    <div className="container mt-5">
      <div className="col-lg-12">
        <div className="table-responsive my_listing_table">
          <table className="table">
            <thead className="table-light">
              <tr className="thead_row">
                <th className="thead_title" scope="col">Гэрээний №</th>
                <th className="thead_title" scope="col">Албан тушаал</th>
                <th className="thead_title" scope="col">Ажилчны нэр</th>
                <th className="thead_title" scope="col">Эхлэх огноо</th>
                <th className="thead_title" scope="col">Дуусах огноо</th>
                <th className="thead_title" scope="col">Төлөв</th>
                <th className="thead_title" scope="col">Үйлдэл</th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((contract) => (
                <tr key={contract.id} onClick={() => handleRowClick(contract.id)} style={{ cursor: 'pointer' }}>
                  <th className="align-middle" scope="row">
                    <div className="car-listing bdr_none d-flex mb0">
                      <div className="details ms-1">
                        <h5 className="price">{contract.id}</h5>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">{contract.position} </td>
                  <td className="align-middle">{contract.employee.firstName} {contract.employee.lastName}</td>
                  <td className="align-middle">{contract.duration.split(' to ')[0]}</td>
                  <td className="align-middle">{contract.duration.split(' to ')[1]}</td>
                  <td onClick={() => handleStatusClick(contract.status)} className={`align-middle ${getStatusColor(contract.status)}`}>
                    {contract.status}sajkdadkj
                  </td>
                  <td className="editing_list align-middle">
                    <ul>
                      <li className="list-inline-item mb-1">
                        <a href="#" title="View">
                          <span className="flaticon-view"></span>
                        </a>
                      </li>
                      <li className="list-inline-item mb-1">
                        <a href="#" title="Edit">
                          <span className="flaticon-pen"></span>
                        </a>
                      </li>
                      <li className="list-inline-item mb-1">
                        <a href="#" title="Delete">
                          <span className="flaticon-trash"></span>
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContractsTable;
