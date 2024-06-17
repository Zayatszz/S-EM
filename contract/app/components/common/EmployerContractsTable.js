"use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from "next/navigation";
import Link from "next/link";
const ContractsTable = () => {
    const router = useRouter()
    const handleRowClick = (bookingId) => {
        router.push(`/contract`);
      };
  const contracts = [
    { id: 1011, position: 'Судалгааны ажилтан', employee: 'Болд', startDate: '2024.06.09', endDate: '2024.06.10', status: 'Амжилттай', action: 'view' },
    { id: 1012, position: 'Судалгааны ажилтан', employee: 'Бат', startDate: '2024.06.09', endDate: '2024.06.10', status: 'Амжилтгүй', action: 'none' },
    { id: 1013, position: 'Судалгааны ажилтан', employee: 'Хүслэн', startDate: '2024.06.09', endDate: '2024.06.10', status: 'Баталгаажуулах', action: 'edit' },
    { id: 1014, position: 'Судалгааны ажилтан', employee: 'Номио', startDate: '2024.06.09', endDate: '2024.06.10', status: 'Амжилттай', action: 'view' },
    { id: 1015, position: 'Судалгааны ажилтан', employee: 'Бөртэ', startDate: '2024.06.09', endDate: '2024.06.10', status: 'Амжилттай', action: 'view' },
  ];

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



  return (
    <div className="container mt-4">

      <div className="col-lg-12">
      <div className="table-responsive my_listing_table">
        <table className="table">
          <thead className="table-light">
            <tr className="thead_row">
      
              <th className="thead_title" scope="col">Гэрээний №</th>
              <th className="thead_title" scope="col">Албан тушаал</th>
              <th className="thead_title" scope="col">Ажилчны нэр</th>
              <th className="thead_title " scope="col">Эхлэх огноо</th>
              <th className="thead_title " scope="col">Дуусах огноо</th>
              {/* <th className="thead_title " scope="col">Төлөв</th> */}
              
            </tr>
          </thead>

          <tbody>
            {contracts.map((contract) => (
              <tr key={contract.id} onClick={() => handleRowClick(contract.id)} style={{ cursor: 'pointer' }}>
                <th className="align-middle " scope="row">
                  <div className="car-listing bdr_none d-flex mb0">
                 
                    <div className="details ms-1">
                      <h5 className="price">{contract.id}</h5>
                    </div>
                  </div>
                </th>
                <td className="align-middle">{contract.position}</td>
                <td className="align-middle">{contract.employee}</td>
                <td className="align-middle">{contract.startDate}</td>
                <td className="align-middle">{contract.endDate}</td>
                {/* <td className={`align-middle ${getStatusColor(contract.status)}`}>{contract.status}</td> */}
           
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
