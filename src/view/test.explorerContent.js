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

import React,{Component} from 'react';
import {Row , Col, Affix} from 'antd';
import { SlideInfoComp } from '../components/slide.info';
import { TestPublicMap } from '../components/test.explorer';

export class TestExplorerContent extends Component {
    render() {
        return(
            <div>
                <Row className="content-mp" >
                    <Col sm={{ span: 5, offset: 1 }} mg={{ span: 17, offset: 1 }} lg={{ span: 17, offset: 1 }} xl={{ span: 17, offset: 1 }} style={{marginTop : "15px"}} className="content-1-mp">
                        <TestPublicMap/>
                    </Col>
                    <Col sm={{ span: 5, offset: 1 }} mg={{ span: 6, offset: 0 }} lg={{ span: 6, offset: 0 }} xl={{ span: 6, offset: 0 }} className="content-2-mp">
                        <Affix offsetTop={15}>
                            {/* <PreviewComp/> not required here for testing */}
                            <SlideInfoComp/>
                        </Affix>
                    </Col>
                </Row>
            </div>
        )
    }
}
