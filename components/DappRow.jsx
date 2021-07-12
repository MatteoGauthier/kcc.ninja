import React from "react";
import ExternalLinkIcon from "@heroicons/react/outline/ExternalLinkIcon";
import TwitterIcon from "./svg/TwitterIcon";
import IconLayer from "./svg/IconLayer";
import { motion } from "framer-motion";
import { createUrl, getDappsTags } from "../libs/utils";

function DappRow({ dapp, variants }) {
	return (
		<>
			<motion.div variants={variants} className="block w-full h-full card">
				<div className="flex items-center justify-between px-3 py-1 bg-black/60 rounded-t-xl">
					<div className="flex items-center space-x-3 text-xs">{getDappsTags(dapp)}</div>
					<div className="flex items-center space-x-4 text-white">
						<a className="inline-flex items-center space-x-1 text-sm " href={"https://twitter.com/" + dapp.Twitter}>
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
