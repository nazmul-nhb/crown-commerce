import Image from "next/image";

export default function Home() {
	return (
		<main>
			<h1>Welcome to Next.js</h1>
			<Image
				className="dark:invert"
				src="https://nextjs.org/icons/vercel.svg"
				alt="Vercel Logo"
				width={20}
				height={20}
			/>
		</main>
	);
}
