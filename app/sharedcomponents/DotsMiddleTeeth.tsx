import React from "react";

interface Props {
  clicks: any;
  index: number;
}
export default function DotsMiddleTeeth(props: Props) {
  return (
    <div>
      {props.index === 0 && (
        <div>
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 60 && click.x < 30
          ) && <GloblalDiv top="30px" left="15px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 60 &&
              click.x > 30 &&
              click.x < 45
          ) && <GloblalDiv top="30px" left="30px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 60 && click.x > 45
          ) && <GloblalDiv top="30px" left="45px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x > 37
          ) && <GloblalDiv top="110px" left="45px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y > 106 &&
              click.x > 26 &&
              click.x < 37
          ) && <GloblalDiv top="110px" left="30px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x < 26
          ) && <GloblalDiv top="110px" left="15px" />}
        </div>
      )}
      {props.index === 1 && (
        <div>
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 60 && click.x < 30
          ) && <GloblalDiv top="30px" left="15px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 60 &&
              click.x > 30 &&
              click.x < 45
          ) && <GloblalDiv top="30px" left="30px" />}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x > 37
          ) && <GloblalDiv top="110px" left="45px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y > 106 &&
              click.x > 26 &&
              click.x < 37
          ) && <GloblalDiv top="110px" left="30px" />}
        </div>
      )}
      {props.index === 2 && (
        <div>
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 60 && click.x < 30
          ) && <GloblalDiv top="30px" left="15px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 60 &&
              click.x > 30 &&
              click.x < 45
          ) && <GloblalDiv top="30px" left="30px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 60 && click.x > 45
          ) && <GloblalDiv top="30px" left="45px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x > 37
          ) && <GloblalDiv top="110px" left="45px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y > 106 &&
              click.x > 26 &&
              click.x < 37
          ) && <GloblalDiv top="110px" left="30px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x < 26
          ) && <GloblalDiv top="110px" left="15px" />}
        </div>
      )}
      {props.index === 3 && (
        <div>
          {/* upper  dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 60 && click.x < 30
          ) && <GloblalDiv top="30px" left="15px" />}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x > 37
          ) && <GloblalDiv top="110px" left="45px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y > 106 &&
              click.x > 26 &&
              click.x < 37
          ) && <GloblalDiv top="110px" left="30px" />}
        </div>
      )}
      {props.index === 4 && (
        <div>
          {/* upper  dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 60 && click.x < 30
          ) && <GloblalDiv top="30px" left="15px" />}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x > 37
          ) && <GloblalDiv top="110px" left="45px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y > 106 &&
              click.x > 26 &&
              click.x < 37
          ) && <GloblalDiv top="110px" left="30px" />}
        </div>
      )}
      {props.index === 5 && (
        <div>
          {/* upper  dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 60 && click.x < 30
          ) && <GloblalDiv top="30px" left="15px" />}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x > 37
          ) && <GloblalDiv top="110px" left="45px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y > 106 &&
              click.x > 26 &&
              click.x < 37
          ) && <GloblalDiv top="110px" left="30px" />}
        </div>
      )}
      {props.index === 6 && (
        <div>
          {/* upper  dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 60 && click.x < 30
          ) && <GloblalDiv top="30px" left="15px" />}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x > 37
          ) && <GloblalDiv top="110px" left="45px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y > 106 &&
              click.x > 26 &&
              click.x < 37
          ) && <GloblalDiv top="110px" left="30px" />}
        </div>
      )}
      {props.index === 7 && (
        <div>
          {/* upper  dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 60 && click.x < 30
          ) && <GloblalDiv top="30px" left="15px" />}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x > 37
          ) && <GloblalDiv top="110px" left="45px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y > 106 &&
              click.x > 26 &&
              click.x < 37
          ) && <GloblalDiv top="110px" left="30px" />}
        </div>
      )}
      {props.index === 8 && (
        <div>
          {/* upper  dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 60 && click.x < 30
          ) && <GloblalDiv top="30px" left="15px" />}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x > 37
          ) && <GloblalDiv top="110px" left="45px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y > 106 &&
              click.x > 26 &&
              click.x < 37
          ) && <GloblalDiv top="110px" left="30px" />}
        </div>
      )}
      {props.index === 9 && (
        <div>
          {/* upper  dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 60 && click.x < 30
          ) && <GloblalDiv top="30px" left="15px" />}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x > 37
          ) && <GloblalDiv top="110px" left="45px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y > 106 &&
              click.x > 26 &&
              click.x < 37
          ) && <GloblalDiv top="110px" left="30px" />}
        </div>
      )}
      {props.index === 10 && (
        <div>
          {/* upper  dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 60 && click.x < 30
          ) && <GloblalDiv top="30px" left="15px" />}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x > 37
          ) && <GloblalDiv top="110px" left="45px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y > 106 &&
              click.x > 26 &&
              click.x < 37
          ) && <GloblalDiv top="110px" left="30px" />}
        </div>
      )}
      {props.index === 11 && (
        <div>
          {/* upper  dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 60 && click.x < 30
          ) && <GloblalDiv top="30px" left="15px" />}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x > 37
          ) && <GloblalDiv top="110px" left="45px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y > 106 &&
              click.x > 26 &&
              click.x < 37
          ) && <GloblalDiv top="110px" left="30px" />}
        </div>
      )}
      {props.index === 12 && (
        <div>
          {/* upper  dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 60 && click.x < 30
          ) && <GloblalDiv top="30px" left="15px" />}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x > 37
          ) && <GloblalDiv top="110px" left="45px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y > 106 &&
              click.x > 26 &&
              click.x < 37
          ) && <GloblalDiv top="110px" left="30px" />}
        </div>
      )}
      {props.index === 13 && (
        <div>
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 60 && click.x < 30
          ) && <GloblalDiv top="30px" left="15px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 60 &&
              click.x > 30 &&
              click.x < 45
          ) && <GloblalDiv top="30px" left="30px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 60 && click.x > 45
          ) && <GloblalDiv top="30px" left="45px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x > 37
          ) && <GloblalDiv top="110px" left="45px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y > 106 &&
              click.x > 26 &&
              click.x < 37
          ) && <GloblalDiv top="110px" left="30px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x < 26
          ) && <GloblalDiv top="110px" left="15px" />}
        </div>
      )}
      {props.index === 14 && (
        <div>
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 60 && click.x < 30
          ) && <GloblalDiv top="30px" left="15px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 60 &&
              click.x > 30 &&
              click.x < 45
          ) && <GloblalDiv top="30px" left="30px" />}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x > 37
          ) && <GloblalDiv top="110px" left="45px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y > 106 &&
              click.x > 26 &&
              click.x < 37
          ) && <GloblalDiv top="110px" left="30px" />}
        </div>
      )}
      {props.index === 0 && (
        <div>
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 60 && click.x < 30
          ) && <GloblalDiv top="30px" left="15px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 60 &&
              click.x > 30 &&
              click.x < 45
          ) && <GloblalDiv top="30px" left="30px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 60 && click.x > 45
          ) && <GloblalDiv top="30px" left="45px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x > 37
          ) && <GloblalDiv top="110px" left="45px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y > 106 &&
              click.x > 26 &&
              click.x < 37
          ) && <GloblalDiv top="110px" left="30px" />}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x < 26
          ) && <GloblalDiv top="110px" left="15px" />}
        </div>
      )}
    </div>
  );
}

// div for the dots

const GloblalDiv = ({ top, left }: any) => (
  <div
    style={{
      top: top,
      left: left,
      position: "absolute",
      width: "10px",
      height: "10px",
      backgroundColor: "#cfb53b",
      borderRadius: "50%",
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
    }}
  />
);
