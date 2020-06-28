import Router from 'next/router';
 
 const Home = () => {
  return (
    <h1>
      This is my Home Page {process.browser}
    </h1>
    )

}

Home.getInitialProps = (context) => {

  const country = context.query.country || 'us';


  process.browser ?
  Router.replace('/[country]', `${country}`):
  context.res.writeHeader(302, {Location: `/${country}`});

  // Tell server we are finished
  context.res.end();

  // return {
  //   test: 'testing'
  // }
}

export default Home;



