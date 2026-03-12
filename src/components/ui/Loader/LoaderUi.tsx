import "./LoadUiStyle.scss";

export default function LoaderUi() {
  return (
    <div className="container">
      <div className={`container-full fetch__progress`}>
        <div className={`fetch__progress__bar`}></div>
      </div>
    </div>
  );
}
