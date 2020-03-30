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

import React, {Component} from 'react';
import {Col, Row, Tag, Divider} from 'antd';

export class SlideInfoComp extends Component {
    render() {
        return(
            <div>
            <Row>
                <Col sm={{ span: 20, offset: 2 }} mg={{ span: 20, offset: 2 }} lg={{ span: 20, offset: 2 }} xl={{ span: 20, offset: 2 }} className="scanner-mp" style={{paddingBottom : "5%"}}>
                <h3 className='' style={{textAlign : 'center'}}>Fractal Details</h3>
                <Divider/>
                    <div><Col sm={{ span: 5, offset: 1 }} mg={{ span: 22, offset: 1}} lg={{ span: 24, offset: 0 }}>
                    <Col sm={{ span: 5, offset: 1 }} mg={{ span: 22, offset: 1}} lg={{ span: 11, offset: 1 }} style={{fontWeight : 700}}>Name</Col>
                    <Col sm={{ span: 5, offset: 1 }} mg={{ span: 22, offset: 1}} lg={{ span: 12, offset: 0 }} style={{fontWeight : 300}}>Mandelbrot001</Col>
                    <Col sm={{ span: 5, offset: 1 }} mg={{ span: 22, offset: 1}} lg={{ span: 11, offset: 1 }} style={{fontWeight : 700}}>Plot Type</Col>
                    <Col sm={{ span: 5, offset: 1 }} mg={{ span: 22, offset: 1}} lg={{ span: 12, offset: 0 }} style={{fontWeight : 300}}>Plot_23</Col>
                    <Col sm={{ span: 5, offset: 1 }} mg={{ span: 22, offset: 1}} lg={{ span: 11, offset: 1 }} style={{fontWeight : 700}}>Details</Col>
                    <Col sm={{ span: 5, offset: 1 }} mg={{ span: 22, offset: 1}} lg={{ span: 12, offset: 0 }} style={{fontWeight : 300}}>This is the demo image preview for GSOC 19</Col>
                    <Col sm={{ span: 5, offset: 1 }} mg={{ span: 22, offset: 1}} lg={{ span: 11, offset: 1 }} style={{fontWeight : 700}}>Tags</Col>
                    <Col sm={{ span: 5, offset: 1 }} mg={{ span: 22, offset: 1}} lg={{ span: 12, offset: 0 }} style={{fontWeight : 300}}>
                    <Tag> sanjeet</Tag>
                    <Tag> roorkee</Tag>
                    <Tag> GSoC 19</Tag>
                    <Tag> Demo</Tag>
                    </Col>                    
                    </Col></div>
                    </Col>
            </Row>
            </div>
        )
    }
}
