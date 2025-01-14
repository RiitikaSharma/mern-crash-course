import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ColorModeProvider } from '../src/components/ui/color-mode.jsx';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<ChakraProvider value={defaultSystem}>
			<ColorModeProvider>
				<App />
			</ColorModeProvider>
		</ChakraProvider>
	</BrowserRouter>
);
