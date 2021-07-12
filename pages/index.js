import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import getTable from "../libs/airtable"
import DappRow from "../components/DappRow"
import { motion } from "framer-motion"
import toast, { Toaster } from "react-hot-toast"
import { useEffect } from "react"
import SEO from "../components/SEO"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
}

const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export default function Home({ dapps }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast(
        (t) => (
          <span className="cursor-pointer" onClick={() => (window.location = "https://airtable.com/shrts73IEZRbSfBZP")}>
            💻 Wanted to add a new dapp?
          </span>
        ),

        {
          // icon: <IG className="w-6 h-6" />,
          position: "bottom-right",
          duration: Infinity,
        }
      )
    }, 1000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <SEO/>
      <Toaster onClick={() => (window.location = "https://airtable.com/shrts73IEZRbSfBZP")} />
      <div className="bg-no-repeat background-gradient ">
        <main className="flex flex-col max-w-screen-md px-4 mx-auto md:px-0">
          <div className="mt-12 xl:mt-32 md:mt-20">
            <h1 className="text-4xl font-semibold text-primary ">kcc.ninja</h1>
            <p className="text-white/90 ">List of dApps of the KCC ecosytem</p>
          </div>
          <motion.div variants={container} className="flex-col mt-6 space-y-2 rounded-2xl" initial="hidden" animate="show">
            {dapps.map(({ id, fields: dapp }) => (
              <DappRow variants={listItem} key={id} dapp={dapp} />
            ))}
          </motion.div>
          <div className="h-96"></div>
        </main>
        <footer className="flex items-center justify-center py-4 space-x-4 mt-30 text-white/50">
          <a href="https://twitter.com/matteogauthier_">Twitter</a>
        </footer>
      </div>
    </>
  )
}

// getstaticprops
export async function getStaticProps() {
  const { records } = await getTable()
  const dapps = records
  return {
    props: {
      dapps,
    },
  }
}
