import React from 'react'
import { Container } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import { Row, Col } from 'react-bootstrap'

const Header = ({
  setFidelity,
  setDataOption,
  dataOption,
  setShowAll,
  fill,
  setFill,
}) => {
  return (
    <div>
      <>
        <Container>
          <Row>
            <Col>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="secondary"
                >
                  Data Option
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item
                    onClick={() => {
                      setDataOption('newUsers')
                    }}
                  >
                    New users
                  </Dropdown.Item>

                  <Dropdown.Item
                    onClick={() => {
                      setDataOption('applications')
                    }}
                  >
                    Applications
                  </Dropdown.Item>

                  <Dropdown.Item
                    onClick={() => {
                      setDataOption('categories')
                    }}
                  >
                    Creator categories
                  </Dropdown.Item>

                  <Dropdown.Item
                    onClick={() => {
                      setDataOption('avgAppPerListing')
                    }}
                  >
                    Average applications per listing
                  </Dropdown.Item>

                  <Dropdown.Item
                    onClick={() => {
                      setDataOption('campaigns')
                    }}
                  >
                    New campaigns
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            {dataOption === 'applications' ||
            dataOption === 'newUsers' ||
            dataOption === 'avgAppPerListing' ||
            dataOption === 'campaigns' ? (
              <>
                <Col>
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-button-dark-example1"
                      variant="secondary"
                    >
                      Fidelity
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item
                        onClick={() => {
                          setFidelity('year')
                        }}
                      >
                        Years
                      </Dropdown.Item>

                      <Dropdown.Item
                        onClick={() => {
                          setFidelity('month')
                        }}
                      >
                        Months
                      </Dropdown.Item>

                      <Dropdown.Item
                        onClick={() => {
                          setFidelity('day')
                        }}
                      >
                        Days
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col>
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-button-dark-example1"
                      variant="secondary"
                    >
                      Dates
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item
                        onClick={() => {
                          setShowAll(true)
                        }}
                      >
                        Show all
                      </Dropdown.Item>

                      <Dropdown.Item
                        onClick={() => {
                          setShowAll(false)
                        }}
                      >
                        Show relevant
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col>
                  <button
                    onClick={() => setFill(!fill)}
                    type="button"
                    class={fill ? 'btn btn-secondary' : 'btn btn-outline-light'}
                  >
                    Fill
                  </button>
                </Col>
              </>
            ) : (
              <></>
            )}
          </Row>
        </Container>
      </>
    </div>
  )
}

export default Header
