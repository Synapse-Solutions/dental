import React from "react";

interface Props {
  clicks: any;
  index: number;
  setClicks: any;
  setCavityModal: any;
  isOCCTeeths?: boolean;
  updateImages?: any;
}
export default function DotsupperTeeth(props: Props) {
  // onclicks for first time
  const onClick = (value: string) => {
    let clicksCopy = JSON.parse(JSON.stringify(props.clicks));
    if (value === "1") {
      clicksCopy[props.index].value1 = 1;
    }
    if (value === "2") {
      clicksCopy[props.index].value2 = 1;
    }
    if (value === "3") {
      clicksCopy[props.index].value3 = 1;
    }

    props.setClicks(clicksCopy);
  };

  // when already selected
  const onClickVisibleDiv = (value: string) => {
    let clicksCopy = JSON.parse(JSON.stringify(props.clicks));
    if (value === "1") {
      clicksCopy[props.index].value1 = 0;
    }
    if (value === "2") {
      clicksCopy[props.index].value2 = 0;
    }
    if (value === "3") {
      clicksCopy[props.index].value3 = 0;
    }

    props.setClicks(clicksCopy);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full z-[9999] ">
      <div
        onClick={props.updateImages}
        className="h-[65%] w-full absolute top-0 left-0 z-[99991]"
      ></div>
      {!props.isOCCTeeths ? (
        <div className="relative w-full h-full ">
          {props.index === 0 && (
            <>
              {props.clicks[props.index].value1 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("1")}
                  top={"20px"}
                  left="28px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"20px"}
                  left="28px"
                />
              )}
              {props.clicks[props.index].value2 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("2")}
                  top={"20px"}
                  left="42px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("2")}
                  top={"20px"}
                  left="42px"
                />
              )}
              {props.clicks[props.index].value3 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 3 })
                  }
                  top={"103px"}
                  left="32px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 3,
                    })
                  }
                  top={"103px"}
                  left="32px"
                  isborder={
                    props.clicks[props.index].value3 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value3 === 1
                      ? "black"
                      : props.clicks[props.index].value3 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value4 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 4 })
                  }
                  top={"120px"}
                  left="10px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"120px"}
                  left="10px"
                  isborder={
                    props.clicks[props.index].value4 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value4 === 1
                      ? "black"
                      : props.clicks[props.index].value4 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"120px"}
                  left="52px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"120px"}
                  left="52px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {/* <GloblalDiv top={"120px"} left="10px" />
            <GloblalDiv top={"120px"} left="52px" /> */}
            </>
          )}
          {props.index === 1 && (
            <>
              {props.clicks[props.index].value1 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("1")}
                  top={"20px"}
                  left="22px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"20px"}
                  left="22px"
                />
              )}
              {props.clicks[props.index].value2 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("2")}
                  top={"20px"}
                  left="32px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("2")}
                  top={"20px"}
                  left="32px"
                />
              )}
              {props.clicks[props.index].value3 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("3")}
                  top={"20px"}
                  left="45px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("3")}
                  top={"20px"}
                  left="45px"
                />
              )}
              {props.clicks[props.index].value4 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 4 })
                  }
                  top={"103px"}
                  left="32px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"103px"}
                  left="32px"
                  isborder={
                    props.clicks[props.index].value4 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value4 === 1
                      ? "black"
                      : props.clicks[props.index].value4 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"120px"}
                  left="10px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"120px"}
                  left="10px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"120px"}
                  left="52px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"120px"}
                  left="52px"
                  isborder={
                    props.clicks[props.index].value6 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value6 === 1
                      ? "black"
                      : props.clicks[props.index].value6 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 2 && (
            <>
              {props.clicks[props.index].value1 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("1")}
                  top={"20px"}
                  left="22px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"20px"}
                  left="22px"
                />
              )}
              {props.clicks[props.index].value2 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("2")}
                  top={"20px"}
                  left="38px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("2")}
                  top={"20px"}
                  left="38px"
                />
              )}
              {props.clicks[props.index].value3 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("3")}
                  top={"20px"}
                  left="55px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("3")}
                  top={"20px"}
                  left="55px"
                />
              )}
              {props.clicks[props.index].value4 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 4 })
                  }
                  top={"103px"}
                  left="32px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"103px"}
                  left="32px"
                  isborder={
                    props.clicks[props.index].value4 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value4 === 1
                      ? "black"
                      : props.clicks[props.index].value4 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"120px"}
                  left="10px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"120px"}
                  left="10px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"120px"}
                  left="52px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"120px"}
                  left="52px"
                  isborder={
                    props.clicks[props.index].value6 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value6 === 1
                      ? "black"
                      : props.clicks[props.index].value6 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 3 && (
            <>
              {props.clicks[props.index].value1 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("1")}
                  top={"15px"}
                  left="26px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"15px"}
                  left="26px"
                />
              )}

              {props.clicks[props.index].value2 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 2 })
                  }
                  top={"103px"}
                  left="25px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 2,
                    })
                  }
                  top={"103px"}
                  left="25px"
                  isborder={
                    props.clicks[props.index].value2 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value2 === 1
                      ? "black"
                      : props.clicks[props.index].value2 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value3 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 3 })
                  }
                  top={"120px"}
                  left="10px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 3,
                    })
                  }
                  top={"120px"}
                  left="10px"
                  isborder={
                    props.clicks[props.index].value3 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value3 === 1
                      ? "black"
                      : props.clicks[props.index].value3 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value4 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 4 })
                  }
                  top={"120px"}
                  left="38px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"120px"}
                  left="38px"
                  isborder={
                    props.clicks[props.index].value4 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value4 === 1
                      ? "black"
                      : props.clicks[props.index].value4 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 4 && (
            <>
              {props.clicks[props.index].value1 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("1")}
                  top={"20px"}
                  left="25px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"20px"}
                  left="25px"
                />
              )}
              {props.clicks[props.index].value2 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("2")}
                  top={"20px"}
                  left="16px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("2")}
                  top={"20px"}
                  left="16px"
                />
              )}

              {props.clicks[props.index].value3 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 3 })
                  }
                  top={"95px"}
                  left="22px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 3,
                    })
                  }
                  top={"95px"}
                  left="22px"
                  isborder={
                    props.clicks[props.index].value3 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value3 === 1
                      ? "black"
                      : props.clicks[props.index].value3 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value4 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 4 })
                  }
                  top={"120px"}
                  left="10px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"120px"}
                  left="10px"
                  isborder={
                    props.clicks[props.index].value4 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value4 === 1
                      ? "black"
                      : props.clicks[props.index].value4 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"120px"}
                  left="33px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"120px"}
                  left="33px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 5 && (
            <>
              {props.clicks[props.index].value1 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("1")}
                  top={"10px"}
                  left="23px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"10px"}
                  left="23px"
                />
              )}
              {props.clicks[props.index].value2 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 2 })
                  }
                  top={"103px"}
                  left="25px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 2,
                    })
                  }
                  top={"103px"}
                  left="25px"
                  isborder={
                    props.clicks[props.index].value2 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value2 === 1
                      ? "black"
                      : props.clicks[props.index].value2 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}

              {props.clicks[props.index].value3 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 3 })
                  }
                  top={"120px"}
                  left="10px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 3,
                    })
                  }
                  top={"120px"}
                  left="10px"
                  isborder={
                    props.clicks[props.index].value3 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value3 === 1
                      ? "black"
                      : props.clicks[props.index].value3 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value4 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 4 })
                  }
                  top={"120px"}
                  left="38px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"120px"}
                  left="38px"
                  isborder={
                    props.clicks[props.index].value4 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value4 === 1
                      ? "black"
                      : props.clicks[props.index].value4 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"140px"}
                  left="10px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"140px"}
                  left="10px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"140px"}
                  left="35px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"140px"}
                  left="35px"
                  isborder={
                    props.clicks[props.index].value6 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value6 === 1
                      ? "black"
                      : props.clicks[props.index].value6 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 6 && (
            <>
              {props.clicks[props.index].value1 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("1")}
                  top={"20px"}
                  left="20px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"20px"}
                  left="20px"
                />
              )}
              {props.clicks[props.index].value2 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 2 })
                  }
                  top={"95px"}
                  left="20px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 2,
                    })
                  }
                  top={"95px"}
                  left="20px"
                  isborder={
                    props.clicks[props.index].value2 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value2 === 1
                      ? "black"
                      : props.clicks[props.index].value2 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}

              {props.clicks[props.index].value3 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 3 })
                  }
                  top={"110px"}
                  left="15px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 3,
                    })
                  }
                  top={"110px"}
                  left="8px"
                  isborder={
                    props.clicks[props.index].value3 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value3 === 1
                      ? "black"
                      : props.clicks[props.index].value3 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value4 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 4 })
                  }
                  top={"110px"}
                  left="28px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"110px"}
                  left="28px"
                  isborder={
                    props.clicks[props.index].value4 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value4 === 1
                      ? "black"
                      : props.clicks[props.index].value4 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"125px"}
                  left="8px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"125px"}
                  left="8px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"125px"}
                  left="28px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"125px"}
                  left="28px"
                  isborder={
                    props.clicks[props.index].value6 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value6 === 1
                      ? "black"
                      : props.clicks[props.index].value6 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 7 && (
            <>
              {props.clicks[props.index].value1 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("1")}
                  top={"20px"}
                  left="15px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"20px"}
                  left="15px"
                />
              )}
              {props.clicks[props.index].value2 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 2 })
                  }
                  top={"90px"}
                  left="23px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 2,
                    })
                  }
                  top={"90px"}
                  left="23px"
                  isborder={
                    props.clicks[props.index].value2 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value2 === 1
                      ? "black"
                      : props.clicks[props.index].value2 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}

              {props.clicks[props.index].value3 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 3 })
                  }
                  top={"106px"}
                  left="10px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 3,
                    })
                  }
                  top={"106px"}
                  left="10px"
                  isborder={
                    props.clicks[props.index].value3 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value3 === 1
                      ? "black"
                      : props.clicks[props.index].value3 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value4 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 4 })
                  }
                  top={"106px"}
                  left="40px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"106px"}
                  left="40px"
                  isborder={
                    props.clicks[props.index].value4 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value4 === 1
                      ? "black"
                      : props.clicks[props.index].value4 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"125px"}
                  left="10px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"125px"}
                  left="10px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"125px"}
                  left="40px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"125px"}
                  left="40px"
                  isborder={
                    props.clicks[props.index].value6 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value6 === 1
                      ? "black"
                      : props.clicks[props.index].value6 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 8 && (
            <>
              {props.clicks[props.index].value1 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("1")}
                  top={"20px"}
                  left="30px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"20px"}
                  left="30px"
                />
              )}
              {props.clicks[props.index].value2 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 2 })
                  }
                  top={"90px"}
                  left="23px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 2,
                    })
                  }
                  top={"90px"}
                  left="23px"
                  isborder={
                    props.clicks[props.index].value2 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value2 === 1
                      ? "black"
                      : props.clicks[props.index].value2 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}

              {props.clicks[props.index].value3 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 3 })
                  }
                  top={"106px"}
                  left="10px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 3,
                    })
                  }
                  top={"106px"}
                  left="10px"
                  isborder={
                    props.clicks[props.index].value3 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value3 === 1
                      ? "black"
                      : props.clicks[props.index].value3 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value4 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 4 })
                  }
                  top={"106px"}
                  left="40px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"106px"}
                  left="40px"
                  isborder={
                    props.clicks[props.index].value4 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value4 === 1
                      ? "black"
                      : props.clicks[props.index].value4 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"125px"}
                  left="10px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"125px"}
                  left="10px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"125px"}
                  left="40px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"125px"}
                  left="40px"
                  isborder={
                    props.clicks[props.index].value6 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value6 === 1
                      ? "black"
                      : props.clicks[props.index].value6 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 9 && (
            <>
              {props.clicks[props.index].value1 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("1")}
                  top={"20px"}
                  left="20px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"20px"}
                  left="20px"
                />
              )}
              {props.clicks[props.index].value2 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 2 })
                  }
                  top={"95px"}
                  left="20px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 2,
                    })
                  }
                  top={"95px"}
                  left="20px"
                  isborder={
                    props.clicks[props.index].value2 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value2 === 1
                      ? "black"
                      : props.clicks[props.index].value2 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}

              {props.clicks[props.index].value3 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 3 })
                  }
                  top={"110px"}
                  left="8px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 3,
                    })
                  }
                  top={"110px"}
                  left="8px"
                  isborder={
                    props.clicks[props.index].value3 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value3 === 1
                      ? "black"
                      : props.clicks[props.index].value3 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value4 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 4 })
                  }
                  top={"110px"}
                  left="28px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"110px"}
                  left="28px"
                  isborder={
                    props.clicks[props.index].value4 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value4 === 1
                      ? "black"
                      : props.clicks[props.index].value4 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"125px"}
                  left="8px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"125px"}
                  left="8px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"125px"}
                  left="28px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"125px"}
                  left="28px"
                  isborder={
                    props.clicks[props.index].value6 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value6 === 1
                      ? "black"
                      : props.clicks[props.index].value6 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 10 && (
            <>
              {props.clicks[props.index].value1 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("1")}
                  top={"10px"}
                  left="23px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"10px"}
                  left="23px"
                />
              )}
              {props.clicks[props.index].value2 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 2 })
                  }
                  top={"103px"}
                  left="25px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 2,
                    })
                  }
                  top={"103px"}
                  left="25px"
                  isborder={
                    props.clicks[props.index].value2 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value2 === 1
                      ? "black"
                      : props.clicks[props.index].value2 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}

              {props.clicks[props.index].value3 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 3 })
                  }
                  top={"120px"}
                  left="10px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 3,
                    })
                  }
                  top={"120px"}
                  left="10px"
                  isborder={
                    props.clicks[props.index].value3 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value3 === 1
                      ? "black"
                      : props.clicks[props.index].value3 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value4 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 4 })
                  }
                  top={"120px"}
                  left="38px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"120px"}
                  left="38px"
                  isborder={
                    props.clicks[props.index].value4 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value4 === 1
                      ? "black"
                      : props.clicks[props.index].value4 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"140px"}
                  left="10px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"140px"}
                  left="10px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"140px"}
                  left="35px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"140px"}
                  left="35px"
                  isborder={
                    props.clicks[props.index].value6 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value6 === 1
                      ? "black"
                      : props.clicks[props.index].value6 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 11 && (
            <>
              {props.clicks[props.index].value1 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("1")}
                  top={"20px"}
                  left="25px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"20px"}
                  left="25px"
                />
              )}
              {props.clicks[props.index].value2 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("2")}
                  top={"20px"}
                  left="16px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("2")}
                  top={"20px"}
                  left="16px"
                />
              )}

              {props.clicks[props.index].value3 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 3 })
                  }
                  top={"95px"}
                  left="22px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 3,
                    })
                  }
                  top={"95px"}
                  left="22px"
                  isborder={
                    props.clicks[props.index].value3 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value3 === 1
                      ? "black"
                      : props.clicks[props.index].value3 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value4 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 4 })
                  }
                  top={"120px"}
                  left="10px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"120px"}
                  left="10px"
                  isborder={
                    props.clicks[props.index].value4 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value4 === 1
                      ? "black"
                      : props.clicks[props.index].value4 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"120px"}
                  left="33px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"120px"}
                  left="33px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 12 && (
            <>
              {props.clicks[props.index].value1 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("1")}
                  top={"15px"}
                  left="14px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"15px"}
                  left="14px"
                />
              )}

              {props.clicks[props.index].value2 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 2 })
                  }
                  top={"103px"}
                  left="25px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 2,
                    })
                  }
                  top={"103px"}
                  left="25px"
                  isborder={
                    props.clicks[props.index].value2 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value2 === 1
                      ? "black"
                      : props.clicks[props.index].value2 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value3 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 3 })
                  }
                  top={"120px"}
                  left="10px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 3,
                    })
                  }
                  top={"120px"}
                  left="10px"
                  isborder={
                    props.clicks[props.index].value3 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value3 === 1
                      ? "black"
                      : props.clicks[props.index].value3 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value4 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 4 })
                  }
                  top={"120px"}
                  left="38px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"120px"}
                  left="38px"
                  isborder={
                    props.clicks[props.index].value4 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value4 === 1
                      ? "black"
                      : props.clicks[props.index].value4 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 13 && (
            <>
              {props.clicks[props.index].value1 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("1")}
                  top={"20px"}
                  left="16px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"20px"}
                  left="16px"
                />
              )}
              {props.clicks[props.index].value2 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("2")}
                  top={"20px"}
                  left="30px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("2")}
                  top={"20px"}
                  left="30px"
                />
              )}
              {props.clicks[props.index].value3 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("3")}
                  top={"20px"}
                  left="45px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("3")}
                  top={"20px"}
                  left="45px"
                />
              )}
              {props.clicks[props.index].value4 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 4 })
                  }
                  top={"103px"}
                  left="32px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"103px"}
                  left="32px"
                  isborder={
                    props.clicks[props.index].value4 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value4 === 1
                      ? "black"
                      : props.clicks[props.index].value4 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"120px"}
                  left="10px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"120px"}
                  left="10px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"120px"}
                  left="52px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"120px"}
                  left="52px"
                  isborder={
                    props.clicks[props.index].value6 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value6 === 1
                      ? "black"
                      : props.clicks[props.index].value6 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 14 && (
            <>
              {props.clicks[props.index].value1 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("1")}
                  top={"20px"}
                  left="13px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"20px"}
                  left="13px"
                />
              )}
              {props.clicks[props.index].value2 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("2")}
                  top={"20px"}
                  left="23px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("2")}
                  top={"20px"}
                  left="23px"
                />
              )}
              {props.clicks[props.index].value3 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("3")}
                  top={"20px"}
                  left="35px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("3")}
                  top={"20px"}
                  left="35px"
                />
              )}
              {props.clicks[props.index].value4 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 4 })
                  }
                  top={"103px"}
                  left="32px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"103px"}
                  left="32px"
                  isborder={
                    props.clicks[props.index].value4 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value4 === 1
                      ? "black"
                      : props.clicks[props.index].value4 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"120px"}
                  left="10px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"120px"}
                  left="10px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"120px"}
                  left="52px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"120px"}
                  left="52px"
                  isborder={
                    props.clicks[props.index].value6 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value6 === 1
                      ? "black"
                      : props.clicks[props.index].value6 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 15 && (
            <>
              {props.clicks[props.index].value1 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("1")}
                  top={"20px"}
                  left="24px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"20px"}
                  left="24px"
                />
              )}
              {props.clicks[props.index].value2 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("2")}
                  top={"20px"}
                  left="37px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("2")}
                  top={"20px"}
                  left="37px"
                />
              )}
              {props.clicks[props.index].value3 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 3 })
                  }
                  top={"103px"}
                  left="32px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 3,
                    })
                  }
                  top={"103px"}
                  left="32px"
                  isborder={
                    props.clicks[props.index].value3 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value3 === 1
                      ? "black"
                      : props.clicks[props.index].value3 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value4 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 4 })
                  }
                  top={"120px"}
                  left="10px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"120px"}
                  left="10px"
                  isborder={
                    props.clicks[props.index].value4 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value4 === 1
                      ? "black"
                      : props.clicks[props.index].value4 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"120px"}
                  left="52px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"120px"}
                  left="52px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {/* <GloblalDiv top={"120px"} left="10px" />
            <GloblalDiv top={"120px"} left="52px" /> */}
            </>
          )}
        </div>
      ) : (
        <div className="relative w-full h-full">
          {props.index === 0 && (
            <>
              {props.clicks[props.index].value4 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 4 })
                  }
                  top={"38px"}
                  left="10px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"38px"}
                  left="10px"
                  isborder={
                    props.clicks[props.index].value4 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value4 === 1
                      ? "black"
                      : props.clicks[props.index].value4 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"38px"}
                  left="52px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"38px"}
                  left="52px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"38px"}
                  left="30px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"38px"}
                  left="30px"
                  isborder={
                    props.clicks[props.index].value6 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value6 === 1
                      ? "black"
                      : props.clicks[props.index].value6 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 1 && (
            <>
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"38px"}
                  left="10px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"38px"}
                  left="10px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"38px"}
                  left="52px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"38px"}
                  left="52px"
                  isborder={
                    props.clicks[props.index].value6 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value6 === 1
                      ? "black"
                      : props.clicks[props.index].value6 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value7 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 7 })
                  }
                  top={"38px"}
                  left="30px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 7,
                    })
                  }
                  top={"38px"}
                  left="30px"
                  isborder={
                    props.clicks[props.index].value7 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value7 === 1
                      ? "black"
                      : props.clicks[props.index].value7 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 2 && (
            <>
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"38px"}
                  left="10px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"38px"}
                  left="10px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"38px"}
                  left="52px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"38px"}
                  left="52px"
                  isborder={
                    props.clicks[props.index].value6 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value6 === 1
                      ? "black"
                      : props.clicks[props.index].value6 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value7 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 7 })
                  }
                  top={"38px"}
                  left="30px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 7,
                    })
                  }
                  top={"38px"}
                  left="30px"
                  isborder={
                    props.clicks[props.index].value7 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value7 === 1
                      ? "black"
                      : props.clicks[props.index].value7 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 3 && (
            <>
              {props.clicks[props.index].value3 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 3 })
                  }
                  top={"38px"}
                  left="18px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 3,
                    })
                  }
                  top={"38px"}
                  left="18px"
                  isborder={
                    props.clicks[props.index].value3 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value3 === 1
                      ? "black"
                      : props.clicks[props.index].value3 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value4 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 4 })
                  }
                  top={"38px"}
                  left="52px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"38px"}
                  left="52px"
                  isborder={
                    props.clicks[props.index].value4 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value4 === 1
                      ? "black"
                      : props.clicks[props.index].value4 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"38px"}
                  left="35px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"38px"}
                  left="35px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 4 && (
            <>
              {props.clicks[props.index].value4 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 4 })
                  }
                  top={"38px"}
                  left="18px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"38px"}
                  left="18px"
                  isborder={
                    props.clicks[props.index].value4 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value4 === 1
                      ? "black"
                      : props.clicks[props.index].value4 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"38px"}
                  left="52px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"38px"}
                  left="52px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"38px"}
                  left="35px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"38px"}
                  left="35px"
                  isborder={
                    props.clicks[props.index].value6 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value6 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 5 && (
            <>
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"32px"}
                  left="12px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"32px"}
                  left="12px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"32px"}
                  left="52px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"32px"}
                  left="52px"
                  isborder={
                    props.clicks[props.index].value6 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value6 === 1
                      ? "black"
                      : props.clicks[props.index].value6 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 6 && (
            <>
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"30px"}
                  left="14px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"30px"}
                  left="14px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"30px"}
                  left="52px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"30px"}
                  left="52px"
                  isborder={
                    props.clicks[props.index].value6 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value6 === 1
                      ? "black"
                      : props.clicks[props.index].value6 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 7 && (
            <>
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"30px"}
                  left="11px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"30px"}
                  left="11px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"30px"}
                  left="52px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"30px"}
                  left="52px"
                  isborder={
                    props.clicks[props.index].value6 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value6 === 1
                      ? "black"
                      : props.clicks[props.index].value6 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 8 && (
            <>
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"30px"}
                  left="11px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"30px"}
                  left="11px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"30px"}
                  left="52px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"30px"}
                  left="52px"
                  isborder={
                    props.clicks[props.index].value6 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value6 === 1
                      ? "black"
                      : props.clicks[props.index].value6 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 9 && (
            <>
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"30px"}
                  left="11px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"30px"}
                  left="11px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"30px"}
                  left="52px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"30px"}
                  left="52px"
                  isborder={
                    props.clicks[props.index].value6 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value6 === 1
                      ? "black"
                      : props.clicks[props.index].value6 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 10 && (
            <>
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"32px"}
                  left="12px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"32px"}
                  left="12px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"32px"}
                  left="52px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"32px"}
                  left="52px"
                  isborder={
                    props.clicks[props.index].value6 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value6 === 1
                      ? "black"
                      : props.clicks[props.index].value6 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 11 && (
            <>
              {props.clicks[props.index].value4 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 4 })
                  }
                  top={"38px"}
                  left="15px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"38px"}
                  left="15px"
                  isborder={
                    props.clicks[props.index].value4 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value4 === 1
                      ? "black"
                      : props.clicks[props.index].value4 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"38px"}
                  left="52px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"38px"}
                  left="52px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"38px"}
                  left="35px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"38px"}
                  left="35px"
                  isborder={
                    props.clicks[props.index].value6 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value6 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 12 && (
            <>
              {props.clicks[props.index].value3 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 3 })
                  }
                  top={"38px"}
                  left="15px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 3,
                    })
                  }
                  top={"38px"}
                  left="15px"
                  isborder={
                    props.clicks[props.index].value3 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value3 === 1
                      ? "black"
                      : props.clicks[props.index].value3 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value4 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 4 })
                  }
                  top={"38px"}
                  left="52px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"38px"}
                  left="52px"
                  isborder={
                    props.clicks[props.index].value4 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value4 === 1
                      ? "black"
                      : props.clicks[props.index].value4 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"38px"}
                  left="35px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"38px"}
                  left="35px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 13 && (
            <>
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"38px"}
                  left="10px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"38px"}
                  left="10px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"38px"}
                  left="52px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"38px"}
                  left="52px"
                  isborder={
                    props.clicks[props.index].value6 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value6 === 1
                      ? "black"
                      : props.clicks[props.index].value6 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value7 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 7 })
                  }
                  top={"38px"}
                  left="30px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 7,
                    })
                  }
                  top={"38px"}
                  left="30px"
                  isborder={
                    props.clicks[props.index].value7 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value7 === 1
                      ? "black"
                      : props.clicks[props.index].value7 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 14 && (
            <>
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"38px"}
                  left="10px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"38px"}
                  left="10px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"38px"}
                  left="52px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"38px"}
                  left="52px"
                  isborder={
                    props.clicks[props.index].value6 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value6 === 1
                      ? "black"
                      : props.clicks[props.index].value6 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value7 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 7 })
                  }
                  top={"38px"}
                  left="30px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 7,
                    })
                  }
                  top={"38px"}
                  left="30px"
                  isborder={
                    props.clicks[props.index].value7 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value7 === 1
                      ? "black"
                      : props.clicks[props.index].value7 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
          {props.index === 15 && (
            <>
              {props.clicks[props.index].value4 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 4 })
                  }
                  top={"38px"}
                  left="10px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"38px"}
                  left="10px"
                  isborder={
                    props.clicks[props.index].value4 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value4 === 1
                      ? "black"
                      : props.clicks[props.index].value4 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"38px"}
                  left="52px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"38px"}
                  left="52px"
                  isborder={
                    props.clicks[props.index].value5 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value5 === 1
                      ? "black"
                      : props.clicks[props.index].value5 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"38px"}
                  left="30px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"38px"}
                  left="30px"
                  isborder={
                    props.clicks[props.index].value6 === 4 ? true : false
                  }
                  color={
                    props.clicks[props.index].value6 === 1
                      ? "black"
                      : props.clicks[props.index].value6 === 2
                      ? "gray"
                      : "white"
                  }
                />
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

// div for the dots

const GloblalVisibleDiv = ({
  onClickVisibleDiv,
  top,
  left,
  color,
  isborder,
}: any) => (
  <div
    onClick={onClickVisibleDiv}
    style={{
      position: "absolute",
      top: top,
      left: top < 6 ? left - 13 : left,
      width: "15px",
      height: "15px",
      backgroundColor: color,
      borderRadius: "50%",
      transform: "translate(-50%, -50%)",
      cursor: "pointer",
      border: isborder ? "1px solid red" : "",
    }}
    className="z-[99992]"
  />
);
const GloblalDiv = ({ top, left, color, onClick }: any) => (
  <div
    onClick={onClick}
    style={{
      position: "absolute",
      top: top,
      left: top < 6 ? left - 13 : left,
      width: "15px",
      height: "15px",
      backgroundColor: "grey",
      borderRadius: "50%",
      transform: "translate(-50%, -50%)",
      cursor: "pointer",
    }}
    className="hover:opacity-100 opacity-0 z-[99992]"
  />
);
