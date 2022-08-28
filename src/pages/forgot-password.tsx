import {
	createStyles,
	Paper,
	Title,
	Text,
	TextInput,
	Button,
	Container,
	Group,
	Anchor,
	Center,
	Box,
} from "@mantine/core"
import { Link } from "react-router-dom"
// import { IconArrowLeft } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
	controls: {
		[theme.fn.smallerThan("xs")]: {
			flexDirection: "column-reverse",
		},
	},

	control: {
		[theme.fn.smallerThan("xs")]: {
			width: "100%",
			textAlign: "center",
		},
	},
}))

const ForgotPasswordPage = () => {
	const { classes } = useStyles()

	return (
		<Container size={460} my={30}>
			<Title sx={{ fontWeight: 900 }} align="center">
				Forgot your password?
			</Title>
			<Text color="dimmed" size="sm" align="center">
				Enter your email to get a reset link
			</Text>

			<Paper withBorder shadow="md" p={30} radius="md" mt="xl">
				<TextInput
					label="Your email"
					placeholder="user.name@middleman.com"
					required
				/>
				<Group position="apart" mt="lg" className={classes.controls}>
					<Anchor
						size="sm"
						to="/signin"
						color="dimmed"
						component={Link}
						className={classes.control}
					>
						<Center inline>
							{/* <IconArrowLeft size={12} stroke={1.5} /> */}
							<Box ml={5}>Back to signin page</Box>
						</Center>
					</Anchor>
					<Button className={classes.control}>Reset password</Button>
				</Group>
			</Paper>
		</Container>
	)
}

export default ForgotPasswordPage
