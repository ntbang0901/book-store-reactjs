import CategoryItem from "./CategoryItem";
import "./Category.scss";

function Category() {
  const listcategory = [
    // {
    //   title: "Sách giáo khoa",
    //   image:
    //     "https://vnmedia.monkeyuni.net/E_Learning/page/0_NguVan10T1_07_02_2022_v7.jpg",
    // },
    {
      title: "Balo",
      name: "balo",
      image: "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/100x100_balo.png",
      options: {
        loaisanphamid: 1,
        stationery: {
          loaivpp: 12,
        },
      },
    },
    {
      title: "Bút",
      name: "but-viet",
      image: "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/100x100_but.png",
      options: {
        loaisanphamid: 1,
        stationery: {
          loaivpp: 12,
        },
      },
    },
    {
      title: "Tập",
      name: "tap-sach",
      image: "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/100x100_tap.png",
      options: {
        loaisanphamid: 1,
        stationery: {
          loaivpp: 12,
        },
      },
    },
    {
      title: "Sách tham khảo",
      name: "sach-tham-khao",
      image:
        "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Sach-tham-khao.jpg",
      options: {
        loaisanphamid: 2,
        book: {
          theloai: 1,
        },
      },
    },
    {
      title: "Sách ngoại ngữ",
      name: "sach-ngoai-ngu",
      image:
        "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Sach-hoc-ngoai-ngu.jpg",
      options: {
        loaisanphamid: 2,
        book: {
          theloai: 1,
        },
      },
    },
    {
      title: "Văn học",

      name: "van-hoc",
      image:
        "https://cdn0.fahasa.com/media/wysiwyg/icon-menu/category/van-hoc.png",
      options: {
        loaisanphamid: 2,
        book: {
          theloai: 8,
        },
      },
    },
    {
      title: "Foreign Books",
      name: "foreign-books",
      image:
        "https://cdn0.fahasa.com/media/wysiwyg/icon-menu/category/foreign-books.png",
      options: {
        loaisanphamid: 2,
        book: {
          theloai: 1,
        },
      },
    },
    {
      title: "Đồ thơi",
      name: "do-choi",
      image:
        "https://cdn0.fahasa.com/media/wysiwyg/icon-menu/category/do-choi.png",
      options: {
        loaisanphamid: 1,
        stationery: {
          loaivpp: 12,
        },
      },
    },
    {
      title: "Tâm lý kỹ năng",
      name: "tam-ly-ky-nang",
      image:
        "https://cdn0.fahasa.com/media/wysiwyg/icon-menu/category/tam-ly-ky-nang.png",
      options: {
        loaisanphamid: 2,
        book: {
          theloai: 1,
        },
      },
    },
    {
      title: "Kinh tế",
      name: "kinh-te",
      image:
        "https://cdn0.fahasa.com/media/wysiwyg/icon-menu/category/kinh-te.png",
      options: {
        loaisanphamid: 2,
        book: {
          theloai: 1,
        },
      },
    },
  ];
  const newListCategory = () => {
    let newListCategory = [...listcategory];
    if (listcategory.length > 20) {
      newListCategory = listcategory.slice(0, 20);
    }
    return newListCategory;
  };

  const newList = newListCategory();
  console.log(newList);

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  return (
    <div className="buyby-category">
      <div className="container container-inner">
        <h2 className="title">Mua sắm theo danh mục</h2>
        <div className="list-category">
          {newList.map((item) => (
            <CategoryItem item={item} key={uuidv4()} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
