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




export class HomeSec2 extends Component {


    render() {
        return (
            <Row style={{ backgroundColor: 'white' }} >
                <div className="h-s2">
                    <Col
                        className="blue-crd"
                        sm={{ span: 4, offset: 3 }}
                        mg={{ span: 4, offset: 3 }}
                        lg={{ span: 4, offset: 3 }}
                        xl={{ span: 4, offset: 3 }}
                    >
                        <div>
                            <h2>Cloud FPGAs</h2>
                            <p style={{position: 'absolute', bottom: 0}}>Know more</p>
                        </div>
                    </Col>
                    <Col
                        className="blue-crd"
                        sm={{ span: 4, offset: 3 }}
                        mg={{ span: 4, offset: 3 }}
                        lg={{ span: 4, offset: 3 }}
                        xl={{ span: 4, offset: 3 }}
                    >
                        <div>
                            <h2>Hardware accelerated web application</h2>
                            <p style={{position: 'absolute', bottom: 0}}>Know more</p>
                        </div>
                    </Col>
                    <Col
                        className="blue-crd"
                        sm={{ span: 4, offset: 3 }}
                        mg={{ span: 4, offset: 3 }}
                        lg={{ span: 4, offset: 3 }}
                        xl={{ span: 4, offset: 3 }}
                    >
                        <div>
                            <h2>Advance hardwared modeling in Transaction-Level Verilog</h2>
                            <p style={{position: 'absolute', bottom: 0}}>Know more</p>
                        </div>
                    </Col>
                </div>
            </Row>
        )
    }
}