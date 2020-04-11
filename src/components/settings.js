import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd';
import { Form, Jumbotron, Button } from 'react-bootstrap';

export class SettingsComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            renderer: 'cpp',
            dimension: '2d',

            theme: '0',
            cycle: 0,

            electrify: 'false',
            color_scheme: '2',
            color_shift: '0',

            // TEXTURE
            darken: 'true',
            smooth: 'false',
            string_lights: 'false',
            fanciful: 'false',
            shadow: 'false',
            rounded_edges: 'false',

            edge: '0',

            // ADJUSTMENTS
            sqrt_depth: "35",
            var1: "0",
            var2: "0",
            brighten: "0",
            eye_adjust: "0",

            motion: "position",
            debug: 'false',
            full_image: 'true',
            img_url: null
        }

        this.initial_state = {
            renderer: 'cpp',
            dimension: '2d',

            theme: '0',
            cycle: 0,

            electrify: 'false',
            color_scheme: '2',
            color_shift: '0',

            // TEXTURE
            darken: 'true',
            smooth: 'false',
            string_lights: 'false',
            fanciful: 'false',
            shadow: 'false',
            rounded_edges: 'false',

            edge: '0',

            // ADJUSTMENTS
            sqrt_depth: "35",
            var1: "0",
            var2: "0",
            brighten: "0",
            eye_adjust: "0",

            motion: "position",
            debug: 'false',
            full_image: 'true',
            img_url: null
        }

        this.img_url = null;
        this.img = null;
        this.download = null;
        this.handleChange = this.handleChange.bind(this);
        this.hideElements = this.hideElements.bind(this);
        this.getModes = this.getModes.bind(this);
        this.getTexture = this.getTexture.bind(this);
        this.getColors = this.getColors.bind(this);
        this.getSettings = this.getSettings.bind(this);
        this.changeCycle = this.changeCycle.bind(this);
        this.processImage = this.processImage.bind(this);
        this.storeLocally = this.storeLocally.bind(this);
        this.openImage = this.openImage.bind(this);
        this.downloadImage = this.downloadImage.bind(this);
        this.resetImage = this.resetImage.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        if (event.target.name === 'theme') {
            if (event.target.value === '1')
                this.setState({'timer': setInterval(this.changeCycle, 2000)});
            else {
                this.setState({'cycle': 0});
                window.clearInterval(this.state.timer);
            }
        }
    }

    openImage() {
        this.download = false;
        this.processImage();
    }

    downloadImage(){
        this.download = true;
        this.processImage();
    }

    resetImage(){
        this.setState(this.initial_state);
    }

    processImage() {
        this.img_url = document.getElementsByClassName('mat-card-image')[0].getAttribute('src');
        this.img = new Image();
        this.img.crossOrigin = "Anonymous";
        this.img.addEventListener("load", this.storeLocally, false);
        this.img.src = this.img_url;
    }
    
    storeLocally() {
        let canvas = document.createElement("canvas");
        let context = canvas.getContext("2d");
        
        canvas.width = this.img.width;
        canvas.height = this.img.height;
        context.drawImage(this.img, 0, 0);
        
        try {
            localStorage.setItem("fractal-image", canvas.toDataURL("image/png"));
            this.setState({'img_url': localStorage.getItem('fractal-image')});
            if(this.download)
                document.getElementById('download-img').click();
            else
                document.getElementById('open-img').click();
        }
        catch(err) {
          console.log("Error: " + err);
        }  
      }

    getModes() {
        return (((this.state.renderer === "python") ? 1 : 0) << 0) |
            (((this.state.renderer === "cpp") ? 1 : 0) << 1) |
            (((this.state.renderer === "fpga") ? 1 : 0) << 3) |
            (((this.state.full_image === "true") ? 1 : 0) << 6) |
            (((this.state.smooth === 'true') ? 1 : 0) << 7);
    }

    getTexture() {
        return (((this.state.string_lights === 'true') ? 1 : 0) << 0) |
            (((this.state.fanciful === 'true') ? 1 : 0) << 1) |
            (((this.state.shadow === 'true') ? 1 : 0) << 2) |
            (((this.state.rounded_edges === 'true') ? 1 : 0) << 3);
    }

    getColors() {
        return (parseInt(this.state.color_scheme)) |
            (parseInt(this.state.color_shift) << 16) |
            (((this.state.electrify === 'true') ? 1 : 0) << 25);
    }

    getSettings() {
        var tmpParam = {
            max_depth: parseInt(this.state.sqrt_depth) * parseInt(this.state.sqrt_depth),
            renderer: this.state.renderer,
            darken: (this.state.darken === 'true') ? true : false,
            colors: this.getColors(),
            edge: parseInt(this.state.edge),
            modes: this.getModes(),
            texture: this.getTexture(),
            three_d: ((this.state.dimension === '2d') ? false : true),
            eye_adjust: parseInt(this.state.eye_adjust),
            var1: parseInt(this.state.var1),
            var2: parseInt(this.state.var2),
            brighten: parseInt(this.state.brighten),
            theme: parseInt(this.state.theme),
            cycle: this.state.cycle,
        }
        // console.log(JSON.stringify(tmpParam));
        return JSON.stringify(tmpParam);
    }

    changeCycle() {
        this.setState({ 'cycle': (this.state.cycle + 1) % 6 });
        console.log("cycle" + this.state.cycle);
    }

    hideElements() {
        // DARKEN ONLY
        let elements;
        elements = document.getElementsByClassName("darken-only");
        for (let index = 0; index < elements.length; index++) {
            elements[index].hidden = (this.state.darken === 'true') ? false : true;
        }

        // C ONLY 
        elements = document.getElementsByClassName("c-only");
        for (let index = 0; index < elements.length; index++) {
            elements[index].hidden = (this.state.renderer === 'cpp') ? false : true;
        }

        // 3-D ONLY 
        elements = document.getElementsByClassName("three-d-only");
        for (let index = 0; index < elements.length; index++) {
            elements[index].hidden = (this.state.dimension === '2d') ? true : false;
        }

        // DEBUG ONLY
        elements = document.getElementsByClassName("debug-only");
        for (let index = 0; index < elements.length; index++) {
            elements[index].hidden = (this.state.debug === 'true') ? false : true;
        }

        // FULL IMG ONLY
        elements = document.getElementsByClassName("full-img-only");
        for (let index = 0; index < elements.length; index++) {
            elements[index].hidden = (this.state.full_image === 'true') ? false : true;
        }

        // NOT PYTHON 
        elements = document.getElementsByClassName("not-python");
        for (let index = 0; index < elements.length; index++) {
            elements[index].hidden = (this.state.renderer === 'python') ? true : false;
        }

        // NOT THEMED 
        elements = document.getElementsByClassName("not-themed");
        for (let index = 0; index < elements.length; index++) {
            elements[index].hidden = (this.state.theme === '1') ? true : false;
        }
    }

    render() {
        return (
            <Row className="content-mp" style={{ height: '80vh' }} onChange={this.hideElements()}>
                <Col sm={{ span: 17, offset: 1 }} mg={{ span: 17, offset: 1 }} lg={{ span: 17, offset: 1 }} xl={{ span: 17, offset: 1 }} style={{ margin: '2%', position: 'fixed' }} className="content-1-mp">
                    <Jumbotron align="center" style={{ backgroundColor: 'white', height: '80vh' }}>
                        <fractal-image ref={elem => this.nv = elem} stereo={this.state.dimension === 's3d' ? true : false} motion={this.state.motion} settings={this.getSettings()}></fractal-image>
                    </Jumbotron>
                    <Jumbotron style={{ paddingTop: 0 }}>
                        <a id="download-img" href={this.state.img_url} download></a><Button onClick={()=>this.downloadImage()}>Download Image</Button>&nbsp;&nbsp;&nbsp;
                        <a rel="noopener noreferrer" id="open-img" href={this.img_url} target="_blank"></a><Button onClick={()=>this.openImage()}>Open Image</Button>&nbsp;&nbsp;&nbsp;
                        <Button id="reset-img" onClick={()=>this.resetImage()}>Reset Image</Button>
                    </Jumbotron>
                </Col>

                <Col sm={{ span: 6, offset: 1 }} mg={{ span: 6, offset: 0 }} lg={{ span: 6, offset: 0 }} xl={{ span: 6, offset: 0 }} style={{ height: '100vh', marginLeft: 'auto', overflowY: 'scroll' }} className="content-2-mp">
                    <Jumbotron style={{ margin: '2%', paddingTop: '3%', backgroundColor: 'white' }}>
                        <h3 align='center'>Fractal Parameters</h3>
                        <Divider />
                        <Form style={{ margin: '5%' }}>
                            {/* Renderer Selection */}
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label style={{ fontWeight: '700' }}>Renderer</Form.Label><br></br>
                                    {/* <Form.Check
                                        type="checkbox"
                                        label="Tiled"
                                        name="full_image"
                                        value={this.state.full_image == 'true' ? 'false' : 'true'}
                                        onChange={this.handleChange}
                                    /> */}

                                    <Form.Check
                                        type="radio"
                                        checked={this.state.renderer === 'python'}
                                        inline
                                        label="Python"
                                        name="renderer"
                                        value="python"
                                        onChange={this.handleChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        checked={this.state.renderer === 'cpp'}
                                        inline
                                        label="C++"
                                        name="renderer"
                                        value="cpp"
                                        onChange={this.handleChange}
                                    />
                                    <Form.Check
                                        type="radio"
                                        checked={this.state.renderer === 'fpga'}
                                        inline
                                        label="FPGA/opt"
                                        name="renderer"
                                        value="fpga"
                                        onChange={this.handleChange}
                                        />
                                </Form.Group>
                            </Form.Row>

                            {/* Dimension Selection */}
                            <div className="full-img-only">
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label style={{ fontWeight: '700' }}>3-D</Form.Label><br></br>
                                        <Form.Check
                                            type="radio"
                                            checked={this.state.dimension === '2d'}
                                            inline
                                            label="2-D"
                                            name="dimension"
                                            value="2d"
                                            onChange={this.handleChange}
                                            />
                                        <Form.Check
                                            type="radio"
                                            checked={this.state.dimension === '3d'}
                                            inline
                                            label="3-D"
                                            name="dimension"
                                            value="3d"
                                            onChange={this.handleChange}
                                        />
                                        <Form.Check
                                            type="radio"
                                            checked={this.state.dimension === 's3d'}
                                            inline
                                            label="Stereo 3-D"
                                            name="dimension"
                                            value="s3d"
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                </Form.Row>
                            </div>

                            {/* Theme Selection */}
                            <div className="c-only">
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label style={{ fontWeight: '700' }}>Theme</Form.Label><br></br>
                                        <Form.Check
                                            type="radio"
                                            checked={this.state.theme === '0'}
                                            inline
                                            label="Customize"
                                            name="theme"
                                            value="0"
                                            onChange={this.handleChange}
                                        />
                                        <Form.Check
                                            type="radio"
                                            checked={this.state.theme === '1'}
                                            id="christ"
                                            inline
                                            label="Christmas"
                                            name="theme"
                                            value="1"
                                            onChange={this.handleChange}
                                            />
                                    </Form.Group>
                                </Form.Row>
                            </div>

                            {/* Color Selection */}
                            <div className="not-python not-themed">
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label style={{ fontWeight: '700' }}>Colors</Form.Label><br></br>
                                        <Form.Check
                                            type="radio"
                                            checked={this.state.color_scheme === '2'}
                                            label="Medium Gradient"
                                            name="color_scheme"
                                            value="2"
                                            onChange={this.handleChange}
                                            />
                                        <Form.Check
                                            type="radio"
                                            checked={this.state.color_scheme === '1'}
                                            label="Random"
                                            name="color_scheme"
                                            value="1"
                                            onChange={this.handleChange}
                                            />
                                        <Form.Check
                                            type="radio"
                                            checked={this.state.color_scheme === '0'}
                                            label="Gradual Gradient"
                                            name="color_scheme"
                                            value="0"
                                            onChange={this.handleChange}
                                            />
                                        <Form.Check
                                            type="radio"
                                            checked={this.state.color_scheme === '3'}
                                            label="Rainbow"
                                            name="color_scheme"
                                            value="3"
                                            onChange={this.handleChange}
                                            />
                                        <Form.Check
                                            inline
                                            type="range"
                                            min="0"
                                            max="99"
                                            label="Color Shift"
                                            name="color_shift"
                                            value={this.state.color_shift}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                </Form.Row>
                            </div>

                            {/* Texture Selection */}
                            <div className="not-themed">
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label style={{ fontWeight: '700' }}>Texture</Form.Label><br></br>
                                        <Form.Check
                                            type="checkbox"
                                            checked={this.state.darken === 'true'}
                                            label="Darken"
                                            name="darken"
                                            value={this.state.darken === 'true' ? 'false' : 'true'}
                                            onChange={this.handleChange}
                                            />
                                        <div className="c-only">
                                            <Form.Check
                                                type="checkbox"
                                                checked={this.state.smooth === 'true'}
                                                label="Smooth"
                                                name="smooth"
                                                value={this.state.smooth === 'true' ? 'false' : 'true'}
                                                onChange={this.handleChange}
                                                />
                                            <Form.Check
                                                type="checkbox"
                                                checked={this.state.string_lights === 'true'}
                                                label="StringLights"
                                                name="string_lights"
                                                value={this.state.string_lights === 'true' ? 'false' : 'true'}
                                                onChange={this.handleChange}
                                                />
                                            <Form.Check
                                                type="checkbox"
                                                checked={this.state.fanciful === 'true'}
                                                label="Fanciful"
                                                name="fanciful"
                                                value={this.state.fanciful === 'true' ? 'false' : 'true'}
                                                onChange={this.handleChange}
                                                />
                                            <Form.Check
                                                type="checkbox"
                                                checked={this.state.shadow === 'true'}
                                                label="Shadow"
                                                name="shadow"
                                                value={this.state.shadow === 'true' ? 'false' : 'true'}
                                                onChange={this.handleChange}
                                                />
                                            <Form.Check
                                                type="checkbox"
                                                checked={this.state.rounded_edges === 'true'}
                                                label="Rounded Edges"
                                                name="rounded_edges"
                                                value={this.state.rounded_edges === 'true' ? 'false' : 'true'}
                                                onChange={this.handleChange}
                                                />
                                        </div>
                                    </Form.Group>
                                </Form.Row>
                            </div>

                            {/* Edge Selection */}
                            <div className="not-themed c-only">
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label style={{ fontWeight: '700' }}>Edge</Form.Label><br></br>
                                        <Form.Check
                                            type="radio"
                                            checked={this.state.edge === '0'}
                                            inline
                                            label="Curved"
                                            name="edge"
                                            value="0"
                                            onChange={this.handleChange}
                                            />
                                        <Form.Check
                                            type="radio"
                                            checked={this.state.edge === '1'}
                                            inline
                                            label="Bumpy"
                                            name="edge"
                                            value="1"
                                            onChange={this.handleChange}
                                            />
                                        <Form.Check
                                            type="radio"
                                            checked={this.state.edge === '2'}
                                            inline
                                            label="Villi"
                                            name="edge"
                                            value="2"
                                            onChange={this.handleChange}
                                        />
                                    </Form.Group>
                                </Form.Row>
                            </div>

                            {/* Adjustment Selection */}
                            <div className="not-themed">
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label style={{ fontWeight: '700' }}>Adjustments</Form.Label><br></br>
                                        <Form.Check
                                            inline
                                            type="range"
                                            min="5"
                                            max="100"
                                            label="Depth"
                                            name="sqrt_depth"
                                            value={this.state.sqrt_depth}
                                            onChange={this.handleChange}
                                        />
                                        <div className="not-python">
                                            <div className="c-only">
                                                <Form.Check
                                                    inline
                                                    type="range"
                                                    min="-100"
                                                    max="100"
                                                    label="Morph 1"
                                                    name="var1"
                                                    value={this.state.var1}
                                                    onChange={this.handleChange}
                                                />
                                                <Form.Check
                                                    inline
                                                    type="range"
                                                    min="-100"
                                                    max="100"
                                                    label="Morph 2"
                                                    name="var2"
                                                    value={this.state.var2}
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="darken-only">
                                                <Form.Check
                                                    inline
                                                    type="range"
                                                    min="-200"
                                                    max="200"
                                                    label="Dark/Morph"
                                                    name="brighten"
                                                    value={this.state.brighten}
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="three-d-only" hidden={true}>
                                                <Form.Check
                                                    inline
                                                    type="range"
                                                    min="-100"
                                                    max="100"
                                                    label="Z Adjust"
                                                    name="eye_adjust"
                                                    value={this.state.eye_adjust}
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                        </div>
                                    </Form.Group>
                                </Form.Row>
                            </div>

                            {/* Motion Selection */}
                            <div className="full-img-only">
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label style={{ fontWeight: '700' }}>Motion</Form.Label><br></br>
                                        <Form.Check
                                            type="radio"
                                            checked={this.state.motion === 'position'}
                                            inline
                                            label="Position"
                                            name="motion"
                                            value="position"
                                            onChange={this.handleChange}
                                            />
                                        <Form.Check
                                            type="radio"
                                            checked={this.state.motion === 'velocity'}
                                            inline
                                            label="Velocity"
                                            name="motion"
                                            value="velocity"
                                            onChange={this.handleChange}
                                            />
                                        <div className="debug-only" hidden={true}>
                                            <Form.Check
                                                type="radio"
                                                checked={this.state.motion === 'acceleration'}
                                                inline
                                                label="Acceleration"
                                                name="motion"
                                                value="acceleration"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </Form.Group>
                                </Form.Row>
                            </div>
                        </Form>
                    </Jumbotron >
                </Col>
            </Row>
        )
    }
}

