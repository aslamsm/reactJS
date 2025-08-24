import Card from "./components/CardProp";

function App() {
  return (
    <div>
      {/* Heading */}
      <h3 style={{ textAlign: "center", marginTop: "20px", color: "darkred" }}>
        Cards Properties/Children Demo
      </h3>

      {/* Card Container */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        {/* User Profile Card */}
        <Card type="User Profile" imageSrc="./src/assets/man1.png">
          <h5>Sirajuddin</h5>
          <p>Frontend Developer skilled in React.js</p>
          <p>📍 Location: Mumbai, India</p>
          <p>✉️ Email: siraj@sos.com</p>
        </Card>

        {/* Gift Card */}
        <Card type="Gift Card" imageSrc="./src/assets/gift.png">
          <h6>Amazon Gift Card</h6>
          <p>Value: $100</p>
          <p>***Validity***</p>
          <p style={{ color: "red" }}>Expires: Dec 31, 2025</p>
        </Card>

        {/* Food Card */}
        <Card type="Food Card" imageSrc="./src/assets/pizza.jpg">
          <h6>Margherita Pizza</h6>
          <h6>Pizza Hut</h6>
          <p>Fresh, cheesy and delicious 🍕</p>
          <h5 style={{ fontWeight: "bold" }}>$12.99</h5>
        </Card>

        {/* Business Card */}
        <Card type="Business Card" imageSrc="./src/assets/man2.png">
          <h5>Razvi Sheikh</h5>
          <p>CEO, Toyota</p>
          <p>📍 Location: Bangalore, India</p>
          <p>✉️ Email: razvi@toyotech.com</p>
        </Card>
      </div>
    </div>
  );
}

export default App;
