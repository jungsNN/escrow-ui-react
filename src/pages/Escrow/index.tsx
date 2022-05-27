import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { Col, Container, InputBox, Label, Row, Wrap } from "../../styles/styled";
import {useCallback, useEffect, useMemo, useState} from 'react';
import { isValidPubkey } from "../../utils/wallet";
import { Button, GlowButton } from "../../components/Foundation/Buttons";

const testPubkey = process.env.TEST_WALLET_PUBKEY;

const Escrow = () => {
  const connection = new Connection("https://api.devnet.solana.com", "singleGossip");
  const [pubkey, setPubkey] = useState<any>(null);
  const [tokenAAmount, setTokenAAmount] = useState<number>(0);
  const [tokenBAmount, setTokenBAmount] = useState<number>(0);
  // console.log('secret key', Buffer.from(testPrivateKey.secretKey).swap32().toString());
  const accountInfo = useCallback(async() => {
    if (testPubkey && isValidPubkey(testPubkey)) {

      const acct = await connection.getAccountInfo(new PublicKey(testPubkey));
      // console.log('account solana ', acct)
      return acct
    }
    return null;
  }, [connection]);

    const testPrivateKey = useMemo(() =>  new Keypair(pubkey), [pubkey]);// Keypair.generate();

    useEffect(() => {
      accountInfo()
        .then((res) => setPubkey(res));
    }, []);
    
    const isValidPrivateKey = (privateKey?: Uint8Array | any) => {
      const isType = privateKey instanceof Uint8Array
      // const testerKey = Keypair.fromSecretKey(privateKey);
      
      if (!privateKey || (!isType || privateKey.byteLength !== 64)) {
        return false;
      }
      console.log('private key length ', privateKey.byteLength);
      return true;
    }
    

    const validPassword = useMemo(() => isValidPrivateKey(testPrivateKey?.secretKey), [testPrivateKey?.secretKey])


  return (
    <Container>
      <Wrap>
        <Wrap>
          <Row>
            <Label> Private Key (byte array without the `[]`) </Label>
            <InputBox type="password" hasError={isValidPrivateKey(testPrivateKey?.secretKey) === false} value={ testPrivateKey?.secretKey}/>
            <div style={{height: '8px', paddingLeft: '8px'}}>
              {!validPassword && <p style={{lineHeight: '1.75em', fontSize: '12px', fontFamily: 'var(--font-family-montserrat-regular)', color: isValidPrivateKey(testPrivateKey?.publicKey) ? 'transparent' : 'red'}}>Hint: Use the Uint8Array `secretKey` of your wallet Keypair </p>}
            </div>
          </Row>
          <Row>
            <Label> Escrow Program ID </Label>
            <InputBox  disabled type="text" value={process.env.REACT_TEST_ESCROW_PROGRAM_ID}/>
          </Row>
          <Row>
            <Label> Token A Account Pubkey</Label>
            <InputBox type="text" />
          </Row>
          <Row>
            <Label> Token A Amount </Label>
            <InputBox type="number" value={tokenAAmount} onChange={(e) => e.target.value && setTokenAAmount(Number(e.target.value)) }/>
          </Row>
          <Row>
            <Label> Token B Account Pubkey </Label>
            <InputBox  type="text" />
          </Row>
          <Row>
            <Label> Token B Amount </Label>
            <InputBox  type="number" value={tokenBAmount} onChange={(e) => e.target.value && setTokenBAmount(Number(e.target.value))}/>
          </Row>
          </Wrap>
        <Col justify="space-between">
          <Button>
            Reset
          </Button>
          <GlowButton>
            Init Escrow
          </GlowButton>
        </Col>
      </Wrap>      
    </Container>
  )
}


export default Escrow;