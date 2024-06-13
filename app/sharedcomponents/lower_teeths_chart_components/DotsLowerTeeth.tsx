import React from "react";

interface Props {
  clicks: any;
  index: number;
  setClicks: any;
  setCavityModal: any;
  isOCCTeeths?: boolean;
  updateImages?: any;
}
export default function DotsLowerTeeth(props: Props) {
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
        className="h-[65%] w-full absolute bottom-0 left-0 z-[99991]"
      ></div>
      {!props.isOCCTeeths ? (
        <div className="relative w-full h-full ">
          {props.index === 0 && (
            <>
              {props.clicks[props.index].value1 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("1")}
                  top={"120px"}
                  left="8px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"120px"}
                  left="8px"
                />
              )}
              {props.clicks[props.index].value2 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("2")}
                  top={"125px"}
                  left="27px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("2")}
                  top={"125px"}
                  left="27px"
                />
              )}
              {props.clicks[props.index].value3 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 3 })
                  }
                  top={"33px"}
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
                  top={"33px"}
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
                  top={"50px"}
                  left="30px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"50px"}
                  left="30px"
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
                  top={"33px"}
                  left="59px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"33px"}
                  left="59px"
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
          {props.index === 1 && (
            <>
              {props.clicks[props.index].value1 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("1")}
                  top={"125px"}
                  left="5px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"125px"}
                  left="5px"
                />
              )}
              {props.clicks[props.index].value2 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("2")}
                  top={"128px"}
                  left="25px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("2")}
                  top={"128px"}
                  left="25px"
                />
              )}
              {props.clicks[props.index].value3 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 3 })
                  }
                  top={"30px"}
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
                  top={"30px"}
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
                  top={"50px"}
                  left="30px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"50px"}
                  left="30px"
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
                  top={"30px"}
                  left="46px"
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
                  left="46px"
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
          {props.index === 2 && (
            <>
              {props.clicks[props.index].value1 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("1")}
                  top={"130px"}
                  left="10px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"130px"}
                  left="10px"
                />
              )}
              {props.clicks[props.index].value2 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("2")}
                  top={"130px"}
                  left="35px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("2")}
                  top={"130px"}
                  left="35px"
                />
              )}
              {props.clicks[props.index].value3 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 3 })
                  }
                  top={"30px"}
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
                  top={"30px"}
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
                  top={"50px"}
                  left="30px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"50px"}
                  left="30px"
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
                  top={"30px"}
                  left="55px"
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
                  left="55px"
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
          {props.index === 3 && (
            <>
              {props.clicks[props.index].value1 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("1")}
                  top={"130px"}
                  left="10px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"130px"}
                  left="10px"
                />
              )}

              {props.clicks[props.index].value2 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 2 })
                  }
                  top={"30px"}
                  left="8px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 2,
                    })
                  }
                  top={"30px"}
                  left="8px"
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
                  top={"50px"}
                  left="20px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 3,
                    })
                  }
                  top={"50px"}
                  left="20px"
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
                  top={"30px"}
                  left="30px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"30px"}
                  left="30px"
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
                  top={"130px"}
                  left="10px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"130px"}
                  left="10px"
                />
              )}

              {props.clicks[props.index].value2 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 2 })
                  }
                  top={"30px"}
                  left="8px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 2,
                    })
                  }
                  top={"30px"}
                  left="8px"
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
                  top={"50px"}
                  left="20px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 3,
                    })
                  }
                  top={"50px"}
                  left="20px"
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
                  top={"30px"}
                  left="30px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"30px"}
                  left="30px"
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
          {props.index === 5 && (
            <>
              {props.clicks[props.index].value1 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("1")}
                  top={"140px"}
                  left="15px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"140px"}
                  left="15px"
                />
              )}

              {props.clicks[props.index].value2 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 2 })
                  }
                  top={"20px"}
                  left="8px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 2,
                    })
                  }
                  top={"20px"}
                  left="8px"
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"60px"}
                  left="23px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"60px"}
                  left="23px"
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
                  top={"20px"}
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
                  top={"20px"}
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
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"130px"}
                  left="10px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"130px"}
                  left="10px"
                />
              )}

              {props.clicks[props.index].value2 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 2 })
                  }
                  top={"25px"}
                  left="8px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 2,
                    })
                  }
                  top={"25px"}
                  left="8px"
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"55px"}
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
                  top={"55px"}
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
                  top={"25px"}
                  left="25px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"25px"}
                  left="25px"
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
                  top={"40px"}
                  left="25px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"40px"}
                  left="25px"
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
                  top={"130px"}
                  left="12px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"130px"}
                  left="12px"
                />
              )}

              {props.clicks[props.index].value2 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 2 })
                  }
                  top={"25px"}
                  left="8px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 2,
                    })
                  }
                  top={"25px"}
                  left="8px"
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"55px"}
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
                  top={"55px"}
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
                  top={"25px"}
                  left="25px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"25px"}
                  left="25px"
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
                  top={"40px"}
                  left="25px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"40px"}
                  left="25px"
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
                  top={"130px"}
                  left="18px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"130px"}
                  left="18px"
                />
              )}

              {props.clicks[props.index].value2 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 2 })
                  }
                  top={"25px"}
                  left="8px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 2,
                    })
                  }
                  top={"25px"}
                  left="8px"
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"55px"}
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
                  top={"55px"}
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
                  top={"25px"}
                  left="25px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"25px"}
                  left="25px"
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
                  top={"40px"}
                  left="25px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"40px"}
                  left="25px"
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
                  top={"130px"}
                  left="20px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"130px"}
                  left="20px"
                />
              )}

              {props.clicks[props.index].value2 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 2 })
                  }
                  top={"25px"}
                  left="8px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 2,
                    })
                  }
                  top={"25px"}
                  left="8px"
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"55px"}
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
                  top={"55px"}
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
                  top={"25px"}
                  left="25px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"25px"}
                  left="25px"
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
                  top={"40px"}
                  left="25px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 6,
                    })
                  }
                  top={"40px"}
                  left="25px"
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
                  top={"140px"}
                  left="28px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"140px"}
                  left="28px"
                />
              )}

              {props.clicks[props.index].value2 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 2 })
                  }
                  top={"20px"}
                  left="8px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 2,
                    })
                  }
                  top={"20px"}
                  left="8px"
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"60px"}
                  left="23px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"60px"}
                  left="23px"
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
                  top={"20px"}
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
                  top={"20px"}
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
              {props.clicks[props.index].value6 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 6 })
                  }
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"130px"}
                  left="27px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"130px"}
                  left="27px"
                />
              )}

              {props.clicks[props.index].value2 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 2 })
                  }
                  top={"30px"}
                  left="8px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 2,
                    })
                  }
                  top={"30px"}
                  left="8px"
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
                  top={"50px"}
                  left="20px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 3,
                    })
                  }
                  top={"50px"}
                  left="20px"
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
                  top={"30px"}
                  left="30px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"30px"}
                  left="30px"
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
          {props.index === 12 && (
            <>
              {props.clicks[props.index].value1 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("1")}
                  top={"130px"}
                  left="30px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"130px"}
                  left="30px"
                />
              )}

              {props.clicks[props.index].value2 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 2 })
                  }
                  top={"30px"}
                  left="8px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 2,
                    })
                  }
                  top={"30px"}
                  left="8px"
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
                  top={"50px"}
                  left="20px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 3,
                    })
                  }
                  top={"50px"}
                  left="20px"
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
                  top={"30px"}
                  left="30px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"30px"}
                  left="30px"
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
                  top={"130px"}
                  left="30px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"130px"}
                  left="30px"
                />
              )}
              {props.clicks[props.index].value2 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("2")}
                  top={"130px"}
                  left="58px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("2")}
                  top={"130px"}
                  left="58px"
                />
              )}
              {props.clicks[props.index].value3 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 3 })
                  }
                  top={"30px"}
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
                  top={"30px"}
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
                  top={"50px"}
                  left="30px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"50px"}
                  left="30px"
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
                  top={"30px"}
                  left="55px"
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
                  left="55px"
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
          {props.index === 14 && (
            <>
              {props.clicks[props.index].value1 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("1")}
                  top={"125px"}
                  left="25px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"125px"}
                  left="25px"
                />
              )}
              {props.clicks[props.index].value2 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("2")}
                  top={"125px"}
                  left="50px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("2")}
                  top={"125px"}
                  left="50px"
                />
              )}
              {props.clicks[props.index].value3 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 3 })
                  }
                  top={"30px"}
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
                  top={"30px"}
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
                  top={"50px"}
                  left="30px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"50px"}
                  left="30px"
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
                  top={"30px"}
                  left="46px"
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
                  left="46px"
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
          {props.index === 15 && (
            <>
              {props.clicks[props.index].value1 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("1")}
                  top={"120px"}
                  left="40px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("1")}
                  top={"120px"}
                  left="40px"
                />
              )}
              {props.clicks[props.index].value2 === 1 ? (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() => onClickVisibleDiv("2")}
                  top={"120px"}
                  left="60px"
                  color="#cfb53b"
                />
              ) : (
                <GloblalDiv
                  onClick={() => onClick("2")}
                  top={"120px"}
                  left="60px"
                />
              )}
              {props.clicks[props.index].value3 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 3 })
                  }
                  top={"33px"}
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
                  top={"33px"}
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
                  top={"50px"}
                  left="30px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 4,
                    })
                  }
                  top={"50px"}
                  left="30px"
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
                  top={"33px"}
                  left="59px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"33px"}
                  left="59px"
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
                  left="15px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"40px"}
                  left="15px"
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"25px"}
                  left="15px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"25px"}
                  left="15px"
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
                  top={"25px"}
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
                  top={"25px"}
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
          )}{" "}
          {props.index === 7 && (
            <>
              {props.clicks[props.index].value5 === 0 ? (
                <GloblalDiv
                  onClick={() =>
                    props?.setCavityModal({ index: props.index, value: 5 })
                  }
                  top={"25px"}
                  left="15px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"25px"}
                  left="15px"
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
                  top={"25px"}
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
                  top={"25px"}
                  left="45px"
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
                  top={"25px"}
                  left="15px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"25px"}
                  left="15px"
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
                  top={"25px"}
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
                  top={"25px"}
                  left="45px"
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
                  top={"25px"}
                  left="15px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"25px"}
                  left="15px"
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
                  top={"25px"}
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
                  top={"25px"}
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
                  top={"40px"}
                  left="15px"
                />
              ) : (
                <GloblalVisibleDiv
                  onClickVisibleDiv={() =>
                    props?.setCavityModal({
                      index: props.index,
                      value: 5,
                    })
                  }
                  top={"40px"}
                  left="15px"
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
                  top={"40px"}
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
      width: "12px",
      height: "12px",
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
      width: "12px",
      height: "12px",
      backgroundColor: "grey",
      borderRadius: "50%",
      transform: "translate(-50%, -50%)",
      cursor: "pointer",
    }}
    className="hover:opacity-100 opacity-30 z-[99992]"
  />
);
