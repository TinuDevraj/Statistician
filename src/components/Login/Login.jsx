import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import AuthForm from "../formController/AuthForm";
// import axiosInstance from "../../services/AxiosInstance";
// import { useUserContext } from "../../helpers/UserContext";
// import SessionModal from "../SessionModal/SessionModal";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isInvalid, setIsInvalid] = useState(false);
  // const { userData, setUserData } = useUserContext();
  // const navigate = useNavigate();
  

  const fields = [
    {
      label: "Email Address",
      type: "email",
      placeholder: "Enter Email Address",
      name: "email",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Enter Your Password",
      name: "password",
    },
  ];

  // const handleSubmit = async (e) => {
  //   e?.preventDefault();

    // try {
    //   // API call to authenticate user
    //   const response = await axiosInstance.post("doc-genie/login", formData);
    //   console.log(response.data);

  //     if (response.status === 200) {
  //       const getUser = await axiosInstance.get("doc-genie/user-info");

  //       setUserData(getUser.data);

  //       if (!getUser?.data?.verifiedUser) {
  //         navigate("/confirm-mail", { state: { userMail: formData.email } });
  //       } else if (getUser.data.primeUser) {
  //         navigate("/data-geniee");
  //       } else {
  //         navigate("/auth/welcome");
  //       }
  //     }
  //   } catch (error) {
  //     if (error.response && error.response.status === 429) {
  //       setShowSessionModal(true);
  //     } else {
  //       setIsInvalid(true);
  //     }
  //   }
  // };

  // const handleContinue = async () => {
  //   try {
  //     if(formData.email){
  //       const alreadyLogin = await axiosInstance.delete(`doc-genie/delete-session?mail=${formData.email}`);
  //     if (alreadyLogin?.data === "success") {
  //       handleSubmit();
  //     }
  //     }
  //   } catch (error) {
  //     // Handle any errors
  //     console.error("Error in forced login:", error);
  //   }
  //   setShowSessionModal(false);
  // };

  return (
    <Container fluid className="login-container">
      <Row className="header">
        <Col>
          <div className="product-name">G GENIEEPRO</div>
        </Col>
      </Row>
      <Row className="main-content pl-5">
        <Col md={6} lg={4} xs={12} className="welcome-text">
          <h1 style={{color:"#2b8eff"}}>Welcome Back!</h1>
          <p>We're Glad to have you back</p>
        </Col>
        <Col md={6} className="form-container">
          <AuthForm
            fields={fields}
            buttonText="Login"
            // onSubmit={handleSubmit}
            // setFormData={setFormData}
            // formData={formData}
            // isInvalid={isInvalid}
          />
        </Col>
      </Row>
      <Row className="footer">
        <Col>
          <p>
            New Here?{" "}
            {/*<Link to="/auth/signup" className="create-account-link">*/}
              Create An Account
            
          </p>
        </Col>
      </Row>
      {/*<SessionModal
        show={showSessionModal}
        onHide={() => setShowSessionModal(false)}
        onContinue={handleContinue}
      />*/}
    </Container>
  );
};

export default Login;