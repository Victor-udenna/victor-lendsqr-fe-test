import "./EmptyStateStyle.scss";
import emptyStateImg from "../../../assets/images/emptyState.svg";

type Emptystate = {
  title: string;
  desc: string;
};

const EmptyState = ({ title, desc }: Emptystate) => {
  return (
    <section className="empty__state">
      <p>{title}</p>
      <img alt="empty state image" className="empty__state__img" src={emptyStateImg} />
      <p>{desc}</p>
    </section>
  );
};

export default EmptyState;
