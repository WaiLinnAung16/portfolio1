import React from "react";
import story1 from "/public/image0.jpeg";
import tracks from "/public/tracks.png";
const OurStory = () => {
  return (
    <div id="ourstory" className="bg-primary text-white py-20 clear-both">
      <div className="container mx-auto px-5">
        <h1 className="text-5xl font-mono font-bold">Our Story</h1>
        <div className="mt-10">
          <img src={story1} alt="" className="h-[350px] float-left mx-5 mb-5" />
          <p className=" font-serif leading-8">
            <span className="font-bold text-xl">Saii (Sailus) & Lwin (LZ)</span>{" "}
            started the “Terror bass” at the beginning of 2014. Over a year they
            started appearing with top local artists but In 2016, their history
            making track, <span className="font-bold underline">BTFWD</span>{" "}
            remix was released from ‘Soundcloud’. It got recognized and ‘played’
            worldwide by the original maker of the track, “Carnage” and also
            many huge artists including; “DJ Snake” , “ The Chainsmokers”,
            “Lookas” , “SKiSM” and “NGHTMRE”. In a few months, their very first
            Domestic live debut , was sharing the stage with “Deorro” , “DVBBS”
            and “Moti”.In December of 2016, their remarkable achievement was 808
            Festival (Pattaya and Yangon), where they shared the stage together
            with the big man ’Papi Gordo’ aka “Carnage” himself for the very
            first time. He brought out “Terror Bass” to drop the “BTFWD remix”
            together and it was a frustrating proud moment for every local EDM
            fans.
          </p>
          <img src={tracks} alt="" className="h-[350px] float-right m-5" />
          <p className="leading-8">
            In 2017, they collaborated with grammy winner, the rapper “Lil Jon”
            and “Skellism”. It was one of the most biggest hit, ASIA has ever
            made and the world has no clues about it. It was released from the
            ’Geffen Records’ which is the birth place of Major World Class Icons
            like following artists like; “Guns N Roses” , “NIRVANA” , “Aero
            Smith” , “Snoop-Dogg” , “AVICII” & The “DJ Snake”. The track was
            named , “IN THE PIT” , a burning fuel of hell which topped the music
            charts from all around the world and brought “Terror Bass” to the
            table today. 2018 also took them to sign with supermodified agency
            and started touring through China, Malaysia, Thailand across
            Southeast Asia. They have appeared in same lineup together with huge
            names like; “Martin Garrix” and many more. In 2019, “Carnage” ended
            the decade with a grammy nominated track, together with “Terror
            Bass”. The music video got streamed over 1 million views within a
            month. It was released from EMPIRE recordings, on behalf of the
            “Heavyweight Label” and title is “HOLY MOLY”. The track got press
            feat from Billboard, YourEDM, Edm.com , Nest HQ, OWSLA, RunTheTrap,
            Spotify and Tracklist10001. It changed entire aspects of the
            electronic music scene.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
