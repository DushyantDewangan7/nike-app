const LoginPage = ({ switchContainers }) => {
    return (
      <div className="container white-container">
        <form action="#">
          {/* ... (your existing login page content) */}
          <button className="submit" onClick={switchContainers}>
            Sign Up
          </button>
        </form>
        <div className="form-container sign-up container"></div>
      </div>
    );
  };
  
  export default LoginPage;