import axios from 'axios';
import * as React from 'react';
import { Component, useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Alert, List, Divider, Skeleton, Typography, Button } from 'antd';
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

    

    useEffect(() => {
        //loadExpenses()
    }, [])


    // const loadExpenses = async () => {
    //     await axios.get(`/project-get`, {}, {params: {
    //         project: props.project_id,
    //     }})
    //     .then(res => {
    //         setExp(res.data)
    //         console.log("success")
    //     })
    //     .catch(error => {
    //         setError(true)
    //         console.log(error)
    //     })
    // }

    const editExpenses = async (props) => {
        console.log("edit")
        // await axios.post(`/project-update`, {}, {params: {
        //     project: props.project_id,
        // }})
        // .then(res => {
        //     console.log("success")
        // })
        // .catch(error => {
        //     setError(true)
        //     console.log(error)
        // })
    }

    const deleteExpenses = () => {
        console.log("delete")
    }

    const addExpenses = () => {
        console.log("add")
    }


    
    return (
        <div>

        {err_1 ? 
        <Alert message="Something's Wrong..." type="warning" />: null }


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

        <List
            itemLayout="horizontal"
            dataSource={exp}
            renderItem={item => (
            <List.Item style={{ color: '#000' }}>
                <List.Item.Meta
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

                {item.amount}
                <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={editExpenses} />
                <Button type="primary" shape="circle" icon={<DeleteOutlined />}onClick={deleteExpenses}/>
            </List.Item>
            )}
        />

        

        <Button icon={<PlusOutlined />} onClick={addExpenses} ></Button>

        </div>

       
    )

}

export default IndivProject;
