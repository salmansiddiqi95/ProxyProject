import React from 'react';
import {Row, Col, Card, Table , Button, Modal} from 'react-bootstrap';
import axios from 'axios'
import Aux from "../../hoc/_Aux";

class BootstrapTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [], modal:false,ip:"",result:"Waiting for result ...",result1:"Waiting for result ...",result2:"Waiting for result ...",result3:"Waiting for result ..." ,result4:"Waiting for result ..."};
      }

      componentWillMount(){
axios.get('http://e70dff837589.ngrok.io/proxy/').then((data)=>{
    this.setState({data:data.data})
    console.log(">>>>>>>>>>>>>",data.data)
      })
    .catch((e)=>{
        console.log("ff",e)
    })
      }
    render() {
        let {data, modal, ip , result, result1,result2, result3, result4,} = this.state
        return (
            <Aux>
                      <Modal show={modal} onHide={()=>{

                      }}>
        <Modal.Header closeButton>
         

        </Modal.Header>

                    <Modal.Body>https://reactjs.org/docs/react-component.html -  <b>{result}</b></Modal.Body>
          <Modal.Body>https://www.w3schools.com/jsref/jsref_map.asp -  <b>{result1}</b></Modal.Body>

          <Modal.Body>https://dev.to/davidepacilio/35-free-react-templates-and-themes-32ci -  <b>{result2}</b></Modal.Body>

          <Modal.Body>https://www.npmjs.com/package/axios - <b>{result3}</b></Modal.Body>

          <Modal.Body>https://react-bootstrap.github.io/components/modal/-  <b>{result4}</b></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{this.setState({modal:false, result:"waiting for result ...", result1:"waiting for result ...", result2:"waiting for result ...", result3:"waiting for result ...", result4:"waiting for result ..."})}}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
 
                <Row>
                    <Col>
                        <Card style={{backgroundColor:'#7cf2df'}}>
                            <Card.Header>
                                <Card.Title as="h5">Proxies</Card.Title>
                                <Button className="btn btn-warning" onClick={()=>{
                                    this.setState({data:[]})
axios.get('http://e70dff837589.ngrok.io/proxy/refresh').then((data)=>{
        axios.get('http://e70dff837589.ngrok.io/proxy/').then((data)=>{
    this.setState({data:data.data})
    console.log(">>>>>>>>>>>>>",data.data)
      })
    .catch((e)=>{
        console.log("ff",e)
    })
     

      })
                                }}>Refresh</Button>
                            </Card.Header>
                            <Card.Body>
                            <p><b>Number of proxies</b> {data.length}</p>
                                <Table responsive>
                                    <thead>
                                    <tr>
                                        <th>#</th> 
                                        <th>IP</th>
                                        <th>Port</th>
                                        <th>Provider</th>
                                        <th>Basic Functionality</th>
                                        <th>Created By</th>
                                        <th>updated By</th>
                                        <th>URL TEST</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                {
                                    data.map((proxy,index)=>{
                                        return(
                                            <tr>
                                            <td>{index}</td>
                                            <td>{proxy.ip}</td>
                                        <td>{proxy.port}</td>
                                        <td>{proxy.provider}</td>
                                        <td>{proxy.basicFunctionality == true ? "Pass" : "Fail"}</td>
                                        <td>{proxy.createdAt}</td>

                                        <td>{proxy.updatedAt}</td>
                                        <td><Button 
                                        onClick={()=>{
                                            this.setState({modal:true,ip:proxy.ip})
axios({
    method:"post", 
    url:"http://e70dff837589.ngrok.io/proxy/performtest",
    data:{
        "ip":proxy.ip,
        "url":"https://reactjs.org/docs/react-component.html"
    }
}).then(r=>{
    axios.get('http://e70dff837589.ngrok.io/proxy/gettests/'+proxy.ip).then((data)=>{
    this.setState({result:"result passed ...."})
      })
                                        

}).catch(e=>{
    this.setState({result:"test fail ....."})

    axios({
        method:"post", 
        url:"http://e70dff837589.ngrok.io/proxy/performtest",
        data:{
            "ip":proxy.ip,
            "url":"https://reactjs.org/docs/react-component.html"
        }
    }).then(r=>{
        axios.get('http://e70dff837589.ngrok.io/proxy/gettests/'+proxy.ip).then((data)=>{
        this.setState({result2:"result passed ...."})
          })
                                            
    
    }).catch(e=>{
        this.setState({result2:"test fail ....."})
    })


    axios({
        method:"post", 
        url:"http://e70dff837589.ngrok.io/proxy/performtest",
        data:{
            "ip":proxy.ip,
            "url":"https://reactjs.org/docs/react-component.html"
        }
    }).then(r=>{
        axios.get('http://e70dff837589.ngrok.io/proxy/gettests/'+proxy.ip).then((data)=>{
        this.setState({result3:"result passed ...."})
          })
                                            
    
    }).catch(e=>{
        this.setState({result3:"test fail ....."})
    })


    axios({
        method:"post", 
        url:"http://e70dff837589.ngrok.io/proxy/performtest",
        data:{
            "ip":proxy.ip,
            "url":"https://reactjs.org/docs/react-component.html"
        }
    }).then(r=>{
        axios.get('http://e70dff837589.ngrok.io/proxy/gettests/'+proxy.ip).then((data)=>{
        this.setState({result4:"result passed ...."})
          })
                                            
    
    }).catch(e=>{
        this.setState({result4:"test fail ....."})
    })


    axios({
        method:"post", 
        url:"http://e70dff837589.ngrok.io/proxy/performtest",
        data:{
            "ip":proxy.ip,
            "url":"https://reactjs.org/docs/react-component.html"
        }
    }).then(r=>{
        axios.get('http://e70dff837589.ngrok.io/proxy/gettests/'+proxy.ip).then((data)=>{
        this.setState({result1:"result passed ...."})
          })
                                            
    
    }).catch(e=>{
        this.setState({result1:"test fail ....."})
    })
})
                                        }}



                                        >TEST</Button></td>

                                        </tr>
                                        );
                                    })
                                }
                                    </tbody>
                                </Table>
                            </Card.Body>
                      </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default BootstrapTable;