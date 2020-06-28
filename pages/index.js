import React from 'react';
 
 const Home = () => {
  return (
    <h1>
      This is my Home Page {process.browser}
    </h1>
    )

}

Home.getInitialProps = () => {

  console.log('browser', process.browser);

  return {
    test: 'testing'
  }
}

export default Home;



