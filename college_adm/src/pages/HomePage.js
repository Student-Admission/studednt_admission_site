import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './App.css';

const HomePage = () => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const getUser = async () => {
  //   try {
  //     const response = await axios.post(
  //       'http://localhost:5001/api/v1/auth/getUserData',
  //       {},
  //       {
  //         headers: {
  //           'Authorization': `Bearer ${localStorage.getItem('token')}`,
  //         }
  //       }
  //     );
  //     console.log(response.data);
  //     setLoading(false);
  //   } catch (err) {
  //     setError('Failed to fetch user data');
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getUser();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <div className='about-page'>
      <header className='height-75'>
        <Container className='h-100 d-flex flex-column'>
          <Navbar expand="lg" className="navbar-dark">
            <Navbar.Brand>
              <Link to="/" className='navbar-brand d-flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" className="bi bi-backpack-fill" viewBox="0 0 16 16">
                  <path d="M5 13v-3h4v.5a.5.5 0 0 0 1 0V10h1v3z"/>
                  <path d="M6 2v.341C3.67 3.165 2 5.388 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8a6.002 6.002 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6.04 6.04 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5"/>
                </svg>
                <span className='mx-2 text-light lh-1 fw-semibold'>
                  React
                  <br></br>
                  University
                  <br></br>
                  London
                </span>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto justify-content-end w-100'>
                <Nav.Link href='/' className='text-uppercase'>Home</Nav.Link>
                <Nav.Link href='/courses' className='text-uppercase'>Our courses</Nav.Link>
                <Nav.Link href='/about' className='text-uppercase'>About us</Nav.Link>
                <Nav.Link href='/blog' className='text-uppercase'>Blog</Nav.Link>
                <Nav.Link href='/contact' className='text-uppercase'>Get in touch</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <div className='h-100 d-flex flex-column align-items-center justify-content-center text-light text-center'>
            <h1 className='fw-semibold'>React University London</h1>
            <p className='w-75 mb-5'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error recusandae harum ullam repellat cum? Nisi unde, incidunt natus ut ratione dolore quasi at dolores molestias.
            </p>
          </div>
        </Container>
      </header>
    </div>
  );
};

export default HomePage;
