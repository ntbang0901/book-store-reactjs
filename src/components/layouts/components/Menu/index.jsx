import Tippy from "@tippyjs/react/headless";
import { useState } from "react";
import { Wrapper as PopperWrapper } from "../Popper";

import "./MenuCategory.scss";

function Menu({ children }) {
  const menu = [
    {
      title: "Sách trong nước",
      content: [
        {
          title: "Văn học",
          content: ["Tiểu thuyết", "Truyện ngắn-Tản văn", "Ngôn tình"],
        },
        {
          title: "Kinh tế",
          content: [
            "Quản trị-Lãnh đạo",
            "Marketing-Bán hàng",
            "Phân tích kinh tế",
          ],
        },
        {
          title: "Tâm lý kỹ năng sống",
          content: [
            "Kỹ năng sống",
            "Rèn luyện nhân cách",
            "Tâm lý",
            "Sách cho tuổi mới lớn",
          ],
        },
        {
          title: "Nuôi dạy con",
          content: ["Tiểu thuyết", "Truyện ngắn-Tản văn", "Ngôn tình"],
        },
        {
          title: "Sách thiếu nhi",
          content: ["Tiểu thuyết", "Truyện ngắn-Tản văn", "Ngôn tình"],
        },
        {
          title: "tiểu sử hồi ký",
          content: ["Tiểu thuyết", "Truyện ngắn-Tản văn", "Ngôn tình"],
        },
      ],
    },
    {
      title: "Đồ chơi",
      content: [
        {
          title: "Văn học 1",
          content: ["Tiểu thuyết", "Truyện ngắn-Tản văn", "Ngôn tình"],
        },
        {
          title: "Kinh tế 1",
          content: ["Tiểu thuyết", "Truyện ngắn-Tản văn", "Ngôn tình"],
        },
        {
          title: "Tâm lý kỹ năng sống 1",
          content: ["Tiểu thuyết", "Truyện ngắn-Tản văn", "Ngôn tình"],
        },
        {
          title: "Nuôi dạy con 1",
          content: ["Tiểu thuyết", "Truyện ngắn-Tản văn", "Ngôn tình"],
        },
        {
          title: "Sách thiếu nhi 1",
          content: ["Tiểu thuyết", "Truyện ngắn-Tản văn", "Ngôn tình"],
        },
        {
          title: "tiểu sử hồi ký 1",
          content: ["Tiểu thuyết", "Truyện ngắn-Tản văn", "Ngôn tình"],
        },
      ],
    },
    {
      title: "Dụng cụ học tập",
      content: [
        {
          title: "Văn học 2",
          content: ["Tiểu thuyết", "Truyện ngắn-Tản văn", "Ngôn tình"],
        },
        {
          title: "Kinh tế 2",
          content: ["Tiểu thuyết", "Truyện ngắn-Tản văn", "Ngôn tình"],
        },
        {
          title: "Tâm lý kỹ năng sống 2",
          content: ["Tiểu thuyết", "Truyện ngắn-Tản văn", "Ngôn tình"],
        },
        {
          title: "Nuôi dạy con 2",
          content: ["Tiểu thuyết", "Truyện ngắn-Tản văn", "Ngôn tình"],
        },
        {
          title: "Sách thiếu nhi 2",
          content: ["Tiểu thuyết", "Truyện ngắn-Tản văn", "Ngôn tình"],
        },
        {
          title: "tiểu sử hồi ký 2",
          content: ["Tiểu thuyết", "Truyện ngắn-Tản văn", "Ngôn tình"],
        },
      ],
    },
  ];

  const [content, setContent] = useState(menu[0]);

  const handleChangeContent = (contentInput) => {
    setContent(contentInput);
  };

  return (
    <Tippy
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className="menu-category" tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <div className="content">
              <div className="content-left">
                <h2 className="col-12">Danh Mục sản phẩm</h2>

                <ul className="list-menu">
                  {menu.map((item, index) => (
                    <li
                      className="menu-item"
                      onMouseEnter={() => handleChangeContent(item)}
                      key={index}>
                      <span>{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="content-right">
                <h2>{content.title}</h2>

                <div className="row">
                  {content?.content?.length > 0 ? (
                    content?.content.map((item, index) => (
                      <div key={index} className="col-3">
                        <div className="inner">
                          <h4 className="title-content">{item.title}</h4>
                          <ul className="menu-list">
                            {item?.content.map((contentItem, index) => (
                              <li key={index} className="menu-item">
                                <span>{contentItem}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div>Rỗng</div>
                  )}
                </div>
              </div>
            </div>
          </PopperWrapper>
        </div>
      )}>
      {children}
    </Tippy>
  );
}

export default Menu;
