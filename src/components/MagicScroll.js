import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const TweenStyled = styled.div`
  .section-border-right {
    transform: scale(1, 1);
    transform-origin: right center;
  }
  .section-border-left {
    transform: scale(1, 1);
    transform-origin: left center;
  }
  .section-border-top {
    transform: scale(1, 1);
    transform-origin: center top;
  }
  .section-border-bottom {
    transform: scale(1, 1);
    transform-origin: center bottom;
  }
`;
function BillboardExpand() {
  return (
    <div className="billboard__container relative">
      <div className="billboard__boarders absolute left-0 right-0 top-0 bottom-0 z-10">
        <TweenStyled>
          <div id="trigger" />
          <Controller>
            <Scene triggerElement="#trigger" offset={0} duration={750}>
              {progress => (
                <Tween
                  to={{
                    scaleX: "0",
                    ease: "Power4.easeOut"
                  }}
                  ease="Power4.easeOut"
                  totalProgress={progress}
                  paused
                >
                  <div className="section-border section-border-right h-full w-5 lg:w-32 bg-white absolute right-0 bottom-0" />
                </Tween>
              )}
            </Scene>
          </Controller>
        </TweenStyled>
        <TweenStyled>
          <Controller>
            <Scene triggerElement="#trigger" offset={0} duration={750}>
              {progress => (
                <Tween
                  to={{
                    scaleX: "0",
                    ease: "Power4.easeOut"
                  }}
                  ease="Power4.easeOut"
                  totalProgress={progress}
                  paused
                >
                  <div className="section-border section-border-left h-full w-5 lg:w-32 bg-white absolute left-0 bottom-0" />
                </Tween>
              )}
            </Scene>
          </Controller>
        </TweenStyled>
        <TweenStyled>
          <Controller>
            <Scene triggerElement="#trigger" offset={0} duration={750}>
              {progress => (
                <Tween
                  to={{
                    scaleY: "0",
                    ease: "Power4.easeOut"
                  }}
                  ease="Power4.easeOut"
                  totalProgress={progress}
                  paused
                >
                  <div className="section-border section-border-top w-full h-5 lg:h-32 bg-white absolute left-0 top-0" />
                </Tween>
              )}
            </Scene>
          </Controller>
        </TweenStyled>
        <TweenStyled>
          <Controller>
            <Scene triggerElement="#trigger" offset={0} duration={750}>
              {progress => (
                <Tween
                  to={{
                    scaleY: "0",
                    ease: "Power4.easeOut"
                  }}
                  ease="Power4.easeOut"
                  totalProgress={progress}
                  paused
                >
                  <div className="section-border section-border-bottom w-full h-5 lg:h-32 bg-white absolute right-0 bottom-0" />
                </Tween>
              )}
            </Scene>
          </Controller>
        </TweenStyled>
      </div>
      <div className="billboard__image absolute left-0 right-0 top-0 bottom-0" />
      <div className="billboard absolute z-0">
        <div className="lg:p-12 text-left step">
          <p className="title mb-10 text-white uppercase">Technology</p>
          <h5 className="text-left text-white pb-6">
            Turning sound into touch
          </h5>
          <p className="text-left text-white pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            diam mattis, posuere nunc sit amet, pulvinar ipsum. Vestibulum
            mattis, felis egestas sodales viverra, eros justo rhoncus metus, at
            elementum elit purus placerat ante. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec ac diam mattis, posuere nunc sit
            amet, pulvinar ipsum. Vestibulum mattis, felis egestas sodales
            viverra, eros justo rhoncus metus, at elementum elit purus
            placeratante.,
          </p>
          <a
            className="bg-purple-600 step hover:shadow-md text-white text-xs text-left font-bold py-2 px-4 rounded-full"
            href="0#"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

export default BillboardExpand;
