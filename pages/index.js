import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import getTable from "../libs/airtable";
import DappRow from "../components/DappRow";
import { motion } from "framer-motion";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
		},
	},
};

const listItem = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
};

export default function Home({ dapps }) {
	return (
		<div className="background-gradient bg-no-repeat ">
			<main className="max-w-screen-md px-4 md:px-0 flex flex-col mx-auto">
				<div className="xl:mt-32 mt-12 md:mt-20">
					<h1 className="text-primary font-semibold text-4xl ">kcc.ninja</h1>
					<p className="text-white/90	">List of dApps of the KCC ecosytem</p>
				</div>
				<motion.div
					variants={container}
					className="flex-col space-y-2 mt-6 rounded-2xl"
					initial="hidden"
					animate="show"
				>
					{dapps.map(({ id, fields: dapp }) => (
						<DappRow variants={listItem} key={id} dapp={dapp} />
					))}
				</motion.div>
			</main>
			<footer className="flex mt-30 py-4 text-white/50 space-x-4 items-center justify-center">
				<a href="https://twitter.com/matteogauthier_">Twitter</a>
			</footer>
		</div>
	);
}

// getstaticprops
export async function getStaticProps() {
	const { records } = await getTable();
	const dapps = records;
	return {
		props: {
			dapps,
		},
	};
}
