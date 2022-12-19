import Header from "../../components/layouts/components/Header";

function DefaultLayoutAdmin({ children }) {
  return (
    <div className="warpper">
      <Header />
      <div style={{ marginTop: "100px" }} className="">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayoutAdmin;
