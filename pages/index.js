// When user lands on this page
// They should be redirected  to /[country]
// We need two different strategies
// based on whether we are in
// browser or on the server


import Router from 'next/router';
import cookies from 'nookies';

 const Home = () => {
  return (
    <h1>
      This is my Home Page {process.browser}
    </h1>
    )

}

Home.getInitialProps = (context) => {

  const {defaultCountry} = cookies.get(context);
  // if no default country is obtained from browsser first check cookies 
  // if there were no cookies, only then falls back to us
  const country = context.query.country || defaultCountry || "us"

  // if not default country is obtained from browser fall back to us
  // const country = context.query.country || 'us';

  // Check to se whether we are in browser
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



