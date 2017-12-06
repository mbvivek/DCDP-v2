import { Connect, SimpleSigner, MNID } from "uport-connect";

uport = new Connect("Drug Counterfeit Detection Portal", {
  clientId: "2of76V3H9JWoW6YdXpaLeTpoaEFGRwcorLa",
  network: "rinkeby",
  signer: SimpleSigner("947483440f13e79e7149022777cd3be31e2fe01d27fd60ff33bc2e7308e68d9b")
});

web3 = uport.getWeb3();
