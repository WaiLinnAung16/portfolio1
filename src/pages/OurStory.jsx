import React from "react";
import gif from "/terror.gif";
const OurStory = () => {
  return (
    <div id="ourstory" className="bg-primary text-white pt-20 font-serif">
      <div className="container mx-auto">
        <div className="text-center absolute h-[650px] bg-primary/60 backdrop-blur-sm">
          <h1 className="text-5xl font-black text-white p-5 font-mono uppercase">
            Our Story
          </h1>
          <p className="px-5 text-lg w-full md:w-[90%] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            placeat sequi quae, fugit sed consectetur fugiat ex atque, quidem,
            et unde deserunt natus! Cupiditate pariatur voluptatum dolorum.
            Inventore laboriosam sunt dolores, quam consequatur fugit
            reprehenderit quidem, molestiae iusto odio magni ea reiciendis
            dolorem sint delectus modi aspernatur! Atque expedita rerum
            voluptates nemo delectus corporis ipsa culpa esse optio eum iste
            illum eveniet minus non natus corrupti pariatur repellat earum
            aliquam consectetur, quam voluptatibus nobis! Voluptate iure
            obcaecati et placeat molestiae fuga totam, ab deserunt dolore
            eveniet accusantium nesciunt, dignissimos exercitationem officiis,
            labore laudantium inventore repellendus aliquam iste minus dolor
            blanditiis!
          </p>
        </div>
        <img src={gif} alt="" className="h-[650px] w-full object-cover" />
        {/* <div className="grid grid-cols-12 mb-5">
          <div className=" col-span-6">
            <img
              src={tracks}
              alt=""
              className="h-[250px] w-full px-5 object-cover"
            />
          </div>
          <div className=" col-span-6">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis a
              sint facere libero. Doloribus nemo quia deserunt perspiciatis
              fuga, maiores molestiae omnis? Nisi sint, quas dicta ut itaque hic
              iure recusandae accusantium! Maiores quaerat, rem repellendus
              praesentium, voluptatum in, ipsa consectetur expedita eius sit
              facere earum ut? Hic, illo veritatis?
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className=" col-span-6">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis a
              sint facere libero. Doloribus nemo quia deserunt perspiciatis
              fuga, maiores molestiae omnis? Nisi sint, quas dicta ut itaque hic
              iure recusandae accusantium! Maiores quaerat, rem repellendus
              praesentium, voluptatum in, ipsa consectetur expedita eius sit
              facere earum ut? Hic, illo veritatis?
            </p>
          </div>
          <div className=" col-span-6">
            <img
              src={tracks}
              alt=""
              className="h-[250px] w-full px-5 object-cover"
            />
          </div>
        </div>
        <ReactPlayer playing loop url={video} width="100%" height="650px" /> */}
      </div>
    </div>
  );
};

export default OurStory;
