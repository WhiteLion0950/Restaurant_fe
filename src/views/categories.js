import React, { useState, useEffect } from "react";
import CardLoadingSection from "../common/cards/cardLoadingSection";
import AlertCustom from "../common/alert/alert";
import { fetchCategories, fetchCategory } from "./functions/api";
import { Row, Col } from "react-bootstrap";
import Card from "../common/cards/card";
import { withRouter } from "react-router-dom";
import img from "../common/img/reactApphero.png";
import { connect } from "react-redux";
import { addCounter, decrementCounter, setCounter } from "../redux/actions";
import {FetchData} from"../hooks/fetchDataHooks"

const Categories = (props) => {
  const {isLoading, isError, data, retryFetch} = FetchData(()=> fetchCategories());
  
  return (
    <>
      {isLoading &&<CardLoadingSection />}
      {isError && <AlertCustom retryCallBack={() =>retryFetch()} />}
      {!isLoading && !isError && data &&
        <>
          <img src={img} className="hero" />
          <Row>
            {data.map((current, idx) => {
              return (
                <Col md={4} key={"card_loading_" + idx}>
                  <Card
                    callback={() => {
                      props.history.push(`/categories/${current.id}`);
                    }}
                    urlImg={current.images[0].uri}
                    title={current.title}
                    subTitle={current.subtitle}
                    description={current.description}
                    key={"cardIndex" + idx}
                  />
                </Col>
              );
            })}{" "}
          </Row>
        </>
      } : null}
    </>
  );
};
export default withRouter(Categories);
