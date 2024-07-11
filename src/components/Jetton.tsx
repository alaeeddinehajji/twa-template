import { Address } from "ton-core";
import { useJettonContract } from "../hooks/useJettonContract";
import { useTonConnect } from "../hooks/useTonConnect";
import {
  Card,
  FlexBoxCol,
  FlexBoxRow,
  Button,
  Ellipsis,
} from "./styled/styled";

export function Jetton() {
  const { connected, wallet } = useTonConnect()
  const { jettonWalletAddress, balance, mint } = useJettonContract()

  return (
    <Card title="Jetton">
      <FlexBoxCol>
        <h3>Testing Example for TON Payment</h3>

        <b>Connect to the your Wallet and you can see your Balance and Wallet Address and Buy Subscription !</b>
        <FlexBoxRow>
          Wallet
          <Ellipsis>{wallet ? Address.parse(wallet as string).toString() : "Loading..."}</Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow>
          Jetton Wallet
          <Ellipsis>{jettonWalletAddress ? jettonWalletAddress : "Loading..."}</Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow>
          Balance
          <div>{balance ?? "Loading..."}</div>
        </FlexBoxRow>
        <Button
          disabled={!connected} >
          Buy Subscription 1 TON Lifetime
        </Button>
        <Button
          disabled={!connected} >
          Buy Subscription 0.4 TON / Month
        </Button>
      </FlexBoxCol>
    </Card>
  );
}
