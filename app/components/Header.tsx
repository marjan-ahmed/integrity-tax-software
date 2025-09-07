// import React from 'react'
// import { motion, useReducedMotion } from "framer-motion"; // works in Next.js 14
// import Image from 'next/image'

// function Header() {
//       const shouldReduceMotion = useReducedMotion()

//       const fade = {
//     hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: shouldReduceMotion ? 0 : 0.45 },
//     },
//   }
//   return (
//     <>
//          <motion.div
//           className="py-2 border flex flex-col justify-center items-center"
//           initial="hidden"
//           animate="visible"
//           variants={fade}
//         >
//           <Image
//             src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/GcSAVqax8JVAKDL4VpBK/media/686e6879933498e4e5b51ef5.webp"
//             alt="Integrity Tax Software"
//             width={80}
//             height={80}
//           />
//         </motion.div>
//     </>
//   )
// }

// export default Header