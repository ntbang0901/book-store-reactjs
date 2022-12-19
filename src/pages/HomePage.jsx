import { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderListItem from "../components/layouts/components/SliderListItem";
import * as actions from "../actions";
import { getProductsApi } from "../services/productService";
import Books from "./Books";
import VPP from "./VPP";
const FeatureBook = lazy(() => import("./FeaturedBook"));
const Category = lazy(() => import("./Category"));

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState([]);
  const [bookTN, setBookTN] = useState([]);
  const [dochoi, setDochoi] = useState([]);

  const FecthData = async (setData, id, ten, page, elementOfPage, options) => {
    try {
      let res = await getProductsApi(id, ten, page, elementOfPage, options);
      if (res.data.error === 0) {
        setData(res.data.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const product_list = [
    {
      type_id: "simple",
      type: "simple",
      product_id: "411117",
      product_name: "Dây Lụa Móc In 1F5 - Màu Tím",
      product_finalprice: "13.000",
      product_price: "18.500",
      rating_html:
        "<div class='ratings'>\n\t\t\t\t<div class='rating-box'>\n\t\t\t\t    <div class='rating' style='width:0%'></div>\n\t\t\t\t</div>\n\t\t\t    <div class='amount'>(0)</div>\n\t\t\t</div>",
      soon_release: "0",
      product_url: "https://www.fahasa.com/day-lua-moc-in-1f5-mau-tim.html",
      image_src:
        "https://cdn0.fahasa.com/media/catalog/product/1/9/1901011578702-mau10.jpg",
      discount: 30,
      discount_label_html:
        '<div class="label-pro-sale m-label-pro-sale"><span class="p-sale-label discount-l-fs">30%</span></div>',
      episode: null,
    },
    {
      type_id: "simple",
      type: "simple",
      product_id: "408760",
      product_name: "Ống Mực  Bút Máy 0025 - Mực Đen",
      product_finalprice: "3.000",
      product_price: "4.500",
      rating_html:
        "<div class='ratings'>\n\t\t\t\t<div class='rating-box'>\n\t\t\t\t    <div class='rating' style='width:0%'></div>\n\t\t\t\t</div>\n\t\t\t    <div class='amount'>(0)</div>\n\t\t\t</div>",
      soon_release: "0",
      product_url: "https://www.fahasa.com/ong-muc-but-may-0025-muc-den.html",
      image_src:
        "https://cdn0.fahasa.com/media/catalog/product/3/9/3900000009027-mau2_1_.jpg",
      discount: 33,
      discount_label_html:
        '<div class="label-pro-sale m-label-pro-sale"><span class="p-sale-label discount-l-fs">33%</span></div>',
      episode: null,
    },
    {
      type_id: "simple",
      type: "simple",
      product_id: "408758",
      product_name: "Ống Mực  Bút Máy 0025 - Mực Xanh",
      product_finalprice: "3.000",
      product_price: "4.500",
      rating_html:
        "<div class='ratings'>\n\t\t\t\t<div class='rating-box'>\n\t\t\t\t    <div class='rating' style='width:0%'></div>\n\t\t\t\t</div>\n\t\t\t    <div class='amount'>(0)</div>\n\t\t\t</div>",
      soon_release: "0",
      product_url:
        "https://www.fahasa.com/ong-muc-but-may-0025-muc-xanh-408758.html",
      image_src:
        "https://cdn0.fahasa.com/media/catalog/product/i/m/image_243420_1.jpg",
      discount: 33,
      discount_label_html:
        '<div class="label-pro-sale m-label-pro-sale"><span class="p-sale-label discount-l-fs">33%</span></div>',
      episode: null,
    },
    {
      type_id: "simple",
      type: "simple",
      product_id: "407408",
      product_name:
        "Bìa Nút A4 - Little Shell CX-Q-676 (Mẫu Màu Giao Ngẫu Nhiên)",
      product_finalprice: "9.000",
      product_price: "14.500",
      rating_html:
        "<div class='ratings'>\n\t\t\t\t<div class='rating-box'>\n\t\t\t\t    <div class='rating' style='width:0%'></div>\n\t\t\t\t</div>\n\t\t\t    <div class='amount'>(0)</div>\n\t\t\t</div>",
      soon_release: "0",
      product_url: "https://www.fahasa.com/bia-nut-hinh-cx-q-6.html",
      image_src:
        "https://cdn0.fahasa.com/media/catalog/product/3/9/3900000064668.jpg",
      discount: 38,
      discount_label_html:
        '<div class="label-pro-sale m-label-pro-sale"><span class="p-sale-label discount-l-fs">38%</span></div>',
      episode: null,
    },
    {
      type_id: "bundle",
      type: "bundle",
      product_id: "405122",
      product_name: "Combo Cùng Bé Nhập Học - Cấp 1",
      product_finalprice: "46.602",
      product_price: "56.000",
      rating_html:
        "<div class='ratings'>\n\t\t\t\t<div class='rating-box'>\n\t\t\t\t    <div class='rating' style='width:0%'></div>\n\t\t\t\t</div>\n\t\t\t    <div class='amount'>(0)</div>\n\t\t\t</div>",
      soon_release: "0",
      product_url: "https://www.fahasa.com/combo-cung-be-nhap-hoc-cap-1.html",
      image_src:
        "https://cdn0.fahasa.com/media/catalog/product/c/o/combo1_1_11.jpg",
      discount: 17,
      discount_label_html:
        '<div class="label-pro-sale m-label-pro-sale"><span class="p-sale-label discount-l-fs">17%</span></div>',
      episode: null,
    },
    {
      type_id: "simple",
      type: "simple",
      product_id: "402536",
      product_name:
        "Bộ Băng Keo Trang Trí XM-JD637 (Mẫu Sản Phẩm Bên Trong Là Ngẫu Nhiên)",
      product_finalprice: "50.000",
      product_price: "53.000",
      rating_html:
        "<div class='ratings'>\n\t\t\t\t<div class='rating-box'>\n\t\t\t\t    <div class='rating' style='width:0%'></div>\n\t\t\t\t</div>\n\t\t\t    <div class='amount'>(0)</div>\n\t\t\t</div>",
      soon_release: "0",
      product_url:
        "https://www.fahasa.com/bo-bang-keo-trang-tri-xm-jd637-mau-san-pham-ben-trong-la-ngau-nhien.html",
      image_src:
        "https://cdn0.fahasa.com/media/catalog/product/6/9/6972879870029.jpg",
      discount: 6,
      discount_label_html:
        '<div class="label-pro-sale m-label-pro-sale"><span class="p-sale-label discount-l-fs">6%</span></div>',
      episode: null,
    },
    {
      type_id: "simple",
      type: "simple",
      product_id: "400583",
      product_name: "Bộ 10 Bao Thư Vàng A5 - Grand TMG-8619",
      product_finalprice: "19.000",
      product_price: "31.000",
      rating_html:
        "<div class='ratings'>\n\t\t\t\t<div class='rating-box'>\n\t\t\t\t    <div class='rating' style='width:0%'></div>\n\t\t\t\t</div>\n\t\t\t    <div class='amount'>(0)</div>\n\t\t\t</div>",
      soon_release: "0",
      product_url:
        "https://www.fahasa.com/grand-bao-thu-vang-a5-grand-set-10c.html",
      image_src:
        "https://cdn0.fahasa.com/media/catalog/product/3/9/3900000072212.jpg",
      discount: 39,
      discount_label_html:
        '<div class="label-pro-sale m-label-pro-sale"><span class="p-sale-label discount-l-fs">39%</span></div>',
      episode: null,
    },
    {
      type_id: "simple",
      type: "simple",
      product_id: "395973",
      product_name:
        "Sổ Bìa Cứng Nhỏ Nút 64144-S002 - Hình Ngôi Sao - Dây Cài Màu Trắng",
      product_finalprice: "62.000",
      product_price: "88.000",
      rating_html:
        "<div class='ratings'>\n\t\t\t\t<div class='rating-box'>\n\t\t\t\t    <div class='rating' style='width:0%'></div>\n\t\t\t\t</div>\n\t\t\t    <div class='amount'>(0)</div>\n\t\t\t</div>",
      soon_release: "0",
      product_url:
        "https://www.fahasa.com/so-bia-cung-nho-nut-64144-s002-hinh-ngoi-sao-day-cai-mau-trang.html",
      image_src:
        "https://cdn0.fahasa.com/media/catalog/product/6/9/6937168773115-_2_.jpg",
      discount: 30,
      discount_label_html:
        '<div class="label-pro-sale m-label-pro-sale"><span class="p-sale-label discount-l-fs">30%</span></div>',
      episode: null,
    },
    {
      type_id: "simple",
      type: "simple",
      product_id: "395953",
      product_name:
        "Hộp Bút Hít - XiaoLingJing 3513 - Màu Hồng - Beautiful Scenery",
      product_finalprice: "68.000",
      product_price: "113.000",
      rating_html:
        "<div class='ratings'>\n\t\t\t\t<div class='rating-box'>\n\t\t\t\t    <div class='rating' style='width:0%'></div>\n\t\t\t\t</div>\n\t\t\t    <div class='amount'>(0)</div>\n\t\t\t</div>",
      soon_release: "0",
      product_url:
        "https://www.fahasa.com/hop-but-hit-xiaolingjing-3513-mau-hong-beautiful-scenery.html",
      image_src:
        "https://cdn0.fahasa.com/media/catalog/product/1/9/1901011510221-mau2-_5__1.jpg",
      discount: 40,
      discount_label_html:
        '<div class="label-pro-sale m-label-pro-sale"><span class="p-sale-label discount-l-fs">40%</span></div>',
      episode: null,
    },
    {
      type_id: "simple",
      type: "simple",
      product_id: "395952",
      product_name:
        "Hộp Bút Hít - XiaoLingJing 3513 - Màu Xanh Da Trời - Beautiful Scenery",
      product_finalprice: "68.000",
      product_price: "113.000",
      rating_html:
        "<div class='ratings'>\n\t\t\t\t<div class='rating-box'>\n\t\t\t\t    <div class='rating' style='width:0%'></div>\n\t\t\t\t</div>\n\t\t\t    <div class='amount'>(0)</div>\n\t\t\t</div>",
      soon_release: "0",
      product_url:
        "https://www.fahasa.com/hop-but-hit-xiaolingjing-3513-mau-xanh-da-troi-beautiful-scenery.html",
      image_src:
        "https://cdn0.fahasa.com/media/catalog/product/1/9/1901011510221-mau1-_2_.jpg",
      discount: 40,
      discount_label_html:
        '<div class="label-pro-sale m-label-pro-sale"><span class="p-sale-label discount-l-fs">40%</span></div>',
      episode: null,
    },
    {
      type_id: "simple",
      type: "simple",
      product_id: "394740",
      product_name:
        "Sổ Bìa Cứng Nhỏ Nút 64144-S002 - Hình Mèo 2 - Dây Cài Màu Trắng",
      product_finalprice: "62.000",
      product_price: "88.000",
      rating_html:
        "<div class='ratings'>\n\t\t\t\t<div class='rating-box'>\n\t\t\t\t    <div class='rating' style='width:0%'></div>\n\t\t\t\t</div>\n\t\t\t    <div class='amount'>(0)</div>\n\t\t\t</div>",
      soon_release: "0",
      product_url:
        "https://www.fahasa.com/so-bia-cung-nho-nut-64144-s002-hinh-meo-2-day-cai-mau-trang.html",
      image_src:
        "https://cdn0.fahasa.com/media/catalog/product/6/9/6937168773115-mau2.jpg",
      discount: 30,
      discount_label_html:
        '<div class="label-pro-sale m-label-pro-sale"><span class="p-sale-label discount-l-fs">30%</span></div>',
      episode: null,
    },
    {
      type_id: "simple",
      type: "simple",
      product_id: "394055",
      product_name: "Bút Nước Dạ Quang Cenvava Mini 1021 - Màu Vàng",
      product_finalprice: "8.000",
      product_price: "11.000",
      rating_html:
        "<div class='ratings'>\n\t\t\t\t<div class='rating-box'>\n\t\t\t\t    <div class='rating' style='width:0%'></div>\n\t\t\t\t</div>\n\t\t\t    <div class='amount'>(0)</div>\n\t\t\t</div>",
      soon_release: "0",
      product_url:
        "https://www.fahasa.com/but-nuoc-da-quang-cenvava-mini-1021-mau-vang.html",
      image_src:
        "https://cdn0.fahasa.com/media/catalog/product/4/8/4898405634144.jpg",
      discount: 27,
      discount_label_html:
        '<div class="label-pro-sale m-label-pro-sale"><span class="p-sale-label discount-l-fs">27%</span></div>',
      episode: null,
    },
    {
      type_id: "simple",
      type: "simple",
      product_id: "394053",
      product_name:
        "Giấy Note 75 x 75 mm - Bu Bu 1236 - Hình Bé Gái (55 Tờ) (Mẫu Màu Giao Ngẫu Nhiên)",
      product_finalprice: "14.000",
      product_price: "20.500",
      rating_html:
        "<div class='ratings'>\n\t\t\t\t<div class='rating-box'>\n\t\t\t\t    <div class='rating' style='width:0%'></div>\n\t\t\t\t</div>\n\t\t\t    <div class='amount'>(0)</div>\n\t\t\t</div>",
      soon_release: "0",
      product_url:
        "https://www.fahasa.com/giay-note-75-x-75-mm-bu-bu-1236-hinh-be-gai-55-to-mau-mau-giao-ngau-nhien.html",
      image_src:
        "https://cdn0.fahasa.com/media/catalog/product/3/9/3900000002554_1.jpg",
      discount: 32,
      discount_label_html:
        '<div class="label-pro-sale m-label-pro-sale"><span class="p-sale-label discount-l-fs">32%</span></div>',
      episode: null,
    },
    {
      type_id: "simple",
      type: "simple",
      product_id: "393873",
      product_name: "Giấy Dán Tomy No.109 - Hình Chữ Nhật",
      product_finalprice: "12.000",
      product_price: "16.500",
      rating_html:
        "<div class='ratings'>\n\t\t\t\t<div class='rating-box'>\n\t\t\t\t    <div class='rating' style='width:0%'></div>\n\t\t\t\t</div>\n\t\t\t    <div class='amount'>(0)</div>\n\t\t\t</div>",
      soon_release: "0",
      product_url:
        "https://www.fahasa.com/giay-dan-tomy-no-109-hinh-chu-nhat.html",
      image_src:
        "https://cdn0.fahasa.com/media/catalog/product/1/5/1507020146262-mau4_1.jpg",
      discount: 27,
      discount_label_html:
        '<div class="label-pro-sale m-label-pro-sale"><span class="p-sale-label discount-l-fs">27%</span></div>',
      episode: null,
    },
    {
      type_id: "simple",
      type: "simple",
      product_id: "393872",
      product_name: "Giấy Dán Tomy No.116 - Hình Tròn",
      product_finalprice: "12.000",
      product_price: "16.500",
      rating_html:
        "<div class='ratings'>\n\t\t\t\t<div class='rating-box'>\n\t\t\t\t    <div class='rating' style='width:0%'></div>\n\t\t\t\t</div>\n\t\t\t    <div class='amount'>(0)</div>\n\t\t\t</div>",
      soon_release: "0",
      product_url: "https://www.fahasa.com/giay-dan-tomy-no-116-hinh-tron.html",
      image_src:
        "https://cdn0.fahasa.com/media/catalog/product/1/5/1507020146262-mau3_1.jpg",
      discount: 27,
      discount_label_html:
        '<div class="label-pro-sale m-label-pro-sale"><span class="p-sale-label discount-l-fs">27%</span></div>',
      episode: null,
    },
    {
      type_id: "simple",
      type: "simple",
      product_id: "393871",
      product_name: "Giấy Dán Tomy No.114 - Hình Tròn",
      product_finalprice: "12.000",
      product_price: "16.500",
      rating_html:
        "<div class='ratings'>\n\t\t\t\t<div class='rating-box'>\n\t\t\t\t    <div class='rating' style='width:0%'></div>\n\t\t\t\t</div>\n\t\t\t    <div class='amount'>(0)</div>\n\t\t\t</div>",
      soon_release: "0",
      product_url: "https://www.fahasa.com/giay-dan-tomy-no-114-hinh-tron.html",
      image_src:
        "https://cdn0.fahasa.com/media/catalog/product/1/5/1507020146262-mau2_3.jpg",
      discount: 27,
      discount_label_html:
        '<div class="label-pro-sale m-label-pro-sale"><span class="p-sale-label discount-l-fs">27%</span></div>',
      episode: null,
    },
    {
      type_id: "simple",
      type: "simple",
      product_id: "393654",
      product_name:
        "Bộ Compa + Bút Chì Kim + Ngòi Chì - XZB 8300 - Màu Xanh Mint",
      product_finalprice: "19.000",
      product_price: "27.000",
      rating_html:
        "<div class='ratings'>\n\t\t\t\t<div class='rating-box'>\n\t\t\t\t    <div class='rating' style='width:0%'></div>\n\t\t\t\t</div>\n\t\t\t    <div class='amount'>(0)</div>\n\t\t\t</div>",
      soon_release: "0",
      product_url:
        "https://www.fahasa.com/bo-compa-but-chi-kim-ngoi-chi-xzb-8300-mau-xanh-mint.html",
      image_src:
        "https://cdn0.fahasa.com/media/catalog/product/1/9/1901011668168-mau2.jpg",
      discount: 30,
      discount_label_html:
        '<div class="label-pro-sale m-label-pro-sale"><span class="p-sale-label discount-l-fs">30%</span></div>',
      episode: null,
    },
    {
      type_id: "simple",
      type: "simple",
      product_id: "393653",
      product_name:
        "Bộ Compa + Bút Chì Kim + Ngòi Chì - XZB 8300 - Màu Xanh Dương",
      product_finalprice: "19.000",
      product_price: "27.000",
      rating_html:
        "<div class='ratings'>\n\t\t\t\t<div class='rating-box'>\n\t\t\t\t    <div class='rating' style='width:0%'></div>\n\t\t\t\t</div>\n\t\t\t    <div class='amount'>(0)</div>\n\t\t\t</div>",
      soon_release: "0",
      product_url:
        "https://www.fahasa.com/bo-compa-but-chi-kim-ngoi-chi-xzb-8300-mau-xanh-duong.html",
      image_src:
        "https://cdn0.fahasa.com/media/catalog/product/1/9/1901011668168-mau1.jpg",
      discount: 30,
      discount_label_html:
        '<div class="label-pro-sale m-label-pro-sale"><span class="p-sale-label discount-l-fs">30%</span></div>',
      episode: null,
    },
    {
      type_id: "simple",
      type: "simple",
      product_id: "393652",
      product_name: "Bộ Compa 7 Món - Bút Chì Kim - TGA 5006 - Màu Xanh Dương",
      product_finalprice: "25.000",
      product_price: "35.500",
      rating_html:
        "<div class='ratings'>\n\t\t\t\t<div class='rating-box'>\n\t\t\t\t    <div class='rating' style='width:0%'></div>\n\t\t\t\t</div>\n\t\t\t    <div class='amount'>(0)</div>\n\t\t\t</div>",
      soon_release: "0",
      product_url:
        "https://www.fahasa.com/bo-compa-7-mon-but-chi-kim-tga-5006-mau-xanh-duong.html",
      image_src:
        "https://cdn0.fahasa.com/media/catalog/product/1/9/1901011570713-_8_.jpg",
      discount: 30,
      discount_label_html:
        '<div class="label-pro-sale m-label-pro-sale"><span class="p-sale-label discount-l-fs">30%</span></div>',
      episode: null,
    },
    {
      type_id: "simple",
      type: "simple",
      product_id: "393651",
      product_name: "Bộ Compa 7 Món - Bút Chì Kim - TGA 5006 - Màu Đen",
      product_finalprice: "25.000",
      product_price: "35.500",
      rating_html:
        "<div class='ratings'>\n\t\t\t\t<div class='rating-box'>\n\t\t\t\t    <div class='rating' style='width:0%'></div>\n\t\t\t\t</div>\n\t\t\t    <div class='amount'>(0)</div>\n\t\t\t</div>",
      soon_release: "0",
      product_url:
        "https://www.fahasa.com/bo-compa-7-mon-but-chi-kim-tga-5006-mau-den.html",
      image_src:
        "https://cdn0.fahasa.com/media/catalog/product/1/9/1901011570713-_2__1.jpg",
      discount: 30,
      discount_label_html:
        '<div class="label-pro-sale m-label-pro-sale"><span class="p-sale-label discount-l-fs">30%</span></div>',
      episode: null,
    },
    {
      type_id: "simple",
      type: "simple",
      product_id: "393623",
      product_name: "Sổ Da Bìa Da Kẻ Ngang 25-09 - Màu Nâu",
      product_finalprice: "64.000",
      product_price: "106.000",
      rating_html:
        "<div class='ratings'>\n\t\t\t\t<div class='rating-box'>\n\t\t\t\t    <div class='rating' style='width:0%'></div>\n\t\t\t\t</div>\n\t\t\t    <div class='amount'>(0)</div>\n\t\t\t</div>",
      soon_release: "0",
      product_url:
        "https://www.fahasa.com/so-da-bia-da-ke-ngang-25-09-mau-nau.html",
      image_src:
        "https://cdn0.fahasa.com/media/catalog/product/1/9/1903021473190-_2_.jpg",
      discount: 40,
      discount_label_html:
        '<div class="label-pro-sale m-label-pro-sale"><span class="p-sale-label discount-l-fs">40%</span></div>',
      episode: null,
    },
    {
      type_id: "simple",
      type: "simple",
      product_id: "393394",
      product_name: "Sổ Bìa Da Kẻ Ngang - TGA 105-25 - Màu Xanh Dương",
      product_finalprice: "59.000",
      product_price: "99.000",
      rating_html:
        "<div class='ratings'>\n\t\t\t\t<div class='rating-box'>\n\t\t\t\t    <div class='rating' style='width:0%'></div>\n\t\t\t\t</div>\n\t\t\t    <div class='amount'>(0)</div>\n\t\t\t</div>",
      soon_release: "0",
      product_url:
        "https://www.fahasa.com/so-bia-da-ke-ngang-tga-105-25-mau-xanh-duong.html",
      image_src:
        "https://cdn0.fahasa.com/media/catalog/product/1/9/1903021552772-mau3.jpg",
      discount: 40,
      discount_label_html:
        '<div class="label-pro-sale m-label-pro-sale"><span class="p-sale-label discount-l-fs">40%</span></div>',
      episode: null,
    },
    {
      type_id: "simple",
      type: "simple",
      product_id: "393393",
      product_name: "Sổ Bìa Da Kẻ Ngang Nhỏ 50-23 - Màu Hồng",
      product_finalprice: "36.000",
      product_price: "60.000",
      rating_html:
        "<div class='ratings'>\n\t\t\t\t<div class='rating-box'>\n\t\t\t\t    <div class='rating' style='width:0%'></div>\n\t\t\t\t</div>\n\t\t\t    <div class='amount'>(0)</div>\n\t\t\t</div>",
      soon_release: "0",
      product_url:
        "https://www.fahasa.com/so-bia-da-ke-ngang-nho-50-23-mau-hong.html",
      image_src:
        "https://cdn0.fahasa.com/media/catalog/product/1/9/1903021521846-mau3.jpg",
      discount: 40,
      discount_label_html:
        '<div class="label-pro-sale m-label-pro-sale"><span class="p-sale-label discount-l-fs">40%</span></div>',
      episode: null,
    },
    {
      type_id: "simple",
      type: "simple",
      product_id: "393392",
      product_name: "Sổ Trong Nhí Cute Cate 100-284 - Mẫu 4 - Mèo Và Chim",
      product_finalprice: "10.000",
      product_price: "14.500",
      rating_html:
        "<div class='ratings'>\n\t\t\t\t<div class='rating-box'>\n\t\t\t\t    <div class='rating' style='width:0%'></div>\n\t\t\t\t</div>\n\t\t\t    <div class='amount'>(0)</div>\n\t\t\t</div>",
      soon_release: "0",
      product_url:
        "https://www.fahasa.com/so-trong-nhi-cute-cate-100-284-mau-4-meo-va-chim.html",
      image_src:
        "https://cdn0.fahasa.com/media/catalog/product/1/9/1903021518884-mau4.jpg",
      discount: 31,
      discount_label_html:
        '<div class="label-pro-sale m-label-pro-sale"><span class="p-sale-label discount-l-fs">31%</span></div>',
      episode: null,
    },
  ];

  const data1 = product_list.map((item) => item["image_src"]);

  console.log(data1);

  useEffect(() => {
    FecthData(setBook, null, null, null, null, { loaisanphamid: 2 });
    FecthData(setBookTN, null, null, null, null, {
      loaisanphamid: 2,
      book: {
        theloai: 8,
      },
    });
    FecthData(setDochoi, null, null, null, null, {
      loaisanphamid: 1,
      stationery: {
        loaivpp: 12,
      },
    });
    document.title = "Home";
  }, []);

  const products = useSelector((state) => state.product.products);

  // xử lý data trước khi xuống server

  return (
    <div className="home-page">
      <Books />
      <Suspense fallback={<div className="text-center">Loading...!</div>}>
        <Category />
        <FeatureBook products={products} />

        {/* <Arrivals /> */}
        <VPP />
        <SliderListItem title={"Sách"} productList={book} />
        <SliderListItem title={"Thiếu nhi"} productList={bookTN} />
        <SliderListItem title={"Đờ chơi"} productList={dochoi} />
      </Suspense>
      {/* <SliderListItem title={"Thiếu nhi"} productList={products} />
        <SliderListItem title={"đồ chơi"} productList={products} />
        <SliderListItem title={"văn học"} productList={products} />}
      

      {/* <section className="deal">
        <div className="content">
          <h3>deal of the day</h3>
          <h1>upto 50% off</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            perspiciatis in atque dolore tempora quaerat at fuga dolorum natus
            velit.
          </p>
          <a href="#" className="btn">
            shop now
          </a>
        </div>

        <div className="image">
          <img src="image/deal-img.jpg" alt="" />
        </div>
      </section>

      <section className="reviews" id="reviews">
        <h1 className="heading">
          <span>client's reviews</span>
        </h1>

        <div className="swiper reviews-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <img src="image/pic-1.png" alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                facere hic.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="image/pic-2.png" alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                facere hic.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="image/pic-3.png" alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                facere hic.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
            <div className="swiper-slide box">
              <img src="image/pic-4.png" alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                facere hic.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="image/pic-5.png" alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                facere hic.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div className="swiper-slide box">
              <img src="image/pic-6.png" alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                facere hic.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default HomePage;
