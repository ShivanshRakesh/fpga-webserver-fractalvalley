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

import React, { Component } from 'react';
import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import { historyFV } from './helper/history';
import { ExplorerView } from './view/explorer.view';
import '../node_modules/ol/ol.css';
import { TestView } from './view/test'
import { Test2View } from './view/test2'
import { SelectOptionsView } from './view/selectOptions';
import { HomePage } from './view/home'
import './bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return ( <
            Router history = { historyFV } >
            <
            Switch >
            <
            Route path = '/select'
            component = { SelectOptionsView }
            /> <
            Route exact path = "/"
            component = { HomePage }
            /> <
            Route path = '/explorer'
            component = { ExplorerView }
            /> <
            Route path = '/test'
            component = { TestView }
            /> <
            Route path = '/test2'
            component = { Test2View }
            /> <
            /Switch> <
            /Router>
        );
    }
}

export default App;