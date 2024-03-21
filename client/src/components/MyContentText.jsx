import React, { Fragment } from 'react'
import { Container, Row } from 'react-bootstrap'

const MyContentText = ({ title, children }) => {
  return (
    <div className="main-back">
        <Container>
            <Row>
                <div className="page">
                    {
                        title && (
                            <Fragment>
                                <h1 className='page-title'>{title}</h1>
                                <hr />
                            </Fragment>
                        )
                    }
                    {children}
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default MyContentText