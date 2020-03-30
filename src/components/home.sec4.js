/*
BSD 3-Clause License

Copyright (c) 2019, Sanjeet Kishore
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
this list of conditions and the following disclaimer in the documentation
and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
contributors may be used to endorse or promote products derived from
this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React, { Component } from "react";
import { Row, Col, Button, Icon } from "antd";




export class HomeSec4 extends Component {


    render() {
        return (
            <Row style={{ backgroundColor: 'white' }} >
                <div className="h-s4">
                    <Col 
                        sm={{ span: 22, offset: 2 }}
                        mg={{ span: 22, offset: 2 }}
                        lg={{ span: 22, offset: 2 }}
                        xl={{ span: 22, offset: 2 }}
                    >
                        <h1 style={{fontSize : '2.5rem'}} >Browse <span style={{color : "#F65301"}} >Gallery</span></h1>
                    </Col>
                    <Col
                        className="fractal-crd"
                        sm={{ span: 4, offset: 2 }}
                        mg={{ span: 4, offset: 2 }}
                        lg={{ span: 4, offset: 2 }}
                        xl={{ span: 4, offset: 2 }}
                    >
                        <div>
                            <h2> Fractal 1 </h2>
                            <p style={{position: 'absolute', bottom: 0}}>Know more</p>
                        </div>
                    </Col>
                    <Col
                        className="fractal-crd"
                        sm={{ span: 4, offset: 1 }}
                        mg={{ span: 4, offset: 1 }}
                        lg={{ span: 4, offset: 1 }}
                        xl={{ span: 4, offset: 1 }}
                    >
                        <div>
                            <h2> Fractal 2 </h2>
                            <p style={{position: 'absolute', bottom: 0}}>Know more</p>
                        </div>
                    </Col>
                    <Col
                        className="fractal-crd"
                        sm={{ span: 4, offset: 1 }}
                        mg={{ span: 4, offset: 1 }}
                        lg={{ span: 4, offset: 1 }}
                        xl={{ span: 4, offset: 1 }}
                    >
                        <div>
                            <h2> Fractal 3 </h2>
                            <p style={{position: 'absolute', bottom: 0}}>Know more</p>
                        </div>
                    </Col>
                    <Col
                        className="fractal-crd"
                        sm={{ span: 4, offset: 1 }}
                        mg={{ span: 4, offset: 1 }}
                        lg={{ span: 4, offset: 1 }}
                        xl={{ span: 4, offset: 1 }}
                    >
                        <div>
                            <h2> Fractal 4 </h2>
                            <p style={{position: 'absolute', bottom: 0}}>Know more</p>
                        </div>
                    </Col>
                    <Col
                        style={{height : '60%', position : "relative", marginTop: '3%'}}
                        sm={{ span: 1, offset: 1 }}
                        mg={{ span: 1, offset: 1 }}
                        lg={{ span: 1, offset: 1 }}
                        xl={{ span: 1, offset: 1 }}
                    >
                        <div>
                            <Icon style={{position: 'absolute', margin : 0 , fontSize: '2rem' ,top: '40%'}} type="right-circle"/>
                        </div>
                    </Col>
                    <Col 
                        sm={{ span: 2, offset: 10 }}
                        mg={{ span: 2, offset: 10 }}
                        lg={{ span: 2, offset: 10 }}
                        xl={{ span: 2, offset: 10 }}
                    >
                        <Button size='large' className="bt2-btn" style={{textAlign : "center", width: '100%'}}> Explore Now</Button>
                    </Col>
                </div>
            </Row>
        )
    }
}