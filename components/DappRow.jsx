import React from "react";
import ExternalLinkIcon from "@heroicons/react/outline/ExternalLinkIcon";
import TwitterIcon from "./svg/TwitterIcon";
import IconLayer from "./svg/IconLayer";
import { motion } from "framer-motion";
import createUrl from "../libs/url";
function getDappsTags(el) {
	const f = (term) => {
		if (el.Tags.includes(term)) {
			return el.tags;
		}
	};
	let tagsElms = [];
	switch (el.tags) {
		case f("DEX"):
			tagsElms.push(<span key="DEX" className=" text-emerald-300">DEX</span>);
		case f("Farm"):
			tagsElms.push(<span key="Farm" className=" text-yellow-300">Farm</span>);

		default:
			break;
	}
    return tagsElms
}

function DappRow({ dapp, variants }) {
	return (
		<>
			<motion.div variants={variants} className=" block h-full w-full  card">
				<div className="bg-black/60 rounded-t-xl py-1 flex px-3 items-center justify-between">
					<div className="flex space-x-3 text-xs items-center">{getDappsTags(dapp)}</div>
					<div className="flex space-x-4 items-center text-white">
						<a className="inline-flex text-sm space-x-1 items-center " href={"https://twitter.com/" + dapp.Twitter}>
							<TwitterIcon /> <span> {dapp.Twitter}</span>
						</a>
						<a className="inline-flex text-sm space-x-1 items-center " href={"https://twitter.com/" + dapp.Twitter}>
							<IconLayer /> <span>Explorer</span>
						</a>
					</div>
				</div>
				<a href={createUrl(dapp.Url)} className="flex-row flex justify-between px-3 py-2 items-center text-white">
					<div className="flex flex-col">
						<h3 className="text-lg font-medium">{dapp.Name}</h3>
						<p className="text-sm text-gray-400 line-clamp-2">{dapp.Description}</p>
					</div>
					{/* <div className="h-full flex-1">
						<ExternalLinkIcon className="h-10 w-10 text-light-blue-300/90" />
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
