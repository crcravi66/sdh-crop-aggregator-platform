// import './App.css'
import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '~react-pages';

function App() {
  return (
    <>

      <Suspense fallback={null}>
        {useRoutes(routes)}
      </Suspense>
    </>

  );
}

// <Routes>
//   <Route path="/" element={<SignInPage />} />
//   {/* <Route path="/" element={<SplashScreen2page />} /> */}
//   <Route path="/SignIn" element={<SignInPage />} />
//   <Route path="/sign-up" element={<SignUpPage />} />
//   <Route path="/forgot-page" element={<AadharForgotPage />} />
//   <Route path="/about" element={<AadharForgotPage />} />

// </Routes>

export default App;
