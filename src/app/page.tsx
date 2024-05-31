"use client"
// import Image from "next/image";
import React, { useState } from "react";
import { CSSProperties } from 'react';

export default function Home() {
  const [counter, setCounter] = useState(0); 
	const [initialCount, setInitialCount] = useState(0); 


	const handleInitialCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInitialCount(Number(event.currentTarget.value));
  }; 

	const handleReset = () => { 
		setCounter(initialCount); 
	}; 

	const handleClick1 = () => { 
		setCounter(counter + 1); 
	}; 

	const handleClick2 = () => { 
		setCounter(counter - 1); 
	}; 

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">src/app/page.tsx</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold">
    //         Docs{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className="m-0 max-w-[30ch] text-sm opacity-50">
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold">
    //         Learn{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className="m-0 max-w-[30ch] text-sm opacity-50">
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold">
    //         Templates{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className="m-0 max-w-[30ch] text-sm opacity-50">
    //         Explore starter templates for Next.js.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold">
    //         Deploy{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
    <div style={styles.container}> 
    <h1 style={styles.heading}> 
      Geeksforgeeks 
    </h1> 
    <h2 style={styles.header}> 
      Counter App 
    </h2> 
    <div style={styles.counterValue}> 
      {counter} 
    </div> 
    <div style={styles.buttons}> 
      <button style={styles.button} 
          onClick={handleClick1}> 
        Increment 
      </button> 
      <button style={styles.button} 
          onClick={handleClick2}> 
        Decrement 
      </button> 
    </div> 
    <div style={{ margin: "1.5rem" }}> 
      <input 
        type="number"
        value={initialCount} 
        onChange={handleInitialCountChange} 
        style={{ padding: "1rem", 
            fontSize: "1rem", 
            borderRadius: "8px",
            color: "black"
           }} 
      /> 
      <button 
        onClick={handleReset} 
        style={{ 
          padding: "1rem", 
          fontSize: "1rem", 
          marginLeft: "1rem", 
          borderRadius: "5px", 
          cursor: "pointer", 
          color: "#fff", 
          background: "blue", 
          border: "none", 
          outline: "none", 
          boxShadow: "0px 0px 20px 0px grey", 
        }} 
      > 
        Set Initial Count 
      </button> 
    </div> 
  </div> 
  );
}

const styles = { 
	container: { 
		display: "flex", 
		flexDirection: "column", 
		alignItems: "center", 
		justifyContent: "center", 
		height: "100vh", 
		background: "#f8f8f8", 
	} as CSSProperties, 
	header: { 
		fontSize: "1.4rem", 
		margin: "1rem 0", 
		color: "#333", 
		textTransform: "uppercase", 
	} as CSSProperties, 
	heading: { 
		color: "green", 
		fontSize: "2rem", 
	} as CSSProperties, 
	counterValue: { 
		fontSize: "3rem", 
		fontWeight: "bold", 
		margin: "1rem 0", 
		color: "#007bff", 
	} as CSSProperties, 
	buttons: { 
		display: "flex", 
		justifyContent: "center", 
	} as CSSProperties, 
	button: { 
		fontSize: "1rem", 
		padding: "1rem", 
		margin: "0.5rem", 
		borderRadius: "5px", 
		cursor: "pointer", 
		color: "#fff", 
		background: "green", 
		border: "none", 
		outline: "none", 
		transition: "background 0.3s", 
		boxShadow: "0px 0px 20px 0px grey", 
	} as CSSProperties, 
}; 
