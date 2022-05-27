import { WalletAdapterNetwork, WalletError } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider as ReactUIWalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
    // MathWalletAdapter,
    PhantomWalletAdapter,
    // SolflareWalletAdapter,
    // Coin98WalletAdapter,
    // SolletExtensionWalletAdapter,
    // SolletWalletAdapter,
    // TorusWalletAdapter,
    // LedgerWalletAdapter,
} from '@solana/wallet-adapter-phantom';
import {  FC, useCallback, useMemo } from 'react';
import { notify } from '../utils/notification';
// import { AutoConnectProvider, useAutoConnect } from './AutoConnectProvider';
// import { notify } from "../utils/notifications";
// import { WalletProvider } from './WalletProvider';
// import JupiterApiProvider from './JupiterApiProvider';

interface WalletContextProps {
  endpoint: string;

}

const WalletContextProvider: FC<WalletContextProps> = (props, {children }) => {
    const { endpoint } = props;
    const endpointMemo = useMemo(() => endpoint, [endpoint]);
    const network = useMemo(() => endpointMemo, []);
    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter({ network }),
            // new MathWalletAdapter({ network }),
            // new SolflareWalletAdapter( ),
            // new Coin98WalletAdapter({ network }),
            // new SolletWalletAdapter( ),
            // new SolletExtensionWalletAdapter(),
            // new TorusWalletAdapter(),
            // new LedgerWalletAdapter(),
            // new SlopeWalletAdapter(),
        ],
        [network]
    );

    const onError = useCallback(
        (error: WalletError) => {
            notify({ type: 'error', message: error.message ? `${error.name}: ${error.message}` : error.name });
            console.error('wallet error in context provider\n', error);
        },
        []
    );

    return (
        <ConnectionProvider endpoint={endpointMemo}>
          <WalletProvider wallets={wallets} onError={onError} autoConnect={false}>

            {/* <JupiterApiProvider> */}
                <ReactUIWalletModalProvider>{children}</ReactUIWalletModalProvider>
            {/* </JupiterApiProvider> */}
          </WalletProvider>
        </ConnectionProvider>
    );
};

export const ContextProvider = (props, children) => {
    return (
        // <AutoConnectProvider>
            <WalletContextProvider {...props}>{children}</WalletContextProvider>
        // </AutoConnectProvider>
    );
};

export default ContextProvider;
