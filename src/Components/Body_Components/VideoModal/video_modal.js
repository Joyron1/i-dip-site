import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class VidModal extends React.Component {

    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    handleModal = () => {
        this.setState({ show: !this.state.show })
    }

    render() {
        return (
            <>
                <Button id="WatchVideo" onClick={() => this.handleModal()}> Watch a Video </Button>

                <Modal show={this.state.show}>

                    <Modal.Body><iframe width="100%" height="300px" src="https://www.youtube.com/embed/_7vML9C3PZk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleModal()}>
                            Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

}





export default VidModal;
