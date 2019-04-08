import React, {Component} from 'react';
import {Col, Row} from 'antd';
import {Map, View} from "ol";
import TileLayer from "ol/layer/Tile";
import XYZ from 'ol/source/XYZ.js';
import {Zoom, OverviewMap, ScaleLine} from 'ol/control.js';
import {FullScreen} from "ol/control";
import {Slider} from "antd";


const marks = {
  0: '0°',
  90: '90°',
  180: '180°',
  270: '270°',
  360: {
    style: {
      color: '#f50',
    },
    label: <strong>360°</strong>,
  },
};


export class PublicMap extends Component {
    constructor(props) {
      super(props);
  
      this.state = { 
          center: [0, 0], 
          zoom: 1 ,
        };
        this.slider = this.slider.bind(this)

      this.viewer = new Map({
        controls: [], 
        target: null,
        layers: [
          new TileLayer({
            source: new XYZ({
              url: 'http://fractalvalley.net:/tile/1225/{z}/{x}/{y}?json={"test_flags":0,"darken":true,"brighten":0,"modes":2,"colors":2,"texture":0,"edge":0,"var1":0,"var2":0,"renderer":"cpp","theme":0,"test_vars":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}',
              minZoom : 0,
              wrapX : false
            })
          })
        ],
        view: new View({
          minZoom : 0,
        })
      });
    }
  
    updateMap() {
      this.viewer.getView().setCenter(this.state.center);
      this.viewer.getView().setZoom(this.state.zoom);
      this.viewer.getView().getMaxZoom()
    }


    componentDidMount() {
      this.viewer.setTarget("map");
      this.viewer.addControl(new FullScreen({
        target : 'fs-mp',
      }));
      this.viewer.addControl(new Zoom({
        target: 'zoom-mp'
      }));
      this.viewer.addControl(new OverviewMap({
        target : 'test',
        className : 'nav-mp',
        collapsible : false,
      }));
      this.viewer.addControl(new ScaleLine({
        units : 'metric'
      }));
    }


    shouldComponentUpdate(nextState) {
      let center = this.viewer.getView().getCenter();
      let zoom = this.viewer.getView().getZoom();
      if (center === nextState.center && zoom === nextState.zoom) return false;
    }
  
    userAction() {
      this.setState({ center: [546000, 6868000], zoom: 5 });
    }

    slider(value){
      this.viewer.getView().setRotation(value * Math.PI / 180)
    }


    render() {
      this.updateMap();
      return (
        <Row>
            <Col sm={{ span: 1, offset: 0 }} mg={{ span: 1, offset: 0 }} lg={{ span: 1, offset: 0 }} xl={{ span: 1, offset: 0 }} className="content-view-controls-mp">
                <div id="zoom-mp"></div>
                <div id="fs-mp"></div>
                <Slider defaultValue={0} vertical marks={marks} onChange={this.slider} min={0} max={360} style={{ height: '54%', marginTop : "25% !important"}}/>
            </Col>
            <Col id="map" sm={{ span: 23, offset: 0 }} mg={{ span: 23, offset: 0 }} lg={{ span: 23, offset: 0 }} xl={{ span: 23, offset: 0 }} style={{ height: "85vh" }} className="content-view-main-mp">
            </Col>
        </Row>
      );
    }
  }
  