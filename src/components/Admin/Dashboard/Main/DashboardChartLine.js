import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faClock } from '@fortawesome/free-solid-svg-icons'
import { Line } from '@reactchartjs/react-chart.js'

export default function DashboardChartLine(props) {

    const order = props.order
    const [data, setData] = useState({})

    useEffect(() => {
        if (order.length > 0) {
            const month = [
                {
                    id: 1,
                    totalSale: 0
                },
                {
                    id: 2,
                    totalSale: 0
                },
                {
                    id: 3,
                    totalSale: 0
                },
                {
                    id: 4,
                    totalSale: 0
                },
                {
                    id: 5,
                    totalSale: 0
                },
                {
                    id: 6,
                    totalSale: 0
                },
                {
                    id: 7,
                    totalSale: 0
                },
                {
                    id: 8,
                    totalSale: 0
                },
                {
                    id: 9,
                    totalSale: 0
                },
                {
                    id: 10,
                    totalSale: 0
                },
                {
                    id: 11,
                    totalSale: 0
                },
                {
                    id: 12,
                    totalSale: 0
                }
            ]
            for (let i in order) {
                for (let j in month) {
                    if (new Date(order[i].orderDate).getMonth() + 1 === month[j].id) {
                        month[j].totalSale += order[i].orderTotal
                    }
                }
            }
            const saleData = []
            for (let i in month) {
                saleData.push(month[i].totalSale)
            }
            setData({
                labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
                datasets: [
                    {
                        label: '',
                        data: saleData,
                        fill: false,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgba(255, 99, 132, 0.9)'
                    }
                ],
            })
        }
    }, [order])

    const options = {
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
            yAxes: [
                {
                    type: 'linear',
                    display: true,
                    position: 'left'
                }
            ],
        }
    }

    return (
        <div className="chart chartline flex-col">
            <div className={`headerbox flex-center ${props.color}`}>
                <FontAwesomeIcon icon={faChartBar} className="icon" />
            </div>
            <div className="top-location-container" style={{ height: 'max-content' }}>
                <div className="headerbox-header">
                    <p>Doanh Thu 2021</p>
                </div>
                <div className="top-location-content flex">
                    <div className="top-location-map" style={{ margin: '0' }}>
                        <Line data={data} options={options} />
                    </div>
                </div>
                <div className="count-line"></div>
                <div className="count-status flex-center">
                    <FontAwesomeIcon icon={faClock} className="count-up" />
                    <p>Cập nhật 3 phút trước</p>
                </div>
            </div>
        </div>
    )
}