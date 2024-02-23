import { useState } from 'react';
import NavbarComponent from '../../features/NavbarComponent/NavbarComponent'
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import s from './List.module.css';
import Footer from '../../features/Footer/Footer';

type ListType = {
    content: number[];
}

const List: React.FC<ListType> = ({ content }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <NavbarComponent handleShow={handleShow} />
            <Container className={s.container}>
                <Stack gap={3} className={s.list}>
                    {
                        content.map((_, i) =>
                            <div
                                className={`${s.element} p-2`}
                                key={i}
                            >
                                <h2>
                                    Заголовок
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Recusandae dolorum debitis fugit nulla quam impedit repudiandae
                                    atque consequatur vero? Soluta itaque asperiores atque autem saepe iure totam pariatur odio laborum!
                                </p>
                            </div>
                        )
                    }
                </Stack>
            </Container>
            <Footer />
            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default List