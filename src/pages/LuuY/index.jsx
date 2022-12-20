function LuuY() {
  const data = [
    {
      title:
        "Các trang web lừa đảo thường có dấu hiệu như: sai chính tả, hành văn lủng củng, lỗi font và thường để cập đến vấn đề mơ hồ, không rõ ràng.",
    },
    {
      title:
        "Trước khi click vào để thực hiện một hành động nào đó, hãy nhìn xem bên góc trái bên dưới sẽ hiển thị link kiểm tra xem có dấu hiệu độc hại hay không.",
    },
    {
      title:
        "Không nên cài quá nhiều plugin/extension mà không sử dụng, nên cài các plugin đã được kiểm định bởi trình duyệt hoặc tổ chức có thẩm quyền.",
    },
    {
      title: "Sử dụng các trình duyệt đáng tin cậy, google chrome.",
    },
    {
      title: "Không nên tắt tường lửa khi duyệt web.",
    },
    {
      title: "Cập nhập trình duyệt web và các plugin/extension thường xuyên.",
    },
    {
      title:
        "Cân nhắc sử dụng tính năng Remember Me đổi với các dịch vụ quan trọng.",
    },
    {
      title: "Không nên sử dụng một mật khẩu cho nhiều website khác nhau.",
    },
    {
      title:
        "Không chạy trình duyệt với người dùng có quyền quản trị (Run as adminstrator).",
    },
    {
      title:
        "Không sử dụng tài khoản quan trọng được sử dụng cho các dịch vụ quan trọng như tài chính, ngân hàng cho các trang web khác.",
    },
  ];

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container">
        <h1>Một số lưu ý khi lướt web</h1>
        {data.map((item, index) => {
          return (
            <p style={{ fontSize: "16px" }} key={item.title}>
              {index + 1 + ". " + item.title}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default LuuY;
