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
import { Col, Row } from "antd";
import { Link } from 'react-router-dom';
import { Button } from "antd/lib/radio";


export class HeaderComp extends Component {

  render() {
    return (
      <div className="header-mp">
        <Row>
          <Col
            sm={{ span: 4, offset: 1 }}
            mg={{ span: 4, offset: 1 }}
            lg={{ span: 4, offset: 1 }}
            xl={{ span: 4, offset: 1 }}
          >
            <Link to='/'>
              <div className="logo-mp" />
            </Link>
          </Col>
          <Col
            className="nav-pad"
            sm={{ span: 2, offset: 8 }}
            mg={{ span: 2, offset: 8 }}
            lg={{ span: 2, offset: 8 }}
            xl={{ span: 2, offset: 8 }}
          >
            <p style={{ textAlign: "center" }}>About</p>
          </Col>
          {/* <Col
            sm={{ span: 2, offset: 1 }}
            mg={{ span: 2, offset: 1 }}
            lg={{ span: 2, offset: 1 }}
            xl={{ span: 2, offset: 1 }}
          >
            <span style={{textAlign : "center"}}>Docs</span>
          </Col> */}
          <Col
            className="nav-pad"
            sm={{ span: 2, offset: 0 }}
            mg={{ span: 2, offset: 0 }}
            lg={{ span: 2, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
          >
            <p style={{ textAlign: "center" }}>Community</p>
          </Col>
          <Col
            className="nav-pad"
            sm={{ span: 2, offset: 1 }}
            mg={{ span: 2, offset: 1 }}
            lg={{ span: 2, offset: 1 }}
            xl={{ span: 2, offset: 1 }}
          >
            <Link to='/explorer'>
              <Button className="exp-btn">Explorer</Button>
            </Link>
          </Col>
          <Col
            className="nav-pad"
            sm={{ span: 2, offset: 0 }}
            mg={{ span: 2, offset: 0 }}
            lg={{ span: 2, offset: 0 }}
            xl={{ span: 2, offset: 0 }}
            style={{ textAlign: "center" }}
          >
            <Button style={{ textAlign: "center" }} className="login-btn">Login</Button>
            {/* <Avatar className="profile-img-mp">
              <span style={{ fontSize: "1rem", textTransform: "capitalize" }}>
                Sanjeet
              </span>
            </Avatar> */}
          </Col>
          {/* <Col
            sm={{ span: 3, offset: 0 }}
            mg={{ span: 3, offset: 0 }}
            lg={{ span: 3, offset: 0 }}
            xl={{ span: 3, offset: 0 }}
            style={{ cursor: "pointer" }}
          >
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item>
                    <p>Logout</p>
                  </Menu.Item>
                </Menu>
              }
              trigger={["click"]}
            >
              <h3 style={{ marginTop: "15px" }}>
                Sanjeet
                <Icon className="profile-icon-mp" type="down" />
              </h3>
            </Dropdown>
          </Col> */}
        </Row>
      </div>
    );
  }
}
