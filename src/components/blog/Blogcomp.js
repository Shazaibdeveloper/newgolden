import React from 'react'
import header from '../images/header.png'
import market from '../images/market-screenshot.png'

const Blogcomp = () => {
  return (
     <>
     <div className="bg-color-div">
      <div className="blog-head-container">
        <a href="">New</a>
        <h1>Open-Sourcing a New Interface for the Cryptopunks Market</h1>
        <p>Preserving the long-term independence of the zero-fee, permissionless Cryptopunks Market.</p>
    </div>

    <div className="ban-img">
        <img src={header} alt="" />
    </div>

    <div className="text-container">
        <p>
        When we created the CryptoPunks almost 5 years ago as an experiment in digital art, we didn’t quite realize the level of association people would come to have with their punks. The effect was so powerful that it became some people’s online identities. We designed the Meebits with this in mind, allowing this new kind of online identity to extend into a growing 3D world. As avatar projects became more popular throughout 2021, they grew into a category of their own and the creators of such projects started looking more like media companies rather than digital artists.

        Our speciality has always been the creation of things early in the life of a technology. So, as this category of “Profile Picture Projects” (PFP) grew into an industry in itself, we found ourselves less and less suited to the operation of these projects. Our personalities and skill sets aren’t well suited to community management, public relations, and the day-to-day management that these kinds of projects require and deserve.

        At the same time as we were working on possible solutions to the situation, we met and got to know the founders of Yuga Labs. We found many things in common, but we also saw in them the skill set and expertise in this space that we were missing. In many ways Yuga is the innovator of the model for the modern PFP project, and are the best people in the world at operating and growing these projects and communities around them. At the same time, we found they have deep respect for the history and origins of the NFT world, and want nothing more than to honor that while expanding its reach and size into popular culture at large.

        As we discussed ways we could collaborate, it became clear to us that what would be best for the CryptoPunks and Meebits was for Yuga to take over operations and guide them in this new, much larger world. With that in mind, we are announcing today that Yuga Labs has acquired the IP of both CryptoPunks and Meebits, along with the majority of the developer-owned Punks and Meebits. Their first action in acquiring this IP will be to grant commercial rights to the community. We’re also excited that the Cryptopunks and Meebits will now be part of their plans for the future. You can read more in their announcement here.

        This is, however, not an acquisition of Larva Labs. That’s still us, and we still own the Autoglyphs project as well as a group of our favorite Punks and Meebs. As for what’s next for us, we never talk about that until it’s ready, but in general we’re excited to get back to what we do best, which is working on weird new stuff.

        Finally we’d like to thank the community of people that has grown with us and our projects over the past five years. It’s been a crazy ride we’ve all taken together so far, and we’re excited for what’s coming next for the Cryptopunks and Meebits.
        </p>
    </div>
    </div>
 
     </>
    )
}

export default Blogcomp