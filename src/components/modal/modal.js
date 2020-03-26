import React ,{useState, Children} from 'react'
import {Button,Modal} from 'react-bootstrap'



function Example(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => {setShow(false);
      props.buttonHandle();
    }
    const handleClose2 = () => {setShow(false);
    }

    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          {props.name}
        </Button>
  
        <Modal show={show} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {props.children}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              {props.button}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default Example