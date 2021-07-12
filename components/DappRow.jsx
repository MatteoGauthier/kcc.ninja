import React from "react";
import ExternalLinkIcon from "@heroicons/react/outline/ExternalLinkIcon";
import TwitterIcon from "./svg/TwitterIcon";
import IconLayer from "./svg/IconLayer";
import { motion } from "framer-motion";
import { createUrl, getDappsTags } from "../libs/utils";
import { NextSeo } from "next-seo";

function DappRow({ dapp, variants }) {
	return (
		<>
			<NextSeo
				title={"kcc.ninja - Curated list of Kucoin Community Chain dApps"}
				openGraph={{
					url: "https://kcc.ninja",
					title: "kcc.ninja - Curated list of Kucoin Community Chain dApps",
					description: "Looking for a DEX, a swaping platform on the Kucoin Community Chain ? Find out KCC dApps of your need :D",
					images: [
						{
							url: "https://www.example.ie/og-image-01.jpg",
							width: 800,
							height: 600,
							alt: "Og Image Alt",
						},
						{
							url: "https://www.example.ie/og-image-02.jpg",
							width: 900,
							height: 800,
							alt: "Og Image Alt Second",
						},
						{ url: "https://www.example.ie/og-image-03.jpg" },
						{ url: "https://www.example.ie/og-image-04.jpg" },
					],
					site_name: "kcc.ninja",
				}}
				twitter={{
					handle: "@matteogauthier_",
					site: "@matteogauthier_",
					cardType: "summary_large_image",
				}}
			/>
			<motion.div variants={variants} className=" block h-full w-full  card">
				<div className="bg-black/60 rounded-t-xl py-1 flex px-3 items-center justify-between">
					<div className="flex space-x-3 text-xs items-center">{getDappsTags(dapp)}</div>
					<div className="flex space-x-4 items-center text-white">
						<a className="inline-flex text-sm space-x-1 items-center " href={"https://twitter.com/" + dapp.Twitter}>
							<TwitterIcon /> <span> {dapp.Twitter}</span>
						</a>
						<a className="inline-flex items-center space-x-1 text-sm " href={dapp.ExplorerTokenContractAdress}>
							<IconLayer /> <span>Token Explorer</span>
						</a>
					</div>
				</div>
				<a href={createUrl(dapp.Url)} className="flex flex-row items-center justify-between px-3 py-2 text-white">
					<div className="flex flex-col">
						<h3 className="text-lg font-medium">{dapp.Name}</h3>
						<p className="text-sm text-gray-400 line-clamp-2">{dapp.Description}</p>
					</div>
					{/* <div className="flex-1 h-full">
						<ExternalLinkIcon className="w-10 h-10 text-light-blue-300/90" />
					</div> */}
				</a>
			</motion.div>
			<style jsx global>{`
				.card {
					backdrop-filter: blur(16px) saturate(180%);
					-webkit-backdrop-filter: blur(16px) saturate(180%);
					background-color: rgba(17, 25, 40, 0.56);
					border-radius: 12px;
					border: 1px solid rgba(255, 255, 255, 0.125);
				}
			`}</style>
		</>
	);
}

export default DappRow;
