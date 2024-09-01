import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pricingpage.css";

// import axiosInstance from "../../services/AxiosInstance";
// import { useNavigate } from "react-router-dom";

const planL = [
  {
    planId: 2,
    planName: "Day plan",
    price: "150₹+GST",
    originalPrice: "299₹+GST",
    features: [
      "Unlimited queries",
      "Unlimited datasets",
      "Auto connection of multiple datasets",
      "Max size of one upload 40mb",
      "Max of 10 sheets per upload",
      "Unlimited table, charts or response",
    ],
  },
  {
    planId: 3,
    planName: "Weekly plan",
    price: "699₹+GST",
    originalPrice: "1199₹+GST",
    features: [
      "Unlimited queries",
      "Unlimited datasets",
      "Auto connection of multiple datasets",
      "Max size of one upload 40mb",
      "Max of 10 sheets per upload",
      "Unlimited table, charts or response",
    ],
  },
  {
    planId: 4,
    planName: "Monthly plan",
    price: "1699₹+GST",
    originalPrice: "2999₹+GST",
    features: [
      "Unlimited queries",
      "Unlimited datasets",
      "Auto connection of multiple datasets",
      "Max size of one upload 40mb",
      "Max of 10 sheets per upload",
      "Unlimited table, charts or response",
    ],
  },
];

const PricingPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [planList, setPlanList] = useState(planL);
  const { isDarkMode } = false;
  // const navigate = useNavigate();

  // const handleGetStarted = async (planId) => {
  //   try {
  //     const response = await axiosInstance.get(`doc-genie/checkout?planId=${planId}`, {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //     const url = response?.data?.sessionId;
  //     const primeUser = response?.data?.isPrime;
  //     if(primeUser){
  //       navigate('/data-geniee');
  //     }
  //     if (url) {
  //       window.location.href = url;
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     if (
  //       error.response &&
  //       error.response.data.msg === "Invalid session" &&
  //       error.response.status === 401
  //     ) {
  //       navigate("/");
  //     }
  //   }
  // };

  return (
    <div className={`pricing-page ${isDarkMode ? "dark-mode" : ""}`}>
      <Container className="pt-5">
        <h2 className="text-center mb-4" style={{ color: "#2287ff" }}>
          Pricing Plans
        </h2>
        <p className="text-center mb-4">Choose What Fits You</p>
        <Row className="justify-content-center">
          {planList?.map((plan, index) => (
            <Col key={index} xs={12} md={3} className="mb-4">
              <Card
                className={`h-100 d-flex flex-column pricing-card ${
                  hoveredCard === index ? "shadow-lg" : ""
                } ${isDarkMode ? "dark-mode" : ""}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transition: "all 0.3s ease-in-out",
                  transform: hoveredCard === index ? "scale(1.05)" : "scale(1)",
                  backgroundColor:
                    hoveredCard === index
                      ? "#8a2be2"
                      : isDarkMode
                      ? "#333"
                      : "white",
                  color:
                    hoveredCard === index || isDarkMode ? "white" : "black",
                }}
              >
                <Card.Body className="d-flex flex-column text-center">
                  <Card.Title className="mb-3">{plan?.planName}</Card.Title>
                  <Card.Text
                    style={{
                      color:
                        hoveredCard === index || isDarkMode ? "white" : "black",
                      textDecoration: "line-through",
                    }}
                  >
                    {plan?.originalPrice}
                  </Card.Text>
                  <h2 className="mb-3">{plan.price}</h2>
                  <p
                    style={{
                      color:
                        hoveredCard === index || isDarkMode ? "white" : "black",
                    }}
                  >
                    Free forever
                  </p>
                  <div className="pricing-benefits mb-4 text-left">
                    {plan?.features.map((benefit, benefitIndex) => (
                      <p
                        key={benefitIndex}
                        className="mb-2 text-left flex items-start"
                        style={{
                          color:
                            hoveredCard === index || isDarkMode
                              ? "white"
                              : "black",
                        }}
                      >
                        <span className="mr-2">✓ </span>
                        <span>{benefit}</span>
                      </p>
                    ))}
                  </div>
                  <Button
                    variant={
                      hoveredCard === index || isDarkMode ? "light" : "dark"
                    }
                    className="w-100"
                  >
                    Subscribe
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PricingPage;
