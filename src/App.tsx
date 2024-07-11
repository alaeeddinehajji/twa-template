import "./App.css";
import { Jetton } from "./components/Jetton";
import styled from "styled-components";
import {
  Button, Card,
  Ellipsis, FlexBoxCol, FlexBoxRow
} from "./components/styled/styled";
import { CHAIN, TonConnectButton } from "@tonconnect/ui-react";
import { useTonConnect } from "./hooks/useTonConnect";
import "@twa-dev/sdk"

const StyledApp = styled.div`
  background-color: #e8e8e8;
  color: black;

  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: white;
  }
  min-height: 100vh;
  padding: 20px 20px;
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

function App() {
  const { network } = useTonConnect()

  const openExternalLink = () => {
    // Replace 'https://example.com' with your desired URL
    window.open('https://t.me/$SGNRfAoSgVAuAQAAD1B2tyQBcTg', '_blank');
  };


  return (
    <StyledApp>
      <AppContainer>
        <FlexBoxCol>
          <FlexBoxRow>
            <TonConnectButton />
            <Button>
              {network
                ? network === CHAIN.MAINNET
                  ? "Real Network"
                  : "testing Network"
                : "testing Network Or Real Network"}
            </Button>
          </FlexBoxRow>
          <Jetton />
          <Card title="Jetton">
            <FlexBoxCol>
              <h3>Telegram Stars</h3>
              <b>the user will buy stars to pay the bot, later we can withdraw Telegram Stars using the TON blockchain</b>
              <Button onClick={openExternalLink}>
                Pay 1 Star for this month
              </Button>
            </FlexBoxCol>
          </Card>
        </FlexBoxCol>
      </AppContainer>
    </StyledApp>
  );
}

export default App;
