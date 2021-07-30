import { useState } from "react";
import { styled } from "./stitches.config";

function App() {
  const [showGif, setShowGif] = useState(false);

  return (
    <main>
      <h1>Highlight Demo</h1>
      <h2>
        A create-react-app using <code>@stitches/react</code>
      </h2>
      <Container>
        <Button>A fancy button</Button>
        <Button className="custom-class">A fancy button</Button>
        <ButtonWithPseudoElement>Pseudo Element</ButtonWithPseudoElement>
      </Container>
      <Container>
        <Button
          onClick={() => {
            setShowGif((previousValue) => !previousValue);
          }}
        >
          Suprise me!
        </Button>
      </Container>
      {showGif && (
        <div>
          <img
            src="https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif"
            alt=""
          />
        </div>
      )}
    </main>
  );
}

export default App;

const Container = styled("div", {
  display: "flex",
  gap: "12px",
  marginBottom: "36px",
});

const Button = styled("button", {
  backgroundColor: "$primaryBrand",
  color: "white",
  borderRadius: "9999px",
  border: 0,
  fontSize: "13px",
  padding: "10px 15px",
  "&:hover": {
    backgroundColor: "lightgray",
  },
  "&.custom-class": {
    boxShadow: "0 0 0 3px blueviolet",
  },
});

const ButtonWithPseudoElement = styled(Button, {
  position: "relative",

  "&::before": {
    content: `''`,
    display: "block",
    backgroundImage: "linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)",
    position: "absolute",
    top: "-3px",
    left: "-3px",
    width: "calc(100% + 6px)",
    height: "calc(100% + 6px)",
    borderRadius: "inherit",
    zIndex: -1,
  },
});
