import { FetchData } from "../hooks/fetchDataHooks";
import { fetchDettaglioProdotti } from "./functions/api";
import { withRouter } from "react-router-dom";
import CardDetails from "../common/cards/cardDettaglioProdotti";
import CardLoadingSection from "../common/cards/cardLoadingSection";
import AlertCustom from "../common/alert/alert";

const Details = (props) => {
  const id = props.match.params.id;
  const { isLoading, isError, data } = FetchData(() =>
    fetchDettaglioProdotti(id)
  );

  return (
    <>
      {isLoading ? (
        <CardLoadingSection />
      ) : isError ? (
        <AlertCustom />
      ) : data ? (
        <>
          <div className="lablecalorie">
            <h1>{data.title}</h1>
            <img src={data.images[0].uri} className="imgCalorie" />
          </div>
          <CardDetails
            kcal={data.kcal}
            carboidrati={data.macros.carbohydrates}
            proteine={data.macros.wheys}
            grassi={data.macros.fats}
          />
        </>
      ) : null}
    </>
  );
};
export default withRouter(Details);
