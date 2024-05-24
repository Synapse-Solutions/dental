import React from "react";

interface Props {
  clicks: any;
  index: number;
}
export default function DotsupperTeeth(props: Props) {
  return (
    <div>
      {props.index === 0 && (
        <div>
          {/* upper dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 25 && click.x < 38
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="15px"
              left="32px"
            />
          )}

          {/* lower dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y > 90 &&
              click.x > 30 &&
              click.x < 40
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="100px"
              left="35px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 112 && click.x < 15
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="120px"
              left="15px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 112 && click.x > 50
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="120px"
              left="53px"
            />
          )}
        </div>
      )}
      {props.index === 1 && (
        <div>
          {/* upper dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 20 && click.x < 25
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="12px"
              left="20px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 20 &&
              click.x > 26 &&
              click.x < 40
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="12px"
              left="38px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 20 && click.x > 40
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="12px"
              left="55px"
            />
          )}

          {/* lower dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y > 90 &&
              click.x > 30 &&
              click.x < 40
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="100px"
              left="35px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 112 && click.x < 15
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="120px"
              left="15px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 112 && click.x > 50
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="120px"
              left="53px"
            />
          )}
        </div>
      )}
      {props.index === 2 && (
        <div>
          {/* upper dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 30 && click.x < 25
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="18px"
              left="22px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 30 &&
              click.x > 28 &&
              click.x < 40
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="18px"
              left="38px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 30 && click.x > 40
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="18px"
              left="52px"
            />
          )}
          {/* lower dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y > 90 &&
              click.x > 30 &&
              click.x < 40
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="100px"
              left="35px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 112 && click.x < 15
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="120px"
              left="15px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 112 && click.x > 50
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="120px"
              left="53px"
            />
          )}
        </div>
      )}
      {props.index === 3 && (
        <div>
          {/* upper  dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 10 &&
              click.x < 45 &&
              click.x > 25
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="4px"
              left="30px"
            />
          )}

          {/* lower dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 100 &&
              click.x < 35 &&
              click.x > 28
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="102px"
              left="25px"
            />
          )}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x < 20
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="126px"
              left="8px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x > 48
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="126px"
              left="37px"
            />
          )}
        </div>
      )}
      {props.index === 4 && (
        <div>
          {/* upper  dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 10 &&
              click.x < 45 &&
              click.x > 15
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="4px"
              left="26px"
            />
          )}
          {/* lower dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 100 &&
              click.x < 35 &&
              click.x > 28
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="102px"
              left="25px"
            />
          )}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x < 20
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="126px"
              left="8px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x > 48
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="126px"
              left="37px"
            />
          )}
        </div>
      )}
      {props.index === 5 && (
        <div>
          {/* upper  dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 10 &&
              click.x < 45 &&
              click.x > 25
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="6px"
              left="25px"
            />
          )}
          {/* lower dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 100 &&
              click.x < 35 &&
              click.x > 28
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="102px"
              left="22px"
            />
          )}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 115 &&
              click.y > 110 &&
              click.x < 20
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="113px"
              left="8px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 115 &&
              click.y > 110 &&
              click.x > 25
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="113px"
              left="37px"
            />
          )}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 125 && click.x > 40
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="129px"
              left="35px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 125 && click.x < 25
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="129px"
              left="8px"
            />
          )}
        </div>
      )}
      {props.index === 6 && (
        <div>
          {/* upper  dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 10 &&
              click.x < 45 &&
              click.x > 25
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="4px"
              left="20px"
            />
          )}
          {/* lower dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 100 &&
              click.x < 35 &&
              click.x > 28
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="102px"
              left="22px"
            />
          )}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 115 &&
              click.y > 110 &&
              click.x < 20
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="113px"
              left="8px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 115 &&
              click.y > 110 &&
              click.x > 25
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="113px"
              left="37px"
            />
          )}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 125 && click.x > 40
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="129px"
              left="35px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 125 && click.x < 25
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="129px"
              left="8px"
            />
          )}
        </div>
      )}
      {props.index === 7 && (
        <div>
          {/* upper  dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 10 &&
              click.x < 30 &&
              click.x > 10
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="4px"
              left="20px"
            />
          )}
          {/* lower dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 100 &&
              click.x < 35 &&
              click.x > 28
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="102px"
              left="28px"
            />
          )}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 115 &&
              click.y > 110 &&
              click.x < 20
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="113px"
              left="8px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 115 &&
              click.y > 110 &&
              click.x > 25
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="113px"
              left="45px"
            />
          )}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 125 && click.x > 40
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="129px"
              left="45px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 125 && click.x < 25
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="129px"
              left="8px"
            />
          )}
        </div>
      )}
      {props.index === 8 && (
        <div>
          {/* upper  dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 10 &&
              click.x < 30 &&
              click.x > 10
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="4px"
              left="20px"
            />
          )}
          {/* lower dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 100 &&
              click.x < 35 &&
              click.x > 28
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="102px"
              left="28px"
            />
          )}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 115 &&
              click.y > 110 &&
              click.x < 20
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="113px"
              left="8px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 115 &&
              click.y > 110 &&
              click.x > 25
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="113px"
              left="45px"
            />
          )}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 125 && click.x > 40
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="129px"
              left="45px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 125 && click.x < 25
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="129px"
              left="8px"
            />
          )}
        </div>
      )}
      {props.index === 9 && (
        <div>
          {/* upper  dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 10 &&
              click.x < 45 &&
              click.x > 25
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="4px"
              left="20px"
            />
          )}
          {/* lower dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 100 &&
              click.x < 35 &&
              click.x > 28
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="102px"
              left="22px"
            />
          )}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 115 &&
              click.y > 110 &&
              click.x < 20
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="113px"
              left="8px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 115 &&
              click.y > 110 &&
              click.x > 25
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="113px"
              left="37px"
            />
          )}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 125 && click.x > 40
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="129px"
              left="35px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 125 && click.x < 25
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="129px"
              left="8px"
            />
          )}
        </div>
      )}
      {props.index === 10 && (
        <div>
          {/* upper  dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 10 &&
              click.x < 45 &&
              click.x > 25
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="6px"
              left="25px"
            />
          )}

          {/* lower dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 100 &&
              click.x < 35 &&
              click.x > 28
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="102px"
              left="22px"
            />
          )}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 115 &&
              click.y > 110 &&
              click.x < 20
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="113px"
              left="8px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 115 &&
              click.y > 110 &&
              click.x > 25
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="113px"
              left="37px"
            />
          )}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 125 && click.x > 40
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="129px"
              left="35px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 125 && click.x < 25
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="129px"
              left="8px"
            />
          )}
        </div>
      )}
      {props.index === 11 && (
        <div>
          {/* upper  dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 10 &&
              click.x < 45 &&
              click.x > 15
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="4px"
              left="26px"
            />
          )}
          {/* lower dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 100 &&
              click.x < 35 &&
              click.x > 28
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="102px"
              left="25px"
            />
          )}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x < 20
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="126px"
              left="8px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x > 48
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="126px"
              left="37px"
            />
          )}
        </div>
      )}
      {props.index === 12 && (
        <div>
          {/* upper  dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 10 &&
              click.x < 45 &&
              click.x > 25
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="4px"
              left="30px"
            />
          )}

          {/* lower dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 100 &&
              click.x < 35 &&
              click.x > 28
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="102px"
              left="25px"
            />
          )}

          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x < 20
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="126px"
              left="8px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 106 && click.x > 48
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="126px"
              left="37px"
            />
          )}
        </div>
      )}
      {props.index === 13 && (
        <div>
          {/* upper dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 30 && click.x < 25
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="18px"
              left="22px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 30 &&
              click.x > 28 &&
              click.x < 40
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="18px"
              left="38px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 30 && click.x > 40
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="18px"
              left="52px"
            />
          )}
          {/* lower dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y > 90 &&
              click.x > 30 &&
              click.x < 40
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="100px"
              left="35px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 112 && click.x < 15
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="120px"
              left="15px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 112 && click.x > 50
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="120px"
              left="53px"
            />
          )}
        </div>
      )}
      {props.index === 14 && (
        <div>
          {/* upper dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 20 && click.x < 25
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="12px"
              left="20px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y < 20 &&
              click.x > 26 &&
              click.x < 40
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="12px"
              left="38px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 20 && click.x > 40
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="12px"
              left="55px"
            />
          )}

          {/* lower dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y > 90 &&
              click.x > 30 &&
              click.x < 40
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="100px"
              left="35px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 112 && click.x < 15
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="120px"
              left="15px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 112 && click.x > 50
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="120px"
              left="53px"
            />
          )}
        </div>
      )}

      {props.index === 15 && (
        <div>
          {/* upper dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y < 25 && click.x < 38
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="15px"
              left="32px"
            />
          )}

          {/* lower dots */}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index &&
              click.y > 90 &&
              click.x > 30 &&
              click.x < 40
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="100px"
              left="35px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 112 && click.x < 15
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="120px"
              left="15px"
            />
          )}
          {props.clicks.some(
            (click: any) =>
              click.index === props.index && click.y > 112 && click.x > 50
          ) && (
            <GloblalDiv
              color={props.clicks[props.index]?.color}
              top="120px"
              left="53px"
            />
          )}
        </div>
      )}
    </div>
  );
}

// div for the dots

const GloblalDiv = ({ top, left, color }: any) => (
  <div
    style={{
      top: top,
      left: left,
      position: "absolute",
      width: "10px",
      height: "10px",
      backgroundColor: color || "#cfb53b",
      borderRadius: "50%",
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
    }}
  />
);
