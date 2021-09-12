import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import classNames from 'classnames'

export default function DashboardReportTable(props) {

    const [Report, setReport] = useState([])
    const [isSortByName, setIsSortByName] = useState(false)
    const [constReport, setConstReport] = useState([])

    useEffect(() => {
        // axios.get(`http://pe.heromc.net:4000/Report`)
        //     .then(res => {
        //         setReport(res.data)
        //         setConstReport(res.data)
        //     }
        //     )
        setReport([])
        setConstReport([])
    }, [props.isChange])

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const choosePage = (event) => {
        if (Number(event.target.id) === 0) {
            setCurrentPage(currentPage)
        } else if (Number(event.target.id) === -1) {
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1)
            } else {
                setCurrentPage(1);
            }
        } else if (Number(event.target.id) === 999) {
            setCurrentPage(currentPage + 1)
        } else {
            setCurrentPage(Number(event.target.id))
        }
    }

    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const current = Report.slice(indexOfFirst, indexOfLast);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(Report.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const pages = [];

    if (pageNumbers.length > 3) {
        if (currentPage === 2) {
            pages.push(currentPage - 1, currentPage, currentPage + 1);
        } else {
            if (currentPage === 1) {
                pages.push(currentPage, currentPage + 1, currentPage + 2);
            } else if (currentPage === 2) {
                pages.push(currentPage - 1, currentPage, currentPage + 1);
            } else if (currentPage > 2 && currentPage < pageNumbers.length - 1) {
                pages.push(currentPage - 1, currentPage, currentPage + 1);
            } else if (currentPage === pageNumbers.length - 1) {
                pages.push(currentPage - 1, currentPage, currentPage + 1);
            } else {
                pages.push(currentPage - 2, currentPage - 1, currentPage);
            }
        }
    } else if (pageNumbers.length === 3) {
        if (currentPage === 2) {
            pages.push(currentPage - 1, currentPage, currentPage + 1);
        } else {
            if (currentPage === 1) {
                pages.push(currentPage, currentPage + 1, currentPage + 2);
            } else if (currentPage === 2) {
                pages.push(currentPage - 1, currentPage, currentPage + 1);
            } else if (currentPage > 2 && currentPage < pageNumbers.length - 1) {
                pages.push(currentPage - 1, currentPage, currentPage + 1);
            } else if (currentPage === pageNumbers.length - 1) {
                pages.push(currentPage - 1, currentPage, currentPage + 1);
            } else {
                pages.push(currentPage - 2, currentPage - 1, currentPage);
            }
        }
    } else if (pageNumbers.length === 2) {
        if (currentPage === 2) {
            pages.push(currentPage - 1, currentPage);
        } else {
            if (currentPage === 1) {
                pages.push(currentPage, currentPage + 1);
            } else if (currentPage === 2) {
                pages.push(currentPage - 1, currentPage);
            }
        }
    } else {
        if (currentPage === 1) {
            pages.push(currentPage);
        }
    }

    const deleteOnClick = (event) => {
        axios.post(`http://pe.heromc.net:4000/Report/delete/:${event.target.id}`, {
            id: event.target.id
        })
        setReport(Report.filter((item) => {
            return item._id !== event.target.id
        }))
    }

    const searchOnSubmit = (event) => {
        event.preventDefault()
    }
    const searchOnChange = (event) => {
        const searchInput = event.target.value
        const search = []
        for (let i in constReport) {
            if ((constReport[i].ReportName).toLowerCase().includes(searchInput)) {
                search.push(constReport[i])
            }
        }
        setReport(search)
    }

    const sortTable = (event) => {
        if (event.target.id === "ReportName") {
            if (isSortByName) {
                const sortByName = [...Report]
                sortByName.sort(function (a, b) {
                    var ReportA = a.ReportName.toLowerCase();
                    var ReportB = b.ReportName.toLowerCase();
                    if (ReportA === ReportB) return 0;
                    return ReportA > ReportB ? 1 : -1;
                })
                setIsSortByName(false)
                setReport(sortByName)
            } else {
                const sortByName = [...Report]
                sortByName.sort(function (a, b) {
                    var ReportA = a.ReportName.toLowerCase();
                    var ReportB = b.ReportName.toLowerCase();
                    if (ReportA === ReportB) return 0;
                    return ReportA < ReportB ? 1 : -1;
                })
                setIsSortByName(true)
                setReport(sortByName)
            }
        }
    }

    return (
        <div className="topfive flex-col" style={{ width: '100%' }}>
            <div className={`headerbox flex-center ${props.color}`}>
                <FontAwesomeIcon icon={props.icon} className="icon" />
            </div>
            <div className="top-location-container">
                <div className="headerbox-header">
                    <p>{props.title}</p>
                </div>
                <div className="topfive-content flex-col">
                    <div className="dashboard-addnew flex">
                        <div
                            className="dashboard-addnew-btn btn"
                            onClick={props.setOpenCreateFunc}
                        >Add new</div>
                        <div className="dashboard-addnew-search">
                            <form
                                onSubmit={searchOnSubmit}
                            >
                                <input type="text" placeholder="Search records"
                                    onChange={searchOnChange}
                                ></input>
                            </form>
                        </div>
                    </div>
                    <table className="dashboard-table" style={{ tableLayout: 'fixed' }}>
                        <tbody>
                            <tr className="dashboard-order">
                                {
                                    props.table.map((item, index) => {
                                        return (
                                            <th
                                                key={index} className="table-new-title table-order-title"
                                                onClick={(event) => {
                                                    sortTable(event)
                                                }}
                                                id={`Report${item}`}
                                            >
                                                {item}
                                            </th>
                                        )
                                    })
                                }
                            </tr>
                            {
                                current.map((item, index) => {
                                    const date = new Date(item.ReportTime)
                                    const day = date.getDate()
                                    const month = date.getMonth() + 1
                                    const year = date.getFullYear()
                                    // let totalItem = 0;
                                    // for (let i in item.orderList) {
                                    //     totalItem += item.orderList[i].amount
                                    // }
                                    return (
                                        <tr key={index}>
                                            <td className="table-name">
                                                <p>{item.ReportName}</p>
                                            </td>
                                            <td
                                                style={{ display: 'flex' }}
                                                className="table-mobile-Reportbanner">
                                                <img
                                                    src={item.ReportBanner}
                                                    width="120px" height="80px"
                                                    style={{ padding: '5px 0' }}
                                                    alt=""
                                                />
                                            </td>
                                            <td>
                                                <select
                                                    className="table-input"
                                                    style={{ height: '30px', width: '80%' }}
                                                >
                                                    {
                                                        item.ReportItems.map((item, index) => {
                                                            return (
                                                                <option key={index}>
                                                                    {item.productName}
                                                                </option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </td>
                                            <td className="table-mobile-Reportdate">
                                                <p>{day}-{month}-{year}</p>
                                            </td>
                                            <td>
                                                <div className="action-table flex">
                                                    <div
                                                        className="action-item flex-center action-green"
                                                        onClick={props.setOpenEditFunc}
                                                        id={item._id}
                                                    >
                                                        <FontAwesomeIcon style={{ pointerEvents: 'none' }} icon={faPencilAlt} />
                                                    </div>
                                                    <div
                                                        className="action-item flex-center action-red"
                                                        onClick={deleteOnClick}
                                                        id={item._id}
                                                    >
                                                        <FontAwesomeIcon style={{ pointerEvents: 'none' }} icon={faTimes} />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                    <div className="pagination-container flex" style={{ justifyContent: 'flex-end', margin: '20px 0' }}>
                        <div className="pagnigation flex-center" onClick={choosePage}>
                            <div id="-1" className={classNames({
                                pagnigation_disable: currentPage === 1
                            })}>←</div>
                            {pages.map(function (number, index) {
                                if (currentPage === number) {
                                    return (
                                        <div key={number} id={number} className="pagnigation-active">
                                            {number}
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div
                                            key={number}
                                            id={number}
                                        >
                                            {number}
                                        </div>
                                    )
                                }
                            })}
                            <div id="999" className={classNames({
                                pagnigation_disable: currentPage === pageNumbers.length
                            })}>→</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}