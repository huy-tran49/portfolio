import { Button, Form } from "react-bootstrap"

const Contact = () => {
    return (
        <>
            <div className="mt-64">
                <h2 className='contact text-5xl font-bold' id='contact'>Contact</h2>
                <div className="contact-form flex grow mt-10 justify-center">
                    <Form className='w-1/2' action="https://getform.io/f/437fc3ae-d040-4dc1-8553-dd14b5616918" method="POST">
                        <Form.Label className="text-2xl font-bold">Name</Form.Label>
                        <Form.Control  type="text" name="name"/>
                        <br />
                        <Form.Label className="text-2xl font-bold">Email</Form.Label>
                        <Form.Control type="email" name="email"/>
                        <br />
                        <Form.Label className="text-2xl font-bold">Message</Form.Label>
                        <Form.Control as="textarea" name="message" rows={5}/>
                        <br />
                        <Button className="outline outline-3">
                        <input type="submit" />
                        </Button>
                    </Form>
                </div>

            </div>
        </>
    )
}

export default Contact