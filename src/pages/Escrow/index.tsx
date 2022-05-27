import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { Col, Container, InputBox, Label, Row, Wrap } from "../../styles/styled";
import {useCallback, useEffect, useMemo, useState} from 'react';
import { isValidPubkey } from "../../utils/wallet";
import { Button, GlowButton } from "../../components/Foundation/Buttons";
import styled from "@emotion/styled";
import { useWallet } from "@solana/wallet-adapter-react";

const testPubkey = process.env.REACT_TEST_WALLET_PUBKEY;
const escrowProgramId = process.env.REACT_TEST_ESCROW_PROGRAM_ID;

const connection = new Connection("https://api.devnet.solana.com", "singleGossip");
const Escrow = () => {
  const [pubkey, setPubkey] = useState<any>(null);
  const [tokenAAmount, setTokenAAmount] = useState<number>(0);
  const [tokenBAmount, setTokenBAmount] = useState<number>(0);
  const { wallet } = useWallet();
  // console.log('secret key', Buffer.from(testPrivateKey.secretKey).swap32().toString());
  console.log('account solana ', escrowProgramId)
  const accountInfo = useCallback(async() => {
    if (testPubkey && isValidPubkey(testPubkey)) {
      const acct = await connection.getAccountInfo(new PublicKey(testPubkey));
      return acct
    }
    return null;
  }, [connection]);
  
    const testPrivateKey = useMemo(() =>  pubkey && new Keypair(pubkey), [pubkey]);// Keypair.generate();

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
    <Container style={{background: 'var(--card-color)'}}>
      <Wrap>
        <Wrap>
          <InputRow>
            <Label> Private Key (byte array without the `[]`) </Label>
            <InputBox type="text" haserror={isValidPrivateKey(testPrivateKey?.secretKey) === false} value={ testPrivateKey?.secretKey}/>
            <div className="input-field" style={{height: '8px', paddingLeft: '8px'}}>
              {!validPassword && 
              <p style={{ fontSize: '12px', color: isValidPrivateKey(testPrivateKey?.publicKey) ? 'transparent' : 'var(--error-text)'}}>
                Hint: Use the Uint8Array `secretKey` of your wallet Keypair 
              </p>}
            </div>
          </InputRow>
          <InputRow>
            <Label> Escrow Program ID </Label>
            <InputBox  disabled={!escrowProgramId || escrowProgramId === undefined} type="text" value={escrowProgramId}/>
          </InputRow>
          <InputRow>
            <Label> Token A Account Pubkey</Label>
            <InputBox type="text" />
          </InputRow>
          <InputRow>
            <Label> Token A Amount </Label>
            <InputBox type="number" value={tokenAAmount} onChange={(e) => e.target.value && setTokenAAmount(Number(e.target.value)) }/>
          </InputRow>
          <InputRow>
            <Label> Token B Account Pubkey </Label>
            <InputBox  type="text" />
          </InputRow>
          <InputRow>
            <Label> Token B Amount </Label>
            <InputBox  type="number" value={tokenBAmount} onChange={(e) => e.target.value && setTokenBAmount(Number(e.target.value))}/>
          </InputRow>
        </Wrap>
        <Col justify="space-between">
          <Button color='#85d2a982'>
          <p style={{fontSize: '20px', color: 'white', fontWeight: '500'}}>
            Reset
            </p>
          </Button>
          <GlowButton>
            <p style={{fontSize: '20px', color: 'white', fontWeight: '500'}}>
              Submit to Escrow
            </p>
          </GlowButton>
        </Col>
      </Wrap>      
    </Container>
  )
}

const InputRow = styled(Row)`
  text-align: start;
`;

export default Escrow;