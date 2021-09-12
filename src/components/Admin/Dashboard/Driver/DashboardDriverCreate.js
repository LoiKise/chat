import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

export default function DashboardDriverCreate(props) {

    const createForm = useRef();
    const cateInput = useRef();
    const groupCateInput = useRef();
    const [isCheckedSmall, setIsCheckedSmall] = useState(false);
    const [isCheckedMedium, setIsCheckedMedium] = useState(false);
    const [isCheckedLarge, setIsCheckedLarge] = useState(false);
    const [inputValue, setInputValue] = useState([])
    const [cate, setCate] = useState([])
    const [cateValue, setCateValue] = useState("")
    const [size, setSize] = useState([])
    const [sex, setSex] = useState("")
    const [file, setFile] = useState([])
    const [DriverGroupCate, setDriverGroupCate] = useState("")
    const [DriverGroupCateList, setDriverGroupCateList] = useState([])

    const [DriverImg, setDriverImg] = useState([])

    const checkedSize = (event) => {
        if (event.target.id === "1") {
            if (isCheckedSmall) {
                setIsCheckedSmall(false)
            } else {
                setSize(size => [...size, 'Small'])
                setIsCheckedSmall(true)
            }
        }
        if (event.target.id === "2") {
            if (isCheckedMedium) {
                setIsCheckedMedium(false)
            } else {
                setSize(size => [...size, 'Medium'])
                setIsCheckedMedium(true)
            }
        }
        if (event.target.id === "3") {
            if (isCheckedLarge) {
                setIsCheckedLarge(false)
            } else {
                setSize(size => [...size, 'Large'])
                setIsCheckedLarge(true)
            }
        }
    }

    const handleOnChange = (event) => {
        setInputValue({ ...inputValue, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        setDriverGroupCateList([])
        setCate([])
        // axios.get(`http://pe.heromc.net:4000/Drivers`)
        //     .then(res => {
        //         const test = Object.values(res.data.reduce((a, {DriverGroupCate}) => {
        //             a[DriverGroupCate] = a[DriverGroupCate] || {DriverGroupCate};
        //             return a;
        //         }, Object.create(null)));
        //         setDriverGroupCateList(test)
        //     }
        // )
        // axios.get(`http://pe.heromc.net:4000/category`)
        //     .then(res => {
        //         setCate(res.data)
        //     }) 
    }, [])

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

        formData.append("DriverName", inputValue.name);
        formData.append("DriverSale", inputValue.sale);
        formData.append("DriverPrice", inputValue.price);
        formData.append("DriverCate", cateValue);
        formData.append("DriverGroupCate", DriverGroupCate);
        formData.append("DriverSize", size);
        formData.append("DriverDes", inputValue.des);
        formData.append("DriverSex", sex);
        formData.append("DriverDate", new Date());
        axios.post('http://pe.heromc.net:4000/Drivers', formData, config)
            .then(() => {
                props.setCloseCreateFunc(false);
                props.setToastFunc(true);
            })
    }

    const addNewCate = () => {
        axios.post('http://pe.heromc.net:4000/category', {
            cateName: inputValue.cate
        })
        setCate(cate => [...cate, { cateName: inputValue.cate }])
        setCateValue(inputValue.cate)
        cateInput.current.value = ""
    }

    const addNewGroupCate = () => {
        setDriverGroupCate(inputValue.groupCate)
        setDriverGroupCateList(DriverGroupCateList => [...DriverGroupCateList, { DriverGroupCate: inputValue.groupCate }])
        groupCateInput.current.value = ""
    }

    const deleteImg = (event) => {
        const virutalFile = [...file]
        virutalFile.splice(event.target.id, 1)
        setFile(virutalFile)

        const items = [...DriverImg]
        items.splice(event.target.id, 1)
        setDriverImg(items)
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
                            props.setCloseCreateFunc(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
                <form onSubmit={onSubmit} encType="multipart/form-data" ref={createForm}>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Name</div>
                        <div className="dashboard-right">
                            <input type="text" name="name" onChange={handleOnChange} required></input>
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
                                            <div key={index} className="create-box-img">
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
                            <input type="number" name="price" placeholder="USD" onChange={handleOnChange} required></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Sale off </div>
                        <div className="dashboard-right flex-center">
                            <input type="number" placeholder="%" style={{ width: "100px" }} onChange={handleOnChange} name="sale" required></input>
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
                                {DriverGroupCateList.length > 0 &&
                                    DriverGroupCateList.map((item, index) => {
                                        return (
                                            <option key={index}>{item.DriverGroupCate}</option>
                                        )
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
                                onChange={(event) => { setCateValue(event.target.value) }}
                                value={cateValue}>
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
                                onChange={(event) => { setSex(event.target.value) }}
                                value={sex}
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
                            <input type="text" name="des" onChange={handleOnChange} required></input>
                        </div>
                    </div>

                    <div className="flex-center" style={{ marginTop: '40px' }}>
                        <button className="create-box-btn btn">
                            Add Driver
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}