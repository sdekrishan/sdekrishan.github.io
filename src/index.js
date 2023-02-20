import React from 'react';
import App from './App'
import './index.css'
import { createRoot } from "react-dom/client";
import { ChakraProvider } from '@chakra-ui/react';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
 <ChakraProvider>
     <App />
 </ChakraProvider>
  
);