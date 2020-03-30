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
import { Row, Col, Button } from "antd";




export class HomeSec1 extends Component {


    render() {
        return (
            <Row style={{ backgroundColor: 'white' }}>
                <Col
                    className="h-s1"
                    sm={{ span: 6, offset: 3 }}
                    mg={{ span: 6, offset: 3 }}
                    lg={{ span: 6, offset: 3 }}
                    xl={{ span: 6, offset: 3 }}
                >
                    <div className="h-logo"></div>
                </Col>
                <Col
                    className="h-s1"
                    sm={{ span: 10, offset: 1 }}
                    mg={{ span: 10, offset: 1 }}
                    lg={{ span: 10, offset: 1 }}
                    xl={{ span: 10, offset: 1 }}
                >
                    <h1>Explore the world of <span style={{ color: '#F65301' }}>fractals</span> at light speed</h1>
                    <span><Button size='large' className="bt1-btn" >What is FV?</Button ></span><span><Button size='large' className="bt2-btn">Visit Github</Button></span>
                </Col>
                <Col
                    sm={{ span: 16, offset: 4 }}
                    mg={{ span: 16, offset: 4 }}
                    lg={{ span: 16, offset: 4 }}
                    xl={{ span: 16, offset: 4 }}
                >
                    <h2 style={{textAlign : 'center', marginTop : "5%"}}>Fractal Valley is an open-source Fractal project and a development vehicle for emerging technologies.</h2>
                </Col>
            </Row>
        )
    }
}