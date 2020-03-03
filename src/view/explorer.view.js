import React, {Component} from 'react';
import { HeaderComp } from '../components/header';
import { ExplorerContent } from './exolorerContainer2.view';


export class ExplorerView extends Component {

    render(){
        return(
            <div style={{position:'fixed'}}>
                <HeaderComp/>
                <ExplorerContent/>
            </div>
        )
    }
}