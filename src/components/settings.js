import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd';
import { Form, FormGroup, Jumbotron, Button } from 'react-bootstrap';
import ReactBootstrapSlider from 'react-bootstrap-slider';
// import { $ } from "jquery";
// import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
// import RangeSlider from 'react-bootstrap-range-slider';

export class SettingsComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            renderer: 'cpp',
            dimension: '',
            theme: '',
            colors: '2',
            textureDarken: 'true',
            textureSmooth: 'false',
            textureStringLights: 'false',
            textureFanciful: 'false',
            textureShadow: 'false',
            textureRoundedEdges: 'false',
            edge: '0',
            adjustmentsMaxDepth: 1225,
            motion: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSlider = this.handleSlider.bind(this);
        this.getUrl = this.getUrl.bind(this);
        this.slider = {
            step : 1,
            min : 25,
            max : 10000,
            changeValue : 1225
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSlider(event) {
        console.log("changed");
    }

    getUrl() {
        // return "{'colors':" + this.state.colors + ", 'edge':" + this.state.edge + "}";
        var tmpParam = {
            max_depth: parseInt(this.state.adjustmentsMaxDepth),
            renderer: this.state.renderer,
            darken: (this.state.textureDarken == 'true') ? true : false,
            colors: parseInt(this.state.colors),
            edge: parseInt(this.state.edge)
        }
        return JSON.stringify(tmpParam);
        // return "{%22x%22:0.021136081508074223,%22y%22:0.055482213958694834,%22pix_x%22:0.014303994905745361,%22pix_y%22:0.014303994905745361,%22width%22:512,%22height%22:512,%22max_depth%22:1225,%22test_flags%22:0,%22darken%22:true,%22brighten%22:0,%22modes%22:66,%22colors%22:" + this.state.colors + ",%22texture%22:0,%22edge%22:" + this.state.edge + ",%22var1%22:0,%22var2%22:0,%22renderer%22:%22cpp%22,%22theme%22:0,%22test_vars%22:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],%22three_d%22:false,%22offset_w%22:0,%22offset_h%22:0,%22eye_sep%22:0,%22eye_adjust%22:0}";
    }

    render() {
        return (
            <Row className="content-mp" style={{ height: '80vh' }}>
                <Col sm={{ span: 5, offset: 1 }} mg={{ span: 17, offset: 1 }} lg={{ span: 17, offset: 1 }} xl={{ span: 17, offset: 1 }} style={{ margin: '2%', position: 'fixed' }} className="content-1-mp">
                    <Jumbotron align="center" style={{ backgroundColor: 'white', height: '80vh' }}>
                        <fractal-image settings={this.getUrl()}></fractal-image>
                        {/* <img src={this.getUrl()} alt="" /> */}
                    </Jumbotron>
                </Col>

                <Col sm={{ span: 5, offset: 1 }} mg={{ span: 6, offset: 0 }} lg={{ span: 6, offset: 0 }} xl={{ span: 6, offset: 0 }} style={{ height: '100vh', marginLeft: 'auto', overflowY: 'scroll' }} className="content-2-mp">
                    <Jumbotron style={{ margin: '2%', paddingTop: '3%', backgroundColor: 'white' }}>
                        <h3 align='center'>Fractal Parameters</h3>
                        <Divider />
                        <ReactBootstrapSlider
                                        value={this.state.adjustmentsMaxDepth}
                                        change={this.handleSlider}
                                        slideStop={this.handleSlider}
                                        step={this.slider.step}
                                        max={this.slider.max}
                                        min={this.slider.min}
                                        orientation="horizontal"
                                        reversed={true}
                                    />
                        <Form style={{ margin: '5%' }}>
                            {/* Renderer Selection */}
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label style={{ fontWeight: '700' }}>Renderer</Form.Label><br></br>
                                    <Form.Check
                                        type="radio"
                                        inline
                                        label="Python"
                                        name="renderer"
                                        value="python"
                                        onChange={this.handleChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        defaultChecked
                                        inline
                                        label="C++"
                                        name="renderer"
                                        value="cpp"
                                        onChange={this.handleChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        inline
                                        label="FPGA/opt"
                                        name="renderer"
                                        value="fpga"
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Form.Row>

                            {/* Dimension Selection */}
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label style={{ fontWeight: '700' }}>3-D</Form.Label><br></br>
                                    <Form.Check
                                        type="radio"
                                        defaultChecked
                                        inline
                                        label="2-D"
                                        name="dimension"
                                        value="2-D"
                                        onChange={this.handleChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        inline
                                        label="3-D"
                                        name="dimension"
                                        value="3-D"
                                        onChange={this.handleChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        inline
                                        label="Stereo 3-D"
                                        name="dimension"
                                        value="3-D"
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Form.Row>

                            {/* Theme Selection */}
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label style={{ fontWeight: '700' }}>Theme</Form.Label><br></br>
                                    <Form.Check
                                        type="radio"
                                        defaultChecked
                                        inline
                                        label="Customize"
                                        name="theme"
                                        value="Customize"
                                        onChange={this.handleChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        inline
                                        label="Christmas"
                                        name="theme"
                                        value="Christmas"
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Form.Row>

                            {/* Color Selection */}
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label style={{ fontWeight: '700' }}>Colors</Form.Label><br></br>
                                    <Form.Check
                                        type="radio"
                                        defaultChecked
                                        label="Medium Gradient"
                                        name="colors"
                                        value="2"
                                        onChange={this.handleChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Random"
                                        name="colors"
                                        value="1"
                                        onChange={this.handleChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Gradual Gradient"
                                        name="colors"
                                        value="0"
                                        onChange={this.handleChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Rainbow"
                                        name="colors"
                                        value="3"
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Form.Row>

                            {/* Texture Selection */}
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label style={{ fontWeight: '700' }}>Texture</Form.Label><br></br>
                                    <Form.Check
                                        type="checkbox"
                                        defaultChecked
                                        label="Darken"
                                        name="textureDarken"
                                        value={this.state.textureDarken == 'true' ? 'false' : 'true'}
                                        onChange={this.handleChange}
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="Smooth"
                                        name="textureSmooth"
                                        value={this.state.textureSmooth == 'true' ? 'false' : 'true'}
                                        onChange={this.handleChange}
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="StringLights"
                                        name="textureStringLights"
                                        value={this.state.textureStringLights == 'true' ? 'false' : 'true'}
                                        onChange={this.handleChange}
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="Fanciful"
                                        name="textureFanciful"
                                        value={this.state.textureFanciful == 'true' ? 'false' : 'true'}
                                        onChange={this.handleChange}
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="Shadow"
                                        name="textureShadow"
                                        value={this.state.textureShadow == 'true' ? 'false' : 'true'}
                                        onChange={this.handleChange}
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="Rounded Edges"
                                        name="textureRoundedEdges"
                                        value={this.state.textureRoundedEdges == 'true' ? 'false' : 'true'}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Form.Row>

                            {/* Edge Selection */}
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label style={{ fontWeight: '700' }}>Edge</Form.Label><br></br>
                                    <Form.Check
                                        type="radio"
                                        defaultChecked
                                        inline
                                        label="Curved"
                                        name="edge"
                                        value="0"
                                        onChange={this.handleChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        inline
                                        label="Bumpy"
                                        name="edge"
                                        value="1"
                                        onChange={this.handleChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        inline
                                        label="Villi"
                                        name="edge"
                                        value="2"
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Form.Row>

                            {/* Adjustment Selection */}
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label style={{ fontWeight: '700' }}>Adjustments</Form.Label><br></br>
                                    <Form.Check
                                        type="radio"
                                        inline
                                        label="Not yet done"
                                        name="adjustment"
                                        value="not yet done"
                                        onChange={this.handleChange}
                                    />
                                    {/* <ReactBootstrapSlider
                                        value={this.state.adjustmentsMaxDepth}
                                        change={this.handleSlider}
                                        slideStop={this.handleSlider}
                                        step={this.slider.step}
                                        max={this.slider.max}
                                        min={this.slider.min}
                                        orientation="horizontal"
                                        reversed={true}
                                    /> */}
                                </Form.Group>
                            </Form.Row>

                            {/* Motion Selection */}
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label style={{ fontWeight: '700' }}>Motion</Form.Label><br></br>
                                    <Form.Check
                                        type="radio"
                                        defaultChecked
                                        inline
                                        label="Position"
                                        name="motion"
                                        value="position"
                                        onChange={this.handleChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        inline
                                        label="Velocity"
                                        name="motion"
                                        value="velocity"
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Form.Row>

                        </Form>
                    </Jumbotron >
                </Col>
            </Row>

        )
    }
}

