import React, { useState } from "react";
import { connect } from "react-redux";
import { getUsers, getFeedback, levelsNotRendered, postCourse } from "../../store/actions.js";
import { If, Then } from "../if";
import { Form, Button,Spinner } from "react-bootstrap";
import './adminTool.css'

const ManageCourse = props => {

    const [questions, setQuestions] = useState([])
    const [course, setcourse] = useState('')
    const [overview, setoverview] = useState('')
    const [question, setquestion] = useState('')
    const [image,setImage] =useState('')
    const [video,setVideo] =useState('')

    const [answer, setanswer] = useState({ "answer": 'true' })

    const [pendding, setPendding] = useState(false)


    const addQuestion = (e) => {
        let qa = {
            "question": question.question,
            "answer": answer.answer
        }
        setQuestions([...questions, qa])
        console.log('questions :', questions);

    }

    const change = (e) => {
        if (e.target.name === 'courseName') setcourse({ [e.target.name]: e.target.value })
        if (e.target.name === 'overview') setoverview({ [e.target.name]: e.target.value })
        if (e.target.name === 'image') setImage({ [e.target.name]: e.target.value })
        if (e.target.name === 'video') setVideo({ [e.target.name]: e.target.value })
        if (e.target.name === 'question') setquestion({ [e.target.name]: e.target.value })
        if (e.target.name === 'answer') setanswer({ [e.target.name]: e.target.value })
       
    }

    const submitHand = (e) => {
        e.preventDefault()
        let data = {
            "courseName": course.courseName,
            "overview": overview.overview,
            "image": image.image,
            "video": video.video,
            "questions": questions
        }
        console.log('data :', data);
        setPendding(true)
        props.postCourse(data).then(()=>{
            setPendding(false)
        })
    }


    return (
        <section className="manage">
            <h3>Create new course</h3>
            <Form onSubmit={submitHand}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control onChange={change} name='courseName' placeholder="courseName" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control as='textarea' onChange={change} name='overview' type="text" placeholder="overview" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control onChange={change} name='image' type="text" placeholder="course image url" />
                </Form.Group>
                
                <Form.Group controlId="formBasicEmail">
                    <Form.Control onChange={change} name='video' type="text" placeholder="course youtube video url" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                <Form.Label>Question - 1</Form.Label>
                    <Form.Control onChange={change} name='question' type="text" placeholder="type question" />
                </Form.Group>

                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Question - 1 answer</Form.Label>
                    <Form.Control onChange={change} name="answer" as="select" custom>
                        <option value="true">True</option>
                        <option value="false">False</option>

                    </Form.Control>
                </Form.Group>

                {questions.map((item, idx) => {

                    return (
                        <>
                            <hr className='hr'/>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>{`question - ${idx + 2}`}</Form.Label>
                                <Form.Control onChange={change} name='question' type="text"  placeholder={`type question`} />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.SelectCustom">
                                <Form.Label>{`Question - ${idx + 2} answer`}</Form.Label>
                                <Form.Control onChange={change} name="answer" as="select" custom>
                                    <option value="true">True</option>
                                    <option value="false">False</option>

                                </Form.Control>
                            </Form.Group>
                        </>
                    )
                })}


                
                 <Button variant="primary" onClick={addQuestion}>Add question</Button>
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

const mapDispatchToProps = { getUsers, getFeedback, postCourse };

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);
