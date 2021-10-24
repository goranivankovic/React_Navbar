import React, { Component } from 'react'
import {Container,Row,Col,Form,FormGroup,FormControl } from 'react-bootstrap'




import { AiOutlineArrowRight} from 'react-icons/ai'
import { FaBars} from 'react-icons/fa'
import { FiFacebook ,FiInstagram,FiTwitter} from 'react-icons/fi'
import { AiOutlineGooglePlus ,AiOutlineArrowDown,AiOutlineArrowUp,AiOutlineEye,AiOutlineMail} from 'react-icons/ai'
import {RiCloseLine} from 'react-icons/ri'
import {BsHandIndexThumb} from 'react-icons/bs'
 



import sideBarStyle from '../Styles/SideBar.module.css'

export default class SideBar extends Component {
    constructor(){
        super()
        this.state={
            laz:false,
            laz2:false,
            laz3:false,
            laz4:false,
            laz5:false
          
       
        
        }
        this.prviNav=this.prviNav.bind(this)
        this.drugiiNav=this.drugiiNav.bind(this)
        this.treciNav=this.treciNav.bind(this)
        this.cetvrtiNav=this.cetvrtiNav.bind(this)
        this.promenIBg=this.promenIBg.bind(this)
        this.vratiBg=this.vratiBg.bind(this)
    
        
    }

    prviNav(){
        if (!this.state.laz) {

            this.setState({
                laz:true,
                laz2:false,
                laz3:false,
                laz4:false,
            })

            
        }else if(this.state.laz){
            this.setState({
                laz:false
            })

        }


    }

    drugiiNav(){

        if (!this.state.laz2) {

            this.setState({
              laz2:true,
              laz:false,
              laz3:false,
              laz4:false,
          
                
            })

            
        }else if(this.state.laz2){
            this.setState({
                laz2:false
            })

        }


    }
    treciNav(){
        if (!this.state.laz3) {

            this.setState({
              laz3:true,
              laz:false,
              laz2:false,
              laz4:false,
                
            })

            
        }else if(this.state.laz3){
            this.setState({
                laz3:false
            })

        }




    }

    cetvrtiNav(){
        if (!this.state.laz4) {

            this.setState({
              laz4:true,
              laz:false,
              laz3:false,
              laz2:false,
                
            })

            
        }else if(this.state.laz4){
            this.setState({
                laz4:false
            })

        }




    }

    promenIBg(a){
        a.target.style.backgroundColor="#0044cc"

    }
    vratiBg(b){
       b.target.style.backgroundColor="transparent"

    }





    
    render() {
        return (


            <div>

                {!this.state.laz5 ?



                <div className={sideBarStyle.main_div2}>


                      

                            <FaBars  className="text-light" onClick={()=>{

                            this.setState({
                                 laz5:true
                             })

                            }} />
                      
                    


                </div>


:



      



            <div className={sideBarStyle.main_div}>
              <Container>
                    <Row>
                        <Col xs={12} className="text-end">
                            <RiCloseLine  className="h3 text-end text-light" onClick={()=>{

                       

        
                     this.setState({
                         laz5:false
                      })
                        
      
                
                               
                          
                             
                            }}/>
                        </Col>
                    </Row>
                </Container>
                <br/>

                <Container>
                    <Row>
                        <Col xs={3}>
                        <a href="https://facebook.com"> <FiFacebook className="h5 text-light"/></a>
                        </Col>
                       
                        <Col xs={3}>
                             <a href="https://instagram.com"><FiInstagram className="h5 text-light"/></a>
                        </Col>
                        <Col xs={3}>
                        <a href="https://google.com"><AiOutlineGooglePlus className="h5 text-light"/></a>
                        </Col>
                   
                        <Col xs={3}>
                        <a href="https://twitter.com"> <FiTwitter className="h5 text-light"/></a>
                       
                        </Col>
                    </Row>
                </Container>


                <br/>

<Container>
    <Row>
        <Col xs={12}>
        <Form className="text-light">
  <Form.Group className="" >
   
    <Form.Control size="md" type="text" placeholder="Search" className="bg-transparent"/>

  </Form.Group>

  
</Form>
           
        </Col>
     
    </Row>
</Container>



<br/>
<br/>

<Container>
    <Row>
        <Col xs={12} className="text-light">
      
                { !this.state.laz ?  <div onClick={this.prviNav} onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}>Submit blog   <AiOutlineArrowDown className="float-end"  /> </div> :  <div onClick={this.prviNav} onMouseOver={this.promenIBg} onMouseOut={this.vratiBg} >Submit blog <AiOutlineArrowUp  className="float-end" onClick={this.prviNav} /> </div> }
              
        </Col>
    

        
                {this.state.laz ?

                <div>
          

                      <Col xs={12}>
                            <br/>
                          
                            <div className="text-light text-center" onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}> Submit listening</div>
                        </Col>
                        <Col xs={12}>
                        <br/>
                       
                        <div className="text-light text-center" onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}> Registration form</div>
                        </Col>
                          </div>
                        :''}

                   


<Col xs={12} className="text-light">
<br />


            <div>{ !this.state.laz2 ?  <div onClick={this.drugiiNav} onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}>
                <BsHandIndexThumb /> Instructios   <AiOutlineArrowDown className="float-end" onClick={this.drugiiNav} /> </div> :<div onClick={this.drugiiNav} onMouseOver={this.promenIBg} onMouseOut={this.vratiBg} ><BsHandIndexThumb /> Instructios   <AiOutlineArrowUp  className="float-end" onClick={this.drugiiNav} />  </div>}

            </div>
        </Col>
    

        
                {this.state.laz2 ?

                <div>
          

                      <Col xs={12}>
                            <br/>
                          
                            <div className="text-light text-center" onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}> For blogers</div>
                        </Col>
                        <Col xs={12}>
                        <br/>
                       
                        <div className="text-light text-center" onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}> For authors</div>
                        </Col>
                          </div>
                        :''}



                        
<Col xs={12} className="text-light">
<br/>
              { !this.state.laz3 ? <div onClick={this.treciNav} onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}><AiOutlineEye />  About  <AiOutlineArrowDown className="float-end"  onClick={this.treciNav} />  </div>:<div onClick={this.treciNav} onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}><AiOutlineEye /> About <AiOutlineArrowUp  className="float-end" onClick={this.treciNav} /></div> }

           
        </Col>
    

        
                {this.state.laz3 ?

                <div>
          

                      <Col xs={12}>
                            <br/>
                          
                            <div className="text-light text-center" onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}> Intrudaction</div>
                        </Col>
                        <Col xs={12}>
                        <br/>
                       
                        <div className="text-light text-center" onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}>Montly meetings</div>
                        </Col>
                          </div>
                        :''}


<Col xs={12} className="text-light">
<br/>
          { !this.state.laz4? <div onClick={this.cetvrtiNav} onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}><AiOutlineArrowDown className="float-end"  onClick={this.cetvrtiNav} /><AiOutlineMail />  Contact </div>   :  <div onClick={this.cetvrtiNav} onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}><AiOutlineArrowDown className="float-end"  onClick={this.cetvrtiNav} /><AiOutlineMail />  Contact</div> }

         
</Col>
    

        
                {this.state.laz4 ?

                <div>
          

                      <Col xs={12}>
                            <br/>
                          
                            <div className="text-light text-center" onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}> Faq</div>
                        </Col>
                        <Col xs={12}>
                        <br/>
                       
                        <div className="text-light text-center" onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}>Write message</div>
                        </Col>
                        <Col xs={12}>
                            <br/>
                          
                            <div className="text-light text-center" onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}>Write email</div>
                        </Col>
                        <Col xs={12}>
                        <br/>
                       
                        <div className="text-light text-center" onMouseOver={this.promenIBg} onMouseOut={this.vratiBg}>Write fax</div>
                        </Col>

                          </div>
                        :''}



            
                    
                 


             
                      
                       

       
    </Row>
</Container> 



                
            </div>

                }










            </div>
        )
    }
}
