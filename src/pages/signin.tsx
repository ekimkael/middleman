import {
	TextInput,
	Checkbox,
	Anchor,
	Paper,
	Title,
	Text,
	Container,
	Group,
	Button,
} from "@mantine/core"
import { Link } from "react-router-dom"

const SigninPage = () => {
	return (
		<Container size={460} my={40}>
			<Title align="center" sx={(theme) => ({ fontWeight: 900 })}>
				Welcome back!
			</Title>
			<Text color="dimmed" size="sm" align="center" mt={5}>
				Connect to your account and make that transaction
			</Text>

			<Paper withBorder shadow="md" p={30} mt={30} radius="md">
				<TextInput
					required
					label="Email"
					placeholder="username@middleman.com"
				/>
				<TextInput
					required
					type="password"
					label="Password"
					placeholder="Your password"
				/>

				<Group position="apart" mt="md">
					<Checkbox label="Remember me" />
					<Anchor component={Link} to="/forgot-password" size="sm">
						Forgot password?
					</Anchor>
				</Group>
				<Button fullWidth mt="xl">
					Sign in
				</Button>
			</Paper>

			<Text color="dimmed" size="sm" align="center" mt={5}>
				{"Do not have an account yet? "}
				<Anchor component={Link} to="/signup" size="sm">
					Create account
				</Anchor>
			</Text>
		</Container>
	)
}

export default SigninPage
