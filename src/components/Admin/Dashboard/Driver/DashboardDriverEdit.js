import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

export default function DashboardDriverEdit(props) {

    const createForm = useRef();
    const cateInput = useRef();
    const groupCateInput = useRef();
    const [isCheckedSmall, setIsCheckedSmall] = useState(false);
    const [isCheckedMedium, setIsCheckedMedium] = useState(false);
    const [isCheckedLarge, setIsCheckedLarge] = useState(false);
    const [inputValue, setInputValue] = useState([])
    const [cate, setCate] = useState([])
    const [file, setFile] = useState([])
    const Driver = props.Driver


    const [DriverImg, setDriverImg] = useState([])
    const [DriverName, setDriverName] = useState("")
    const [DriverSale, setDriverSale] = useState(0)
    const [DriverPrice, setDriverPrice] = useState(0)
    const [DriverDes, setDriverDes] = useState("")
    const [DriverCate, setDriverCate] = useState("")
    const [DriverGroupCate, setDriverGroupCate] = useState("")
    const [DriverGroupCateList, setDriverGroupCateList] = useState([])
    const [DriverSize, setDriverSize] = useState([])
    const [DriverSex, setDriverSex] = useState([])

    const checkedSize = (event) => {
        if (event.target.id === "1") {
            if (isCheckedSmall) {
                const size = DriverSize.filter((item) => {
                    return item !== 'Small'
                })
                setDriverSize(size)
                setIsCheckedSmall(false)
            } else {
                setDriverSize(DriverSize => [...DriverSize, 'Small'])
                setIsCheckedSmall(true)
            }
        }
        if (event.target.id === "2") {
            if (isCheckedMedium) {
                const size = DriverSize.filter((item) => {
                    return item !== 'Medium'
                })
                setDriverSize(size)
                setIsCheckedMedium(false)
            } else {
                setDriverSize(DriverSize => [...DriverSize, 'Medium'])
                setIsCheckedMedium(true)
            }
        }
        if (event.target.id === "3") {
            const size = DriverSize.filter((item) => {
                return item !== 'Large'
            })
            setDriverSize(size)
            if (isCheckedLarge) {
                setIsCheckedLarge(false)
            } else {
                setDriverSize(DriverSize => [...DriverSize, 'Large'])
                setIsCheckedLarge(true)
            }
        }
    }

    const handleOnChange = (event) => {
        setInputValue({ ...inputValue, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        if (Driver) {
            setDriverName(Driver.DriverName)
            setDriverImg(Driver.DriverImg)
            setDriverSale(Driver.DriverSale)
            setDriverPrice(Driver.DriverPrice)
            setDriverDes(Driver.DriverDes)
            setDriverCate(Driver.DriverCate)
            setDriverSex(Driver.DriverSex)
            setDriverSize(Driver.DriverSize)
            setDriverGroupCate(Driver.DriverGroupCate)

            // axios.get(`http://pe.heromc.net:4000/category`)
            //     .then(res => {
            //         setCate(res.data)
            //     }
            // )
            // axios.get(`http://pe.heromc.net:4000/Drivers`)
            //     .then(res => {
            //         const test = Object.values(res.data.reduce((a, {DriverGroupCate}) => {
            //             a[DriverGroupCate] = a[DriverGroupCate] || {DriverGroupCate};
            //             return a;
            //         }, Object.create(null)));
            //         setDriverGroupCateList(test)
            //     }
            // )
            // if (Driver.DriverSize) {
            //     for (let i of Driver.DriverSize) {
            //         if(i === "Small") setIsCheckedSmall(true)
            //         if(i === "Medium") setIsCheckedMedium(true)
            //         if(i === "Large") setIsCheckedLarge(true)
            //     }
            // }
        }
    }, [Driver])

    const onSubmit = (event) => {
        event.preventDefault()
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        const formData = new FormData();

        const imageArr = Array.from(file);
        imageArr.forEach(image => {
            formData.append('DriverImg', image);
        });

        formData.append("DriverName", DriverName);
        formData.append("DriverSale", DriverSale);
        formData.append("DriverPrice", DriverPrice);
        formData.append("DriverCate", DriverCate);
        formData.append("DriverGroupCate", DriverGroupCate);
        formData.append("DriverSize", DriverSize);
        formData.append("DriverDes", DriverDes);
        formData.append("DriverSex", DriverSex);
        formData.append("DriverDate", new Date());
        axios.post(`http://pe.heromc.net:4000/Drivers/update/${Driver._id}`, formData, config)
            .then(() => {
                props.setCloseEditFunc(false);
                props.setToastFunc(true);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const addNewCate = () => {
        axios.post('http://pe.heromc.net:4000/category', {
            cateName: inputValue.cate
        })
        setCate(cate => [...cate, { cateName: inputValue.cate }])
        setDriverCate(inputValue.cate)
        cateInput.current.value = ""
    }

    const addNewGroupCate = () => {
        setDriverGroupCate(inputValue.groupCate)
        setDriverGroupCateList(DriverGroupCateList => [...DriverGroupCateList, { DriverGroupCate: inputValue.groupCate }])
        groupCateInput.current.value = ""
    }

    const deleteImg = (event) => {
        const id = event.target.id
        const virutalFile = [...file]
        virutalFile.splice(id, 1)
        setFile(virutalFile)

        const items = [...DriverImg]
        items.splice(id, 1)
        setDriverImg(items)
        axios.post(`http://pe.heromc.net:4000/Drivers/update/${Driver._id}`, {
            deleteImgId: id
        })
    }

    return (
        <div className="DashboardDriverInfo">
            <div className="create-box">
                <div className="create-box-title flex">
                    <div className="create-box-title-text">
                        Driver infomation
                    </div>
                    <div
                        className="create-box-title-close flex-center"
                        onClick={() => {
                            props.setCloseEditFunc(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
                {Driver &&
                    <form onSubmit={onSubmit} encType="multipart/form-data" ref={createForm}>
                        <div className="create-box-row flex">
                            <div className="dashboard-left flex">Name</div>
                            <div className="dashboard-right">
                                <input
                                    type="text" name="name"
                                    value={DriverName}
                                    onChange={(event) => {
                                        setDriverName(event.target.value)
                                    }} required
                                ></input>
                            </div>
                        </div>
                        <div className="create-box-row flex">
                            <div className="dashboard-left flex">Images </div>
                            <div className="dashboard-right">
                                <input
                                    onChange={(event) => {
                                        const files = event.target.files;
                                        for (let i = 0; i < files.length; i++) {
                                            setDriverImg(Driver => [...Driver, URL.createObjectURL(files[i])])
                                        }
                                        const fileArr = Array.prototype.slice.call(files)
                                        fileArr.forEach(item => {
                                            setFile(file => [...file, item])
                                        })
                                    }}
                                    type="file"
                                    name="DriverImg"
                                    className="noborder"
                                    multiple="multiple"
                                    style={{ height: '50px' }}
                                ></input>
                                <div className="flex" style={{ overflowY: 'hidden', flexWrap: 'wrap' }}>
                                    {DriverImg &&
                                        DriverImg.map((item, index) => {
                                            return (
                                                <div className="create-box-img">
                                                    <img key={index} src={item} alt=""></img>
                                                    <div
                                                        className="create-box-img-overlay"
                                                    >
                                                        <p
                                                            id={index}
                                                            onClick={deleteImg}
                                                            className="icon">X
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="create-box-row flex">
                            <div className="dashboard-left flex">Defaut price </div>
                            <div className="dashboard-right">
                                <input
                                    type="number" name="price"
                                    placeholder="USD"
                                    value={DriverPrice}
                                    onChange={(event) => {
                                        setDriverPrice(event.target.value)
                                    }} required
                                ></input>
                            </div>
                        </div>
                        <div className="create-box-row flex">
                            <div className="dashboard-left flex">Sale off </div>
                            <div className="dashboard-right flex-center">
                                <input
                                    type="number" placeholder="%"
                                    style={{ width: "100px" }}
                                    name="sale"
                                    value={DriverSale}
                                    onChange={(event) => {
                                        setDriverSale(event.target.value)
                                    }}
                                    required></input>
                                <label>From: </label>
                                <input type="date" name="fromdate" onChange={handleOnChange} placeholder="dd/mm/yyyy" pattern="(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)" />
                                <label>To: </label>
                                <input type="date" name="todate" onChange={handleOnChange} placeholder="dd/mm/yyyy" pattern="(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)" />
                            </div>
                        </div>
                        <div className="create-box-row flex">
                            <div className="dashboard-left flex">Category group</div>
                            <div className="dashboard-right flex-center">
                                <select style={{ width: "350px" }}
                                    onChange={(event) => { setDriverGroupCate(event.target.value) }}
                                    value={DriverGroupCate}
                                >
                                    <option></option>
                                    {DriverGroupCateList.length > 0 &&
                                        DriverGroupCateList.map((item, index) => {
                                            if (item.DriverGroupCate) {
                                                return (
                                                    <option key={index}>{item.DriverGroupCate}</option>
                                                )
                                            }
                                            return null
                                        })
                                    }
                                </select>
                                <input type="text" name="groupCate" placeholder="New category group?" style={{ margin: '0 10px' }} onChange={handleOnChange} ref={groupCateInput}></input>
                                <div className="btn" style={{
                                    fontSize: '14px',
                                    fontFamily: 'sans-serif',
                                    fontWeight: '300',
                                    padding: '0 10px',
                                    cursor: 'pointer',
                                    width: '350px',
                                    height: '30px'
                                }}
                                    onClick={addNewGroupCate}>
                                    Add
                                </div>
                            </div>
                        </div>
                        <div className="create-box-row flex">
                            <div className="dashboard-left flex">Category </div>
                            <div className="dashboard-right flex-center">
                                <select style={{ width: "350px" }}
                                    onChange={(event) => { setDriverCate(event.target.value) }}
                                    value={DriverCate}
                                >
                                    <option></option>
                                    {cate.length > 0 &&
                                        cate.map((item, index) => {
                                            return (
                                                <option key={index}>{item.cateName}</option>
                                            )
                                        })
                                    }
                                </select>
                                <input type="text" name="cate" placeholder="New category?" style={{ margin: '0 10px' }} onChange={handleOnChange} ref={cateInput}></input>
                                <div className="btn" style={{
                                    fontSize: '14px',
                                    fontFamily: 'sans-serif',
                                    fontWeight: '300',
                                    padding: '0 10px',
                                    cursor: 'pointer',
                                    width: '350px',
                                    height: '30px'
                                }}
                                    onClick={addNewCate}>
                                    Add
                                </div>
                            </div>
                        </div>
                        <div className="create-box-row flex">
                            <div className="dashboard-left flex">Sex </div>
                            <div className="dashboard-right flex">
                                <select style={{ width: "200px" }}
                                    onChange={(event) => { setDriverSex(event.target.value) }}
                                    value={DriverSex}
                                    required>
                                    <option></option>
                                    <option>Man</option>
                                    <option>Woman</option>
                                </select>
                            </div>
                        </div>
                        <div className="create-box-row flex">
                            <div className="dashboard-left flex">Size </div>
                            <div className="dashboard-right flex">
                                <div
                                    className={isCheckedSmall ? "size-check isChecked" : "size-check"}
                                    id="1"
                                    onClick={checkedSize}>Small</div>
                                <div
                                    className={isCheckedMedium ? "size-check isChecked" : "size-check"}
                                    id="2"
                                    onClick={checkedSize}>Medium</div>
                                <div
                                    className={isCheckedLarge ? "size-check isChecked" : "size-check"}
                                    id="3"
                                    onClick={checkedSize}>Large</div>
                            </div>
                        </div>
                        <div className="create-box-row flex">
                            <div className="dashboard-left flex">Description </div>
                            <div className="dashboard-right">
                                <input
                                    type="text"
                                    name="des"
                                    value={DriverDes || ""}
                                    onChange={(event) => {
                                        setDriverDes(event.target.value)
                                    }} required></input>
                            </div>
                        </div>

                        <div className="flex-center" style={{ marginTop: '40px' }}>
                            <button className="create-box-btn btn">
                                Update Driver
                            </button>
                        </div>
                    </form>
                }
            </div>
        </div>
    )
}