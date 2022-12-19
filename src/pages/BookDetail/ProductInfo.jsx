function ProductInfo({ data }) {
  const info = {
    name: "Thông tin chi tiết",
    product: data.sach
      ? [
          {
            code: "id",
            name: "Mã sách",
            value: data?.id,
          },
          {
            code: "soluongton",
            name: "Số lượng tồn",
            value: data?.soluongton,
          },
          {
            code: "kichthuoc",
            name: "Kích thước",
            value: data?.kichthuoc,
          },
          {
            code: "tacgia",
            name: "Tác gia",
            value: data?.sach.tacgia.ten,
          },
          {
            code: "nhaphathanh",
            name: "Nhà phát hành",
            value: data?.sach.nhaphathanh.ten,
          },
          {
            code: "theloai",
            name: "Thể loại",
            value: data?.sach.theloai.mota,
          },
          {
            code: "mota",
            name: "Mô tả",
            value: data?.mota,
          },
        ]
      : [
          {
            code: "id",
            name: "Mã văn phòng phẩm",
            value: data?.id,
          },
          {
            code: "soluongton",
            name: "Số lượng tồn",
            value: data?.soluongton,
          },
          {
            code: "kichthuoc",
            name: "Kích thước",
            value: data?.kichthuoc,
          },
          {
            code: "thuonghieu",
            name: "Thương hiệu",
            value: data?.vanphongpham.thuonghieu,
          },
          {
            code: "xuatxu",
            name: "Xuất xứ",
            value: data?.vanphongpham.xuatxu,
          },
          {
            code: "kieudang",
            name: "Kiểu dáng",
            value: data?.vanphongpham.kieudang,
          },
          {
            code: "loaivpp",
            name: "Kiểu dáng",
            value: data?.vanphongpham.loaivpp.ten,
          },
          {
            code: "mota",
            name: "Mô tả",
            value: data?.mota,
          },
        ],
  };

  return (
    <div className="product-view-info">
      <h2 className="product-view-info-title">{info.name}</h2>
      <div className="product-view-info-content">
        <div className="product-view-info-content-additional">
          <table>
            <colgroup>
              <col width="25%" />
              <col />
            </colgroup>
            <tbody>
              {info.product.map((item) => (
                <tr key={item.code}>
                  <th>{item.name}</th>
                  <td>
                    <p>{item.value}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="product-view-info-content-desc"></div>
      </div>
    </div>
  );
}

export default ProductInfo;
