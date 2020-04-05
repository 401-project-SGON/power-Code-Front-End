import React, {  useState } from "react";
import { connect } from "react-redux";
import { getUsers, getFeedback, postLevel } from "../../store/actions.js";
import { If, Then } from "../if";
import { Form, Button ,Spinner} from "react-bootstrap";

const AddLevel = props => {

    const [level, setLevel] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [course, setCourse] = useState('')

    const [pendding, setPendding] = useState(false)



    const change = (e) => {
        if (e.target.name === 'levelName') setLevel({ [e.target.name]: e.target.value })
        if (e.target.name === 'difficulty') setDifficulty({ [e.target.name]: e.target.value })
        if (e.target.name === 'course') setCourse({ [e.target.name]: e.target.value })
      
    }

    const submitHand = (e) => {
        e.preventDefault()
        let data = {
            "levelName": level.levelName,
            "difficulty": difficulty.difficulty,
            "course": course.course
        }
        console.log('data :', data);
        setPendding(true)
        props.postLevel(data).then(()=>{
            setPendding(false)
        })
    }


    return (
        <section className="manage">
            <Form onSubmit={submitHand}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control onChange={change} name='levelName' placeholder="add level name" />
                </Form.Group>
                
                <Form.Group controlId="formBasicRangeCustom">
                    <Form.Label>Difficulty</Form.Label>
                    <Form.Control min='1' max='5' onChange={change} name='difficulty' type="range" custom />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control onChange={change} name='course' type="text" placeholder="type exact course name" />
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

const mapDispatchToProps = { getUsers, getFeedback, postLevel };

export default connect(mapStateToProps, mapDispatchToProps)(AddLevel);
