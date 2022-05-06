import axios from 'axios';
import * as React from 'react';
import { Component, useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Alert, List, Divider, Skeleton, Typography, Button, Row, Col, Modal, Input} from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { EditOutlined, DeleteOutlined, PlusOutlined} from '@ant-design/icons';

const { Title,Text } = Typography;

const IndivProject = (props) => {
    const axios = require('axios');
    
    const [exp, setExp] = useState([
        {
            "id": 1,
            "project_id": 2,
            "category_id": 2,
            "name": "Server Maintenance",
            "description": "Server maintenance and upgrading work to incorporate BC plans",
            "amount": 30000,
            "created_at": "2021-11-04T16:00:00.000Z",
            "created_by": "Jacky",
            "updated_at": "2021-11-06T16:00:00.000Z",
            "updated_by": "Jacky"
        },
        {
            "id": 2,
            "project_id": 3,
            "category_id": 4,
            "name": "Consultant",
            "description": "Consultancy services for integration work",
            "amount": 10000,
            "created_at": "2021-11-06T16:00:00.000Z",
            "created_by": "Helen",
            "updated_at": "2021-11-07T16:00:00.000Z",
            "updated_by": "Helen"
        }
    ]);
    const [err_1, setError] = useState(false)
    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")

    

    useEffect(() => {
        loadExpenses()
    }, [])

    function filter_projectid(event) {
        return event.project_id == props.project_id;
    }

    const loadExpenses = async () => {
        //get whole list of expense
        await axios.get(`/expense`, {}, {
        //     params: {
        //     project_id: 2 //props.project_id,
        // }
        })
        .then(res => {
            //filter based on props.project_id
            var filtered = res.data.filter(filter_projectid);
            setExp(filtered)
            console.log(res)
            console.log("success")
        })
        .catch(error => {
            setError(true)
            console.log(error)
        })
    }

    const editExpenses = async (id) => {
        console.log("edit", id)
        await axios.post(`/expense-update`, {}, {params: {
            expense: id,
        }})
        .then(res => {
            console.log("success")
        })
        .catch(error => {
            setError(true)
            console.log(error)
        })
    }

    const deleteExpenses = async (id) => { 
        console.log("delete")
        await axios.delete(`/expense_delete`, {}, {params: {
            expense: id,
        }})
        .then(res => {
            console.log("success")
        })
        .catch(error => {
            setError(true)
            console.log(error)
        })
    }


    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = async () => {
        //call api
        console.log(name)
        console.log(amount)
        await axios.post(`/expense_add`, {}, {params: {
            project_id: null, //props.project_id,
            name: name,
            amount: amount,
        }})
        .then(res => {
            console.log("success")
        })
        .catch(error => {
            setError(true)
            console.log(error)
        })

        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onChange_name = (e) => {
        setName(e.target.value)
    }

    const onChange_amt= (e) => {
        setAmount(e.target.value)
    }




    const addExpenses = async () => { 
        //open modal
        showModal()
    }




    
    return (
        <div>

        {err_1 ? 
        <Alert message="Something's Wrong..." type="warning" />: null }

        <h1>Project No: 1 {/* props.project_id  */}</h1>
        <h1>Total Number of Expenses: {exp.length!==0 ? exp.length : 0}</h1>

        {/* <div className="list-group">

            {exp.length!==0 ? 
            exp.map((item) => {
          
            return (
            <div>
            <div className="list-group-item list-group-item-info">
            <div className="container">
         
            <div className="row">
            
                <div className="col">
                    <div className="row">
                    <h5 className="mb-1">{item.name}</h5>
                    </div>
 
                    <div className="row">
                    <small>
                    {item.category_id} | {item.created_at}
                    </small>    
                    </div>

                    <div className="row">
                    <small>{item.description}</small>
                    </div> 
                </div>
            </div> 
            </div>

            <div className="col">
                <h5 className="mb-1">{item.amount}</h5>
            </div>

            <div className="col">
            <Button onClick={editExpenses} type='Button'>
            <i className="bi bi-pencil-fill"></i>
            </Button>
            </div>

            <div className="col">
            <i className="bi bi-trash-fill"></i>
            </div>
            </div>
            <br></br>
            </div> 

        )}): null} 
        </div>*/}

    <Modal title="add an expense to this project" visible={isModalVisible} closable={false}
    footer={[
        <Button key="back" onClick={handleCancel}>
          Return
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Submit
        </Button>,
    ]}>
        <Input value={name} onChange={onChange_name} addonBefore="Name: " />
        <Input value={amount} onChange={onChange_amt} addonBefore="Amount: " />
      </Modal>

        <List
            itemLayout="horizontal"
            dataSource={exp}
            style={{'backgroundColor': '#fff'}}
            renderItem={item => (
            <List.Item >
                <List.Item.Meta
                style={{width:"50%"}}
                title={
                    <>
                    <h5 className="mb-1">{item.name}</h5>

                    <Text style={{ color: '#000' }}>{item.category_id}</Text>
                    <Divider style={{'backgroundColor': '#000' }} type="vertical" />
                    <Text style={{ color: '#000' }}>{item.created_at}</Text>

                    <h5 className="mb-1">{item.description}</h5>

            
                    </>
                    }
                />
               <Row justify="space-evenly">
                <Col span={4} style={{width:"200px"}}>
                {item.amount}
                </Col>
                <Col span={4}>
                <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={() => editExpenses(item.id)} />
                </Col>
                <Col span={4}>
                <Button type="primary" shape="circle" icon={<DeleteOutlined />}onClick={() => deleteExpenses(item.id)}/>
                </Col>
                </Row>
            </List.Item>
            )}
        />

        

        <Button icon={<PlusOutlined />} onClick={addExpenses} ></Button>

        </div>

       
    )

}

export default IndivProject;
