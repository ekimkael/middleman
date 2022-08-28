import React, { Fragment } from "react"
import { MantineProvider } from "@mantine/core"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// pages
import Homepage from "./pages/homepage"
import SigninPage from "./pages/signin"
import ForgotPasswordPage from "./pages/forgot-password"

// Create a client
const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider withGlobalStyles withNormalizeCSS>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/signin" element={<SigninPage />} />
						<Route path="/signup" element={<Fragment />} />
						<Route path="/forgot-password" element={<ForgotPasswordPage />} />
					</Routes>
				</BrowserRouter>
			</MantineProvider>

			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default App
