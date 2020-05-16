import App from "next/app";
import { StateProvider } from "./services/Store";

import "./styles/imports.scss";

const MyApp = ({ Component, pageProps }) => {
	return( 
		<StateProvider>
			<Component {...pageProps} />
		</StateProvider>
			) 
}


export default MyApp;