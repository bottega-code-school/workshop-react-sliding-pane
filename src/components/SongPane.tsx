import * as React from "react";
import { BsCaretLeft } from "react-icons/bs";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { SongType } from "./DndPlaylist";

type Props = {
  visible: boolean;
  data?: SongType;
  closePane: () => void;
};
export default function SongPane({ visible, data, closePane }: Props) {
  return (
    <SlidingPane
      className="sliding-pane"
      isOpen={visible}
      title={data?.title}
      width={window.innerWidth < 600 ? "100%" : "500px"}
      onRequestClose={closePane}
      hideHeader
    >
      {data && (
        <div className="song-details">
          <div className="song-details__thumb">
            <img src={data?.thumb} />
          </div>
          <div className="song-details__info">
            <a onClick={closePane} className="song-details__info--close">
              <BsCaretLeft />
              CLOSE
            </a>
            <div className="song-details__info--box">
              <div>{data?.artist}</div>
              <div className="bold">{data?.released}</div>
            </div>
            <div>{data?.description}</div>
          </div>
        </div>
      )}
    </SlidingPane>
  );
}
