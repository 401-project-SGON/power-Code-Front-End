import React, {  useState } from "react";
import { connect } from "react-redux";
import { getUsers, getFeedback, postSubject } from "../../store/actions.js";
import { If, Then } from "../if";
import { Form, Button ,Spinner} from "react-bootstrap";

const AddSubject = props => {

    const [subject, setsubject] = useState('')
    const [example, setexample] = useState('')
    const [explain, setexplain] = useState('')
    const [level, setlevel] = useState('')

    const [pendding, setPendding] = useState(false)


    const change = (e) => {
        if (e.target.name === 'subject') setsubject({ [e.target.name]: e.target.value })
        if (e.target.name === 'example') setexample({ [e.target.name]: e.target.value })
        if (e.target.name === 'explain') setexplain({ [e.target.name]: e.target.value })
        if (e.target.name === 'level') setlevel({ [e.target.name]: e.target.value })
        
    }

    const submitHand = (e) => {
        e.preventDefault()
        let data = {
            "subject": subject.subject,
            "example": example.example,
            "explain": explain.explain,
            "level": level.level
        }
        console.log('data :', data);
        setPendding(true)
        props.postSubject(data).then(()=>{
            setPendding(false)
        })
    }


    return (
        <section className="manage">
            <h3>Create new subject</h3>

            <Form onSubmit={submitHand}>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control onChange={change} name='subject' placeholder="type subject name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control as='textarea' onChange={change} name='example' placeholder="add example" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control as='textarea' onChange={change} name='explain' placeholder="add explain" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control onChange={change} name='level' placeholder="type exact level name" />
                    <Form.Text className="text-muted">
                        The level name should be unique in all courses.
                    </Form.Text>
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <If condition={pendding}>
                    <Then>
                        <Spinner animation="border" />
                    </Then>
                </If>
            </Form>



        </section>
    );
};

const mapStateToProps = state => ({
    reducer: state.reducer
});

const mapDispatchToProps = { getUsers, getFeedback, postSubject };

export default connect(mapStateToProps, mapDispatchToProps)(AddSubject);
